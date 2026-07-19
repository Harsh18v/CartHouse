import {
    ShieldCheck,
    Truck,
    RefreshCcw,
    Headphones,
    Store,
    ShoppingBag,
    HeartHandshake,
    Sparkles,
} from "lucide-react";

const features = [
    {
        title: "Wide Product Selection",
        icon: ShoppingBag,
    },
    {
        title: "Trusted Sellers",
        icon: Store,
    },
    {
        title: "Secure Payments",
        icon: ShieldCheck,
    },
    {
        title: "Fast Delivery",
        icon: Truck,
    },
    {
        title: "Easy Returns",
        icon: RefreshCcw,
    },
    {
        title: "24/7 Support",
        icon: Headphones,
    },
];

const values = [
    {
        title: "Customer First",
        description:
            "Everything we build starts with creating a better shopping experience.",
        icon: HeartHandshake,
    },
    {
        title: "Quality",
        description:
            "Every product comes from verified sellers committed to quality.",
        icon: ShoppingBag,
    },
    {
        title: "Innovation",
        description:
            "We continuously improve our platform with modern technology.",
        icon: Sparkles,
    },
];

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">

            {/* Heading */}

            <div className="text-center">

                <span className="text-indigo-600 font-semibold uppercase tracking-widest">
                    About CartHouse
                </span>

                <h1 className="text-5xl font-bold mt-4">
                    Making Online Shopping
                    <br />
                    Simple & Reliable
                </h1>

                <p className="max-w-3xl mx-auto mt-6 text-gray-500 leading-8">
                    CartHouse is an online marketplace where customers discover
                    quality products from trusted sellers. Our goal is to provide
                    secure shopping, fast delivery, and a seamless buying experience
                    for everyone.
                </p>

            </div>

            {/* Mission */}

            <section className="mt-20 rounded-3xl border border-gray-200 p-10">

                <h2 className="text-3xl font-bold">
                    Our Mission
                </h2>

                <p className="mt-6 text-gray-600 leading-8">
                    We believe online shopping should be accessible, transparent,
                    and enjoyable. CartHouse connects customers with reliable
                    sellers while providing a secure platform that helps businesses
                    grow and shoppers find products they love.
                </p>

            </section>

            {/* Features */}

            <section className="mt-20">

                <h2 className="text-3xl font-bold text-center">
                    Why Choose CartHouse?
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-gray-200 p-8 hover:shadow-md transition"
                            >
                                <Icon className="w-10 h-10 text-indigo-600" />

                                <h3 className="text-xl font-semibold mt-5">
                                    {feature.title}
                                </h3>
                            </div>
                        );
                    })}

                </div>

            </section>

            {/* Values */}

            <section className="mt-20">

                <h2 className="text-3xl font-bold text-center">
                    Our Core Values
                </h2>

                <div className="grid lg:grid-cols-3 gap-8 mt-10">

                    {values.map((value) => {
                        const Icon = value.icon;

                        return (
                            <div
                                key={value.title}
                                className="rounded-2xl bg-gray-50 p-8"
                            >
                                <Icon className="w-10 h-10 text-indigo-600" />

                                <h3 className="text-2xl font-semibold mt-6">
                                    {value.title}
                                </h3>

                                <p className="text-gray-500 mt-4 leading-7">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </section>

            {/* Stats */}

            <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

                {[
                    ["10K+", "Happy Customers"],
                    ["2K+", "Products"],
                    ["100+", "Trusted Sellers"],
                    ["50K+", "Orders Delivered"],
                ].map(([number, title]) => (
                    <div
                        key={title}
                        className="rounded-2xl border border-gray-200 p-8 text-center"
                    >
                        <h3 className="text-4xl font-bold text-indigo-600">
                            {number}
                        </h3>

                        <p className="text-gray-500 mt-3">
                            {title}
                        </p>
                    </div>
                ))}

            </section>

            {/* Promise */}

            <section className="mt-20 rounded-3xl bg-indigo-600 text-white p-12 text-center">

                <h2 className="text-4xl font-bold">
                    Our Promise
                </h2>

                <p className="max-w-3xl mx-auto mt-6 leading-8 text-indigo-100">
                    Whether you're shopping for everyday essentials or growing your
                    business as a seller, CartHouse is committed to providing a
                    secure, reliable, and enjoyable marketplace experience.
                </p>

            </section>

        </div>
    );
}