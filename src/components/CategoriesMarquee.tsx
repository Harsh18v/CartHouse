'use client'

import Link from "next/link";
import { categories } from "@/assets/assets";

const CategoriesMarquee = () => {
    return (
        <section className="relative mx-auto mt-16 max-w-7xl overflow-hidden select-none">

            {/* Left Fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />

            <div className="group flex min-w-max gap-4 whitespace-nowrap animate-[marqueeScroll_35s_linear_infinite] hover:[animation-play-state:paused]">

                {[...categories, ...categories].map((category, index) => (
                    <Link
                        key={`${category}-${index}`}
                        href={`/shop?category=${encodeURIComponent(category)}`}
                        className="rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white hover:shadow-md"
                    >
                        {category}
                    </Link>
                ))}

            </div>

            {/* Right Fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

        </section>
    );
};

export default CategoriesMarquee;