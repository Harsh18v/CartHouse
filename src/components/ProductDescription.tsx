'use client'
import { ArrowRight, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import type { Product } from "@/assets/assets"

interface ProductDescriptionProps {
    product: Product
}

const ProductDescription = ({ product }: ProductDescriptionProps) => {

    const [selectedTab, setSelectedTab] = useState<'Description' | 'Reviews'>('Description')

    return (
        <div className="my-18 text-sm text-slate-600">

            {/* Tabs */}
            <div className="flex border-b border-slate-200 mb-6 max-w-2xl">
                {(['Description', 'Reviews'] as const).map((tab, index) => (
                    <button className={`${tab === selectedTab ? 'border-b-2 border-indigo-600 text-indigo-600 font-semibold' : 'text-slate-400 hover:text-slate-600'} px-3 py-2 font-medium transition-colors`} key={index} onClick={() => setSelectedTab(tab)}>
                        {tab}
                    </button>
                ))}
            </div>

            {/* Description */}
            {selectedTab === "Description" && (
                <p className="max-w-xl text-slate-600">{product.description}</p>
            )}

            {/* Reviews */}
            {selectedTab === "Reviews" && (
                <div className="flex flex-col gap-3 mt-14">
                    {product.rating.length > 0 ? (
                        product.rating.map((item, index) => (
                            <div key={index} className="flex gap-5 mb-10">
                                <Image src={item.user.image ?? "/file.svg"} alt="" className="size-10 rounded-full ring-2 ring-indigo-100" width={100} height={100} />
                                <div>
                                    <div className="flex items-center" >
                                        {Array(5).fill('').map((_, i) => (
                                            <StarIcon key={i} size={18} className='text-transparent mt-0.5' fill={item.rating >= i + 1 ? "#4F46E5" : "#D1D5DB"} />
                                        ))}
                                    </div>
                                    <p className="text-sm max-w-lg my-4 text-slate-600">{item.review}</p>
                                    <p className="font-semibold text-slate-800">{item.user.name}</p>
                                    <p className="mt-3 font-light text-slate-400">{new Date(item.createdAt).toDateString()}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-slate-400">No reviews yet.</p>
                    )}
                </div>
            )}

            {/* Store Page */}
            <div className="flex gap-3 mt-14 items-center bg-indigo-50/50 rounded-2xl p-5 w-fit">
                <Image src={product.store.logo ?? "/file.svg"} alt="" className="size-11 rounded-full ring-2 ring-indigo-200" width={100} height={100} />
                <div>
                    <p className="font-medium text-slate-700">Product by {product.store.name}</p>
                    <Link href={`/shop/${product.store.username}`} className="flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"> view store <ArrowRight size={14} /></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription
