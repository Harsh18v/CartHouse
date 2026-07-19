'use client'
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

const StoreNavbar = () => {


    return (
        <div className="flex items-center justify-between px-12 py-6 border-b border-slate-200 transition-all">
            <Link href="/" className="flex justify-center items-center gap-2 relative text-4xl font-semibold text-slate-700">
                <span><span className="text-green-600">Cart</span>House</span>
                <ShoppingBag className="text-green-700 h-8 w-8" />
            </Link>
            <div className="flex items-center gap-3">
                <p>Hi, Seller</p>
            </div>
        </div>
    )
}

export default StoreNavbar