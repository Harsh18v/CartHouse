import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import User from "@/models/user.model";

export async function POST(req: NextRequest) {
    try {

        await connectDB();

        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "All fields are required." },
                { status: 400 }
            );
        }

        const existingEmail = await User.findOne({ email });

        if (existingEmail) {
            return NextResponse.json(
                { message: "Email already exists." },
                { status: 409 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: "user"
        });

        return NextResponse.json(
            {
                message: "Registration successful.",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                },
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Internal Server Error." },
            { status: 500 }
        );
    }
}
