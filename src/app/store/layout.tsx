import StoreLayout from "@/components/store/StoreLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "CartHouse | Shop Electronics, Fashion & Home Essentials Online",
        template: "%s | CartHouse",
    },
    description: "Shop premium electronics, fashion, home essentials, and more at CartHouse. Enjoy secure checkout, fast delivery, and trusted sellers — all in one place.",
    keywords: [
        "CartHouse",
        "online shopping",
        "e-commerce",
        "buy electronics online",
        "fashion online store",
        "home essentials",
        "secure checkout",
        "fast delivery India",
    ],
    authors: [{ name: "Harsh Vishwakarma" }],
    creator: "Harsh Vishwakarma",
    metadataBase: new URL("https://carthouse.vercel.app"),
    openGraph: {
        title: "CartHouse | Shop Electronics, Fashion & Home Essentials Online",
        description: "Discover products designed for everyday life. Shop premium electronics, fashion, and home essentials with secure checkout and fast delivery.",
        url: "https://carthouse.vercel.app",
        siteName: "CartHouse",
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "CartHouse - Online Shopping Platform",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CartHouse | Shop Electronics, Fashion & Home Essentials Online",
        description: "Discover products designed for everyday life. Shop premium electronics, fashion, and home essentials with secure checkout and fast delivery.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};
export default function RootAdminLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
