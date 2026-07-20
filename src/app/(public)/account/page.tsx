"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Package, MapPin, CreditCard, Lock, Heart, Gift, Star, HelpCircle, ChevronRight, RotateCcw, ArrowBigRight } from "lucide-react";
import toast from "react-hot-toast";


const accountSections = [
    {
        title: "Your Orders",
        icon: Package,
        description: "Track, return, or buy things again",
        links: ["Track package", "Return or replace items"],
    },
    {
        title: "Login & Security",
        icon: Lock,
        description: "Edit name, email, mobile number, password",
        links: ["Change password", "Update phone number"],
    },
    {
        title: "Your Addresses",
        icon: MapPin,
        description: "Edit addresses for orders and gifts",
        links: ["Add new address", "Set default address"],
    },
    {
        title: "Payment Options",
        icon: CreditCard,
        description: "Edit or add payment methods",
        links: ["Add UPI or card", "View saved cards"],
    },
    {
        title: "Wishlist",
        icon: Heart,
        description: "Items you've saved for later",
        links: ["View wishlist", "Move to cart"],
    },
    {
        title: "Gift Cards",
        icon: Gift,
        description: "View balance or redeem a card",
        links: ["Redeem a gift card", "View balance"],
    },
    {
        title: "Your Reviews",
        icon: Star,
        description: "Manage reviews you've written",
        links: ["Rate a product", "Edit reviews"],
    },
    {
        title: "Help Center",
        icon: HelpCircle,
        description: "Get help with an order or account",
        links: ["Contact support", "Return policy"],
    },
];

const recentOrders = [
    {
        id: "#ORD-1042",
        item: "Smart Watch Black",
        date: "12 Jul 2026",
        status: "Delivered",
        amount: "₹2,499",
    },
    {
        id: "#ORD-1039",
        item: "Wireless Headphones",
        date: "08 Jul 2026",
        status: "Shipped",
        amount: "₹1,899",
    },
    {
        id: "#ORD-1031",
        item: "Bluetooth Speaker",
        date: "01 Jul 2026",
        status: "Processing",
        amount: "₹999",
    },
];

const statusStyles: Record<string, string> = {
    Delivered: "bg-green-50 text-green-700",
    Shipped: "bg-indigo-50 text-indigo-700",
    Processing: "bg-orange-50 text-orange-700",
};

export default function AccountPage() {

    const [user, setUser] = useState<{ name?: string } | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const router = useRouter();


    const handleLogout = async () => {
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                credentials: "include",
            });

            if (!res.ok) {
                throw new Error("Logout failed");
            }

            toast.success("Logged out successfully");
            router.push("/");
            router.refresh(); // clears any cached user state from Next.js router cache
        } catch {
            toast.error("Could not log out. Please try again.");
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                const res = await fetch("/api/auth/get-me", {
                    method: "GET",
                    credentials: "include", // sends the session cookie along with the request
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch user data");
                }

                const data = await res.json();
                setUser(data.user || null);
            } catch (err: unknown) {
                setError(err instanceof Error ? err.message : "Something went wrong");
                toast.error("Could not load your account details");
            } finally {
                setLoading(false);
            }
        };
        fetchUser()
    }, [])


    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-6xl mx-auto px-6 py-10">
                {/* Page title */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800 mb-1">Your Account</h1>
                        <p className="text-sm text-slate-500 mb-8">
                            Hello, {user?.name || "there"} — manage your orders, details, and preferences.
                        </p>
                    </div>
                    <button onClick={handleLogout} className="flex items-center gap-2 bg-red-500 p-2 rounded-xl text-white px-4">
                        <span>Logout</span>
                        <ArrowBigRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Recent order strip */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-base font-semibold text-slate-800">Recent orders</h2>
                        <a href="#" className="text-sm text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-1">
                            View all orders <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {recentOrders.map((order) => (
                            <div
                                key={order.id}
                                className="border border-slate-100 rounded-xl p-4 hover:border-indigo-200 hover:shadow-sm transition-all"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <span
                                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[order.status]}`}
                                    >
                                        {order.status}
                                    </span>
                                    <span className="text-xs text-slate-400">{order.date}</span>
                                </div>
                                <p className="text-sm font-medium text-slate-800 mb-1">{order.item}</p>
                                <p className="text-xs text-slate-400 mb-3">{order.id}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-slate-800">{order.amount}</span>
                                    <button onClick={() => router.push("/shop")} className="text-xs font-medium text-indigo-600 border border-indigo-200 rounded-lg px-3 py-1.5 hover:bg-indigo-50 transition-colors flex items-center gap-1">
                                        <RotateCcw className="w-3 h-3" />
                                        Buy again
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Account sections grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {accountSections.map((section) => {
                        const Icon = section.icon;
                        return (
                            <div
                                key={section.title}
                                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all mt-2" />
                                </div>

                                <h3 className="text-sm font-semibold text-slate-800 mb-1">{section.title}</h3>
                                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                                    {section.description}
                                </p>

                                <div className="space-y-1.5 pt-3 border-t border-slate-50">
                                    {section.links.map((link) => (
                                        <Link
                                            key={link}
                                            href="/"
                                            className="block text-xs text-indigo-600 hover:text-indigo-700 hover:underline"
                                        >
                                            {link}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
