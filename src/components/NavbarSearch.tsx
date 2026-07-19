'use client'
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NavbarSearch = () => {
    const router = useRouter();
    const [search, setSearch] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if (!search.trim()) return;

        router.push(`/shop?search=${encodeURIComponent(search.trim())}`);
    };

    return (
        <form onSubmit={handleSearch} className="relative w-full max-w-xs">
            <SearchIcon
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-9 pr-3 py-2 text-sm rounded-full border border-slate-200 outline-none focus:border-indigo-400 transition-colors bg-slate-50 focus:bg-white"
            />
        </form>
    );
};

export default NavbarSearch;