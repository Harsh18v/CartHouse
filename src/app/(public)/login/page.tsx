"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const router = useRouter()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const endpoint = isLogin
                ? "/api/auth/login"
                : "/api/auth/register";
            const res = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (!res.ok) {
                alert(data.message);
                return;
            }
            alert(data.message);
            setFormData({
                name: "",
                email: "",
                password: "",
            });

            router.push("/");

        } catch (error) {
            console.error(error);
            alert("Something went wrong.");
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-50 px-4 my-16">

            <div className="w-full max-w-md">
                {/* Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    {/* Tabs */}
                    <div className="flex bg-gray-100 rounded-full p-1 mb-8">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-2.5 rounded-full text-sm font-medium transition-all ${isLogin
                                ? "bg-indigo-600 text-white shadow-sm"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-2.5 rounded-full text-sm font-medium transition-all ${!isLogin
                                ? "bg-indigo-600 text-white shadow-sm"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            Register
                        </button>
                    </div>

                    <h1 className="text-2xl font-semibold text-gray-800 mb-1">
                        {isLogin ? "Welcome back" : "Create an account"}
                    </h1>
                    <p className="text-sm text-gray-500 mb-6">
                        {isLogin
                            ? "Login to continue shopping smarter."
                            : "Sign up to start shopping smarter."}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isLogin && (
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                                />
                            </div>
                        )}

                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? (
                                    <EyeOff className="w-4 h-4" />
                                ) : (
                                    <Eye className="w-4 h-4" />
                                )}
                            </button>
                        </div>

                        {isLogin && (
                            <div className="flex justify-end">
                                <Link
                                    href="/forgot-password"
                                    className="text-xs text-gray-500 hover:text-indigo-600"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors mt-2"
                        >
                            {isLogin ? "Login" : "Create account"}
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-indigo-600 font-medium hover:underline"
                        >
                            {isLogin ? "Sign up" : "Login"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}