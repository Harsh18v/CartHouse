'use client'
import { Suspense } from "react"
import ProductCard from "@/components/ProductCard"
import { MoveLeftIcon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useSelector } from "react-redux"
import type { Product } from "@/assets/assets"
import type { RootState } from "@/lib/store"

function ShopContent() {

    // get query params ?search=abc
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    const router = useRouter()

    const products = useSelector((state: RootState) => state.product.list)

    const filteredProducts = search
        ? products.filter((product: Product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        )
        : products;

    return (
        <div className="min-h-[70vh] mx-6">
            <div className=" max-w-7xl mx-auto">
                <h1 onClick={() => router.push('/shop')} className="text-2xl text-slate-500 my-6 flex items-center gap-2 cursor-pointer hover:text-indigo-600 transition-colors w-fit"> {search && <MoveLeftIcon size={20} className="text-indigo-600" />}  All <span className="text-slate-800 font-bold">Products</span></h1>
                <div className="grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12 mx-auto mb-32">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product: Product) => <ProductCard key={product.id} product={product} />)
                    ) : (
                        <p className="text-slate-400 text-lg">No products found.</p>
                    )}
                </div>
            </div>
        </div>
    )
}


export default function Shop() {
    return (
        <Suspense fallback={<div className="min-h-[70vh] flex items-center justify-center text-slate-400">Loading shop...</div>}>
            <ShopContent />
        </Suspense>
    );
}
