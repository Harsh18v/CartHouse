'use client'

import { assets } from '@/assets/assets'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import CategoriesMarquee from './CategoriesMarquee'
import { useRouter } from 'next/navigation'

const Hero = () => {

    const router = useRouter()

    return (
        <section className="px-6">
            <div className="max-w-7xl mx-auto mt-10">
                <div className="grid xl:grid-cols-[2fr_1fr] gap-6">
                    {/* Main Hero */}
                    <div className="relative overflow-hidden rounded-4xl border border-gray-200 bg-white shadow-sm">
                        <div className="grid lg:grid-cols-2 items-center">
                            <div className="p-8 sm:p-12 lg:p-16">
                                <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
                                    New Collection 2026
                                </span>
                                <h1 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                                    Discover Products
                                    <br />
                                    Designed for
                                    <span className="text-indigo-600"> Everyday Life.</span>
                                </h1>
                                <p className="mt-6 max-w-lg text-gray-600 text-lg leading-8">
                                    Shop premium electronics, fashion, home essentials and more from trusted sellers with secure checkout and fast delivery.
                                </p>
                                <div className="flex items-center gap-5 mt-10">
                                    <button onClick={() => { router.push("/shop") }} className="flex items-center gap-2 rounded-xl bg-indigo-600 p-4 text-white font-medium transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg">
                                        Shop Now
                                        <ArrowRightIcon size={18} />
                                    </button>
                                    <p className="text-gray-500">
                                        Starting from{" "}
                                        <span className="font-semibold text-gray-900">
                                            ₹499
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex justify-center items-end bg-gray-50">
                                <Image
                                    src={assets.hero_model_img}
                                    alt="Featured Product"
                                    priority
                                    className="w-full max-w-md object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Cards */}
                    <div className="flex flex-col gap-6">
                        <div className="group flex items-center justify-between rounded-[28px] border border-gray-200 bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                            <div>
                                <p className="text-sm font-medium uppercase tracking-wide text-indigo-600">
                                    Featured
                                </p>
                                <h3 className="mt-3 text-2xl font-semibold text-gray-900">
                                    Top Rated
                                    <br />
                                    Products
                                </h3>
                                <button className="mt-6 flex items-center gap-2 font-medium text-gray-700 transition-all group-hover:text-indigo-600">
                                    Explore
                                    <ArrowRightIcon
                                        size={18}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </button>
                            </div>
                            <Image
                                src={assets.hero_product_img1}
                                alt="Top Products"
                                className="w-36 object-contain"
                            />
                        </div>
                        <div className="group flex items-center justify-between rounded-[28px] border border-gray-200 bg-indigo-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                            <div>
                                <p className="text-sm font-medium uppercase tracking-wide text-indigo-600">
                                    Limited Offer
                                </p>
                                <h3 className="mt-3 text-2xl font-semibold text-gray-900">
                                    Save up to
                                    <br />
                                    20% Today
                                </h3>
                                <button className="mt-6 flex items-center gap-2 font-medium text-gray-700 transition-all group-hover:text-indigo-600">
                                    Shop Deals
                                    <ArrowRightIcon
                                        size={18}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </button>
                            </div>
                            <Image
                                src={assets.hero_product_img2}
                                alt="Discount Products"
                                className="w-36 object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <CategoriesMarquee />
                </div>
            </div>
        </section>
    )
}

export default Hero