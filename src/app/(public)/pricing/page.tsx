import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "Free",
        description: "Perfect for new sellers.",
        features: [
            "Up to 20 products",
            "Basic analytics",
            "Email support",
            "1 Store",
        ],
        button: "Current Plan",
        current: true,
    },
    {
        name: "Pro",
        price: "₹499",
        duration: "/month",
        description: "Best for growing businesses.",
        features: [
            "Unlimited products",
            "Advanced analytics",
            "Priority support",
            "Discount coupons",
            "Custom store",
        ],
        button: "Upgrade Now",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "₹999",
        duration: "/month",
        description: "For large businesses.",
        features: [
            "Everything in Pro",
            "Dedicated manager",
            "Custom integrations",
            "API access",
            "24/7 Premium support",
        ],
        button: "Contact Sales",
    },
];

export default function PricingPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="text-center mb-14">
                <h1 className="text-4xl font-bold text-gray-900">
                    Choose Your Seller Plan
                </h1>
                <p className="text-gray-500 mt-3">
                    Upgrade anytime and unlock more powerful selling features.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative rounded-2xl border bg-white shadow-sm p-8 ${plan.popular
                            ? "border-indigo-600 shadow-xl scale-105"
                            : "border-gray-200"
                            }`}
                    >
                        {plan.popular && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-4 py-1 rounded-full font-medium">
                                Most Popular
                            </span>
                        )}

                        <h2 className="text-2xl font-bold">{plan.name}</h2>

                        <p className="text-gray-500 mt-2">{plan.description}</p>

                        <div className="mt-6 flex items-end">
                            <span className="text-5xl font-bold">{plan.price}</span>
                            <span className="text-gray-500 ml-1">
                                {plan.duration}
                            </span>
                        </div>

                        <ul className="space-y-4 mt-8">
                            {plan.features.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex items-center gap-3 text-gray-700"
                                >
                                    <Check className="w-5 h-5 text-green-500" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            disabled={plan.current}
                            className={`mt-10 w-full py-3 rounded-xl font-medium transition ${plan.current
                                ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                                : plan.popular
                                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                                    : "border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                                }`}
                        >
                            {plan.button}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}