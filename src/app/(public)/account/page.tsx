"use client";

import {
    Package,
    MapPin,
    CreditCard,
    Lock,
    Heart,
    Gift,
    Star,
    HelpCircle,
    ChevronRight,
    RotateCcw,
} from "lucide-react";

const userName = "Om Vishwakarma";

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
    Delivered: "bg-green-100 text-green-700",
    Shipped: "bg-blue-100 text-blue-700",
    Processing: "bg-orange-100 text-orange-700",
};

export default function AccountPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 py-10">
                {/* Page title */}
                <h1 className="text-2xl font-semibold text-gray-800 mb-1">Your Account</h1>
                <p className="text-sm text-gray-500 mb-8">
                    Hello, {userName.split(" ")[0]} — manage your orders, details, and preferences.
                </p>

                {/* Recent order strip — Amazon shows this at top */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-base font-semibold text-gray-800">Recent orders</h2>
                        <a href="#" className="text-sm text-indigo-600 font-medium hover:underline flex items-center gap-1">
                            View all orders <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {recentOrders.map((order) => (
                            <div
                                key={order.id}
                                className="border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-colors"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <span
                                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[order.status]}`}
                                    >
                                        {order.status}
                                    </span>
                                    <span className="text-xs text-gray-400">{order.date}</span>
                                </div>
                                <p className="text-sm font-medium text-gray-800 mb-1">{order.item}</p>
                                <p className="text-xs text-gray-400 mb-3">{order.id}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-gray-800">{order.amount}</span>
                                    <button className="text-xs font-medium text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors flex items-center gap-1">
                                        <RotateCcw className="w-3 h-3" />
                                        Buy again
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Account sections grid — the core Amazon pattern */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {accountSections.map((section) => {
                        const Icon = section.icon;
                        return (
                            <div
                                key={section.title}
                                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-green-600" />
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all mt-2" />
                                </div>

                                <h3 className="text-sm font-semibold text-gray-800 mb-1">{section.title}</h3>
                                <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                                    {section.description}
                                </p>

                                <div className="space-y-1.5 pt-3 border-t border-gray-50">
                                    {/* {section.links.map((link) => (

                                        key = { link }
                      href = "#"
                      className = "block text-xs text-indigo-600 hover:underline"
                                        >
                                        { link }
                    </a>
                  ))} */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div >
    );
}