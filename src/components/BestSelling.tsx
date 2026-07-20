'use client'

import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import Title from './Title'
import type { Product } from '@/assets/assets'

interface RootState {
    product: {
        list: Product[]
    }
}

const BestSelling = () => {
    const displayQuantity = 8

    const products = useSelector(
        (state: RootState) => state.product.list
    )

    const bestSellingProducts = useMemo(() => {
        return [...products]
            .sort((a, b) => b.rating.length - a.rating.length)
            .slice(0, displayQuantity)
    }, [products])

    return (
        <section className="max-w-7xl mx-auto px-6 py-20">

            <Title
                title="Best Selling Products"
                description={`Showing ${bestSellingProducts.length} of ${products.length} products`}
                href="/shop"
            />

            {bestSellingProducts.length === 0 ? (
                <div className="mt-14 rounded-3xl border border-gray-200 bg-gray-50 py-20 text-center">
                    <h3 className="text-xl font-semibold text-gray-900">
                        No best-selling products yet
                    </h3>

                    <p className="mt-2 text-gray-500">
                        Once products receive customer ratings, they'll appear here.
                    </p>
                </div>
            ) : (
                <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {bestSellingProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            )}

        </section>
    )
}

export default BestSelling
