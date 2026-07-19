'use client'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const ProductCard = ({ product }) => {

    // calculate the average rating of the product
    const rating = Math.round(product.rating.reduce((acc, curr) => acc + curr.rating, 0) / product.rating.length);

    return (
        <Link href={`/product/${product.id}`} className='group max-xl:mx-auto w-full sm:w-60 border p-2 rounded-2xl border-slate-200'>
            <div className='bg-indigo-50 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-100 group-hover:shadow-md group-hover:border-indigo-200 transition-all w-full h-40 sm:h-60'>
                <Image width={500} height={500} className='object-contain max-h-40 sm:max-h-48 w-auto group-hover:scale-110 transition duration-300' src={product.images[0]} alt="" />
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-slate-800 pt-3 w-full'>
                <div className='min-w-0'>
                    <p className='font-medium text-slate-800 group-hover:text-indigo-600 transition-colors truncate'>{product.name}</p>
                    <div className='flex mt-1'>
                        {Array(5).fill('').map((_, index) => (
                            <StarIcon key={index} size={14} className='text-transparent' fill={rating >= index + 1 ? "#4F46E5" : "#D1D5DB"} />
                        ))}
                    </div>
                </div>
                <p className='font-semibold text-slate-800 shrink-0'>₹{product.price}</p>
            </div>
        </Link>
    )
}

export default ProductCard