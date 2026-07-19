import {
    Mail,
    Phone,
    MapPin,
    Clock,
    MessageCircle,
} from "lucide-react";

export default function ContactPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">

            {/* Hero */}

            <div className="text-center max-w-3xl mx-auto">

                <span className="text-indigo-600 font-semibold uppercase tracking-wider">
                    Contact Us
                </span>

                <h1 className="text-5xl font-bold mt-4">
                    We'd Love to Hear From You
                </h1>

                <p className="text-gray-500 mt-6 leading-8">
                    Whether you have a question about your order, becoming a seller,
                    or need technical support, our team is here to help.
                </p>

            </div>

            {/* Contact Cards */}

            <div className="grid md:grid-cols-3 gap-6 mt-16">

                <div className="border rounded-3xl p-8 text-center hover:shadow-md transition">
                    <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mx-auto">
                        <Phone className="text-indigo-600" />
                    </div>

                    <h3 className="font-semibold text-xl mt-5">
                        Phone
                    </h3>

                    <p className="text-gray-500 mt-3">
                        +91 80100 11527
                    </p>
                </div>

                <div className="border rounded-3xl p-8 text-center hover:shadow-md transition">
                    <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mx-auto">
                        <Mail className="text-indigo-600" />
                    </div>

                    <h3 className="font-semibold text-xl mt-5">
                        Email
                    </h3>

                    <p className="text-gray-500 mt-3">
                        support@carthouse.com
                    </p>
                </div>

                <div className="border rounded-3xl p-8 text-center hover:shadow-md transition">
                    <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mx-auto">
                        <MapPin className="text-indigo-600" />
                    </div>

                    <h3 className="font-semibold text-xl mt-5">
                        Address
                    </h3>

                    <p className="text-gray-500 mt-3">
                        Pune, Maharashtra, India
                    </p>
                </div>

            </div>

            {/* Contact Form */}

            <div className="grid lg:grid-cols-3 gap-10 mt-20">

                <div className="lg:col-span-2 border rounded-3xl p-10">

                    <h2 className="text-3xl font-bold">
                        Send us a Message
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Fill out the form below and we'll get back to you as soon as
                        possible.
                    </p>

                    <form className="mt-8 space-y-6">

                        <div className="grid md:grid-cols-2 gap-6">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <textarea
                            rows={6}
                            placeholder="Write your message..."
                            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        />

                        <button
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl transition"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

                {/* Business Hours */}

                <div className="space-y-6">

                    <div className="border rounded-3xl p-8">

                        <Clock className="text-indigo-600 w-8 h-8" />

                        <h3 className="text-xl font-semibold mt-5">
                            Business Hours
                        </h3>

                        <div className="mt-5 space-y-3 text-gray-500">

                            <div className="flex justify-between">
                                <span>Monday - Friday</span>
                                <span>9 AM - 7 PM</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Saturday</span>
                                <span>10 AM - 5 PM</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Sunday</span>
                                <span>Closed</span>
                            </div>

                        </div>

                    </div>

                    <div className="border rounded-3xl p-8">

                        <MessageCircle className="text-indigo-600 w-8 h-8" />

                        <h3 className="text-xl font-semibold mt-5">
                            Need Help?
                        </h3>

                        <p className="text-gray-500 mt-4 leading-7">
                            Our support team usually replies within
                            <span className="font-semibold text-gray-700">
                                {" "}24 hours.
                            </span>
                        </p>

                    </div>

                </div>

            </div>

            {/* FAQ */}

            <div className="mt-24">

                <h2 className="text-4xl font-bold text-center">
                    Frequently Asked Questions
                </h2>

                <div className="mt-12 space-y-5">

                    {[
                        {
                            q: "How can I track my order?",
                            a: "You can track your order from the Orders section after logging into your account.",
                        },
                        {
                            q: "How do I become a seller?",
                            a: "Click on 'Become a Seller', choose a plan, and complete the registration process.",
                        },
                        {
                            q: "What payment methods are accepted?",
                            a: "We accept UPI, Debit Cards, Credit Cards, Net Banking, and Cash on Delivery where available.",
                        },
                    ].map((item) => (
                        <div
                            key={item.q}
                            className="border rounded-2xl p-6"
                        >
                            <h3 className="font-semibold text-lg">
                                {item.q}
                            </h3>

                            <p className="text-gray-500 mt-3 leading-7">
                                {item.a}
                            </p>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}