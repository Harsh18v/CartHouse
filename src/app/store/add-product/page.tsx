"use client"
import React, { useState } from "react"
import { assets } from "@/assets/assets"
import Image from "next/image"
import { toast } from "react-hot-toast"

interface ProductInfo {
    name: string
    description: string
    mrp: number
    price: number
    category: string
}

export default function StoreAddProduct() {

    const categories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Beauty & Health', 'Toys & Games', 'Sports & Outdoors', 'Books & Media', 'Food & Drink', 'Hobbies & Crafts', 'Others']

    const [images, setImages] = useState<{ [key: number]: File | null }>({ 1: null, 2: null, 3: null, 4: null })
    const [productInfo, setProductInfo] = useState<ProductInfo>({
        name: "",
        description: "",
        mrp: 0,
        price: 0,
        category: "",
    })
    const [loading, setLoading] = useState(false)


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        const parsedValue = type === 'number' ? Number(value) || 0 : value
        setProductInfo({ ...productInfo, [name]: parsedValue })
    }

    const onImageChangeHandler = (key: number, file: File | null) => {
        setImages({ ...images, [key]: file })
    }

    const onSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        // Logic to add a product

    }


    return (
        <form onSubmit={e => toast.promise(onSubmitHandler(e), { loading: "Adding Product..." })} className="text-slate-500 mb-28">
            <h1 className="text-2xl">Add New <span className="text-slate-800 font-medium">Products</span></h1>
            <p className="mt-7">Product Images</p>

            <div className="flex gap-4 my-4">
                {Object.keys(images).map((key) => {
                    const numKey = Number(key)
                    const file = images[numKey]
                    return (
                        <label key={key} className="cursor-pointer">
                            <div className="size-20 border border-dashed border-slate-300 rounded-lg flex items-center justify-center overflow-hidden bg-slate-50">
                                <Image
                                    src={file ? URL.createObjectURL(file) : assets.upload_area}
                                    alt=""
                                    width={80}
                                    height={80}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                onChange={(e) => onImageChangeHandler(numKey, e.target.files?.[0] || null)}
                            />
                        </label>
                    )
                })}
            </div>

            <label className="flex flex-col gap-2 my-6">
                Name
                <input type="text" name="name" onChange={onChangeHandler} value={productInfo.name} placeholder="Enter product name" className="w-full max-w-sm p-2 px-4 outline-none border border-slate-200 rounded" required />
            </label>

            <label className="flex flex-col gap-2 my-6">
                Description
                <textarea name="description" onChange={onChangeHandler} value={productInfo.description} placeholder="Enter product description" rows={5} className="w-full max-w-sm p-2 px-4 outline-none border border-slate-200 rounded resize-none" required />
            </label>

            <div className="flex gap-5">
                <label className="flex flex-col gap-2">
                    Actual Price (₹)
                    <input type="number" name="mrp" onChange={onChangeHandler} value={productInfo.mrp} placeholder="0" className="w-full max-w-45 p-2 px-4 outline-none border border-slate-200 rounded resize-none" required />
                </label>
                <label className="flex flex-col gap-2">
                    Offer Price (₹)
                    <input type="number" name="price" onChange={onChangeHandler} value={productInfo.price} placeholder="0" className="w-full max-w-45 p-2 px-4 outline-none border border-slate-200 rounded resize-none" required />
                </label>
            </div>

            <select onChange={e => setProductInfo({ ...productInfo, category: e.target.value })} value={productInfo.category} className="w-full max-w-sm p-2 px-4 my-6 outline-none border border-slate-200 rounded" required>
                <option value="">Select a category</option>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>

            <br />

            <button disabled={loading} className="bg-slate-800 text-white px-6 mt-7 py-2 hover:bg-slate-900 rounded transition">Add Product</button>
        </form>
    )
}