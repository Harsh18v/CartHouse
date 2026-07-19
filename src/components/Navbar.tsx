'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Search, ShoppingBag, ShoppingCart } from 'lucide-react'
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

                        {/* Search */}
                        <NavbarSearch />
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
                        {/* Login */}
                        {user ? (
                            <div className='flex items-center gap-1'>
                                <Link
                                    href="/account"
                                    className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
                                >
                                    Hi, {user}
                                </Link>
                                <button onClick={handleLogout} className=" bg-red-500  px-2 py-3 text-sm font-medium rounded-xl text-white ">
                                    <ArrowBigRight className="w-5 h-5" />
                                </button>
                            </div>

                        ) : (
                            <Link
                                href="/login"
                                className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-indigo-600 hover:text-indigo-600"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar