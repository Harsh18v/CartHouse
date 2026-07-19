'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ShoppingBag, ShoppingCart, Menu, X } from 'lucide-react'
import { FormEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ArrowBigRight } from 'lucide-react'
import toast from 'react-hot-toast'
import NavbarSearch from './NavbarSearch'

interface RootState {
    cart: {
        total: number
    }
}

const Navbar = () => {
    const router = useRouter()
    const pathname = usePathname()

    const [search, setSearch] = useState('')
    const [user, setUser] = useState<string | null>(null)
    const [mobileOpen, setMobileOpen] = useState(false)

    const cartCount = useSelector(
        (state: RootState) => state.cart.total
    )

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!search.trim()) return

        router.push(`/shop?search=${encodeURIComponent(search)}`)
    }

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
            setUser(null);
            router.push("/");
            router.refresh();
        } catch (err: any) {
            toast.error("Could not log out. Please try again.");
        }
    };

    const getUser = async () => {
        try {
            const res = await fetch('/api/auth/get-me', { credentials: 'include' })

            if (!res.ok) {
                setUser(null)
                return
            }

            const data = await res.json()
            setUser(data.user?.name || null)

        } catch (error) {
            console.error(error)
            setUser(null)
        }
    }

    useEffect(() => {
        getUser()
    }, [pathname])

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                    {/* Logo */}
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

                    {/* Navigation */}
                    <nav className="hidden items-center gap-8 lg:flex">
                        <Link
                            href="/"
                            className="font-medium text-gray-600 transition hover:text-indigo-600"
                        >
                            Home
                        </Link>
                        <Link
                            href="/shop"
                            className="font-medium text-gray-600 transition hover:text-indigo-600"
                        >
                            Shop
                        </Link>
                        <Link
                            href="/about"
                            className="font-medium text-gray-600 transition hover:text-indigo-600"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="font-medium text-gray-600 transition hover:text-indigo-600"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Right Side */}

                    <div className="flex items-center gap-4">

                        {/* Mobile menu toggle */}
                        <button
                            onClick={() => setMobileOpen((v) => !v)}
                            className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 lg:hidden"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>

                        {/* Search (hidden on very small screens) */}
                        <div className="hidden sm:block">
                            <NavbarSearch />
                        </div>
                        {/* Cart */}
                        <Link
                            href="/cart"
                            className="relative rounded-xl border border-gray-200 p-3 transition hover:border-indigo-300 hover:bg-indigo-50"
                        >
                            <ShoppingCart size={22} />
                            {cartCount > 0 && (
                                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-medium text-white">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {/* Login / Account (hidden on small screens; available in mobile menu) */}
                        <div className="hidden lg:flex items-center gap-1">
                            {user ? (
                                <>
                                    <Link
                                        href="/account"
                                        className="rounded-xl bg-indigo-600 px-4 sm:px-5 sm:w-28 py-2 sm:py-3 text-sm font-medium text-white transition hover:bg-indigo-700 text-center"
                                    >
                                        Hi, {user}
                                    </Link>
                                    <button onClick={handleLogout} className="bg-red-500 px-2 py-3 text-sm font-medium rounded-xl text-white">
                                        <ArrowBigRight className="w-5 h-5" />
                                    </button>
                                </>
                            ) : (
                                <Link
                                    href="/login"
                                    className="rounded-xl border border-gray-300 px-4 sm:px-5 py-2 sm:py-3 text-sm font-medium text-gray-700 transition hover:border-indigo-600 hover:text-indigo-600"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                {/* Mobile menu panel */}
                {mobileOpen && (
                    <div className="lg:hidden absolute left-0 right-0 top-full z-40 border-t border-gray-200 bg-white shadow-sm">
                        <div className="max-w-7xl mx-auto px-4 py-4">
                            <div className="space-y-3">
                                <NavbarSearch className="relative w-full" />
                                <nav className="flex flex-col gap-2">
                                    <Link href="/" className="py-2 font-medium text-gray-700">Home</Link>
                                    <Link href="/shop" className="py-2 font-medium text-gray-700">Shop</Link>
                                    <Link href="/about" className="py-2 font-medium text-gray-700">About</Link>
                                    <Link href="/contact" className="py-2 font-medium text-gray-700">Contact</Link>
                                </nav>
                                <div className="pt-2 border-t border-gray-100">
                                    {user ? (
                                        <div className="flex items-center gap-2">
                                            <Link href="/account" className="flex-1 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white text-center">Account</Link>
                                            <button onClick={handleLogout} className="rounded-lg bg-red-500 px-3 py-2 text-white">Logout</button>
                                        </div>
                                    ) : (
                                        <Link href="/login" className="block rounded-lg border border-gray-300 px-4 py-2 text-center font-medium text-gray-700">Login</Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    )
}

export default Navbar