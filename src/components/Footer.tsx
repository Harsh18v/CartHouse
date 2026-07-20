import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FooterLink {
    text: string;
    path: string;
    icon?: LucideIcon | null;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

const Footer = () => {

    const linkSections: FooterSection[] = [
        {
            title: "PRODUCTS",
            links: [
                { text: "Earphones", path: '/shop?search=earbud', icon: null },
                { text: "Headphones", path: '//shop?search=earbud', icon: null },
                { text: "Smartphones", path: '/shop', icon: null },
                { text: "Laptops", path: '/shop', icon: null },
            ]
        },
        {
            title: "WEBSITE?",
            links: [
                { text: "Home", path: '/', icon: null },
                { text: "Privacy Policy", path: '/privacy-policy', icon: null },
                { text: "Become Plus Member", path: '/pricing', icon: null },
                { text: "Create Your Store", path: '/create-store', icon: null },
            ]
        },
        {
            title: "CONTACT",
            links: [
                { text: "+1-212-456-7890", path: '/'},
                { text: "contact@example.com", path: '/'},
                { text: "794 Francisco, 94102", path: '/' }
            ]
        }
    ];


    return (
        <footer className="mx-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-slate-500/30 text-slate-500">
                    <div>
                        <Link
                            href="/"
                            className="flex items-center gap-2"
                        >
                            <ShoppingBag
                                size={28}
                                className="text-indigo-600"
                            />
                            <span className="text-2xl font-bold tracking-tight text-gray-900">
                                Cart<span className="text-indigo-600">House</span>
                            </span>
                        </Link>
                        <p className="max-w-102 mt-6 text-sm">Welcome to gocart, your ultimate destination for the latest and smartest gadgets. From smartphones and smartwatches to essential accessories, we bring you the best in innovation — all in one place.</p>
                    </div>
                    <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5 text-sm ">
                        {linkSections.map((section, index) => (
                            <div key={index}>
                                <h3 className="font-medium text-slate-700 md:mb-5 mb-3">{section.title}</h3>
                                <ul className="space-y-2.5">
                                    {section.links.map((link, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            {link.icon && <link.icon />}
                                            <Link href={link.path} className="hover:underline transition">{link.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="py-4 text-sm text-slate-500">
                    Copyright 2025 © gocart All Right Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;