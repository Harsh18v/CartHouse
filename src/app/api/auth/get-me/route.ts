import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import User from "@/models/user.model";


export async function GET(req: NextRequest) {
    try {
        await connectDB();

        const token = req.cookies.get("token")?.value;

        if (!token) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
            id: string;
            email: string;
            role: string;
        };

        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                message: "User fetched successfully",
                user,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Invalid or expired token" },
            { status: 401 }
        );
    }
}