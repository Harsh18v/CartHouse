'use client'
import ProductCard from "@/components/ProductCard"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { MailIcon, MapPinIcon } from "lucide-react"
import Loading from "@/components/Loading"
import Image from "next/image"
import { dummyStoreData, productDummyData, type Product, type Store } from "@/assets/assets"

export default function StoreShop({ params }: { params: { username?: string } }) {

    const { username } =  useParams() 
    const [products, setProducts] = useState<Product[]>([])
    const [storeInfo, setStoreInfo] = useState<Store | null>(null)
    const [loading, setLoading] = useState(true)

    const fetchStoreData = async () => {
        setStoreInfo(dummyStoreData)
        setProducts(productDummyData)
        setLoading(false)
    }

    useEffect(() => {
        fetchStoreData()
    }, [])

    return !loading ? (
        <div className="min-h-[70vh] mx-6">

            {/* Store Info Banner */}
            {storeInfo && (
                <div className="max-w-7xl mx-auto bg-white border border-slate-100 rounded-2xl p-6 md:p-10 mt-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                    <Image
                        src={storeInfo.logo}
                        alt={storeInfo.name}
                        className="size-32 sm:size-38 object-cover border-2 border-indigo-100 rounded-xl"
                        width={200}
                        height={200}
                    />
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold text-slate-800">{storeInfo.name}</h1>
                        <p className="text-sm text-slate-500 mt-2 max-w-lg">{storeInfo.description}</p>
                        <div className="space-y-2 text-sm text-slate-500 mt-4">
                            <div className="flex items-center justify-center md:justify-start">
                                <MapPinIcon className="w-4 h-4 text-indigo-500 mr-2" />
                                <span>{storeInfo.address}</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start">
                                <MailIcon className="w-4 h-4 text-indigo-500 mr-2" />
                                <span>{storeInfo.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Products */}
            <div className=" max-w-7xl mx-auto mb-40">
                <h1 className="text-2xl mt-12 text-slate-500">Shop <span className="text-slate-800 font-bold">Products</span></h1>
                <div className="mt-5 grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12 mx-auto">
                    {products.length > 0 ? (
                        products.map((product) => <ProductCard key={product.id} product={product} />)
                    ) : (
                        <p className="text-slate-400 text-lg">No products available.</p>
                    )}
                </div>
            </div>
        </div>
    ) : <Loading />
}