'use client'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const ProductCard = ({ product }) => {

    // calculate the average rating of the product
    const rating = Math.round(product.rating.reduce((acc, curr) => acc + curr.rating, 0) / product.rating.length);

    return (
        <Link href={`/product/${product.id}`} className='group max-xl:mx-auto'>
            <div className='bg-indigo-50 h-40 sm:w-60 sm:h-68 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-100 group-hover:shadow-md group-hover:border-indigo-200 transition-all'>
                <Image width={500} height={500} className='max-h-30 sm:max-h-40 w-auto group-hover:scale-110 transition duration-300' src={product.images[0]} alt="" />
            </div>
            <div className='flex justify-between gap-3 text-sm text-slate-800 pt-3 max-w-60'>
                <div>
                    <p className='font-medium text-slate-800 group-hover:text-indigo-600 transition-colors'>{product.name}</p>
                    <div className='flex mt-1'>
                        {Array(5).fill('').map((_, index) => (
                            <StarIcon key={index} size={14} className='text-transparent' fill={rating >= index + 1 ? "#4F46E5" : "#D1D5DB"} />
                        ))}
                    </div>
                </div>
                <p className='font-semibold text-slate-800'>₹{product.price}</p>
            </div>
        </Link>
    )
}

export default ProductCard