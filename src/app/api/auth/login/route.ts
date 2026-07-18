import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import User from "@/models/user.model";

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { message: "Email and password are required." },
                { status: 400 }
            );
        }

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { message: "Invalid email or password." },
                { status: 401 }
            );
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return NextResponse.json(
                { message: "Invalid email or password." },
                { status: 401 }
            );
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                role: user.role,
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: "7d",
            }
        );

        const response = NextResponse.json(
            {
                message: "Login successful",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
            },
            { status: 200 }
        );

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: "/",
        });

        return response;
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Internal Server Error." },
            { status: 500 }
        );
    }
}