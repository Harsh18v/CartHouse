'use client'

const sections = [
    {
        title: "1. Information We Collect",
        content: [
            "We collect information you provide directly to us when you create an account, place an order, or contact customer support. This includes your name, email address, phone number, shipping and billing addresses, and payment details.",
            "We also automatically collect certain information when you use CartHouse, including your IP address, browser type, device information, pages visited, and shopping activity such as items viewed, added to cart, or purchased.",
        ],
    },
    {
        title: "2. How We Use Your Information",
        content: [
            "We use the information we collect to process your orders, manage your account, provide customer support, and communicate with you about your purchases.",
            "We also use this information to personalize your shopping experience, recommend products, improve our services, prevent fraud, and comply with legal obligations.",
        ],
    },
    {
        title: "3. Information Sharing",
        content: [
            "We do not sell your personal information to third parties. We may share your information with trusted service providers who help us operate our platform, such as payment processors, shipping partners, and cloud hosting providers.",
            "We may also disclose your information if required by law, or to protect the rights, property, or safety of CartHouse, our users, or others.",
        ],
    },
    {
        title: "4. Cookies and Tracking Technologies",
        content: [
            "We use cookies and similar tracking technologies to keep you signed in, remember your cart, understand how you use our site, and improve our services.",
            "You can control cookies through your browser settings, though disabling them may affect certain features of CartHouse, such as staying logged in or maintaining items in your cart.",
        ],
    },
    {
        title: "5. Data Security",
        content: [
            "We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
            "However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
        ],
    },
    {
        title: "6. Your Rights and Choices",
        content: [
            "You may access, update, or delete your account information at any time through your account settings.",
            "You may also opt out of promotional communications by following the unsubscribe instructions included in those messages. Certain service-related communications, such as order confirmations, cannot be opted out of while you have an active account.",
        ],
    },
    {
        title: "7. Data Retention",
        content: [
            "We retain your personal information for as long as your account is active or as needed to provide you services, comply with our legal obligations, resolve disputes, and enforce our agreements.",
        ],
    },
    {
        title: "8. Children's Privacy",
        content: [
            "CartHouse is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected such information, we will take steps to delete it.",
        ],
    },
    {
        title: "9. Changes to This Policy",
        content: [
            "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of significant changes by posting the updated policy on this page with a revised effective date.",
        ],
    },
    {
        title: "10. Contact Us",
        content: [
            "If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at support@carthouse.com.",
        ],
    },
]

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-6 py-12">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">Privacy Policy</h1>
                    <p className="text-sm text-slate-500 mt-3">Last updated: July 20, 2026</p>
                    <p className="text-slate-600 mt-4 max-w-2xl">
                        At CartHouse, we value your trust and are committed to protecting your personal information.
                        This Privacy Policy explains what information we collect, how we use it, and the choices you have.
                    </p>
                </div>

                {/* Sections */}
                <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 sm:p-10 space-y-10">
                    {sections.map((section) => (
                        <div key={section.title} id={section.title.split('.')[0]} className="scroll-mt-24">
                            <h2 className="text-lg font-semibold text-slate-800 mb-3">{section.title}</h2>
                            <div className="space-y-3">
                                {section.content.map((paragraph, i) => (
                                    <p key={i} className="text-sm text-slate-600 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer note */}
                <div className="mt-10 bg-indigo-50/50 rounded-2xl p-6 text-center">
                    <p className="text-sm text-slate-600">
                        Have questions about your data? Reach out to us anytime at{" "}
                        <a href="mailto:support@carthouse.com" className="text-indigo-600 font-medium hover:text-indigo-700">
                            support@carthouse.com
                        </a>
                    </p>
                </div>

            </div>
        </div>
    )
}