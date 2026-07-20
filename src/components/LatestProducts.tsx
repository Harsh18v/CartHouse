'use client'

import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import Title from './Title'
import ProductCard from './ProductCard'
import type { Product } from '@/assets/assets'

interface RootState {
    product: {
        list: Product[]
    }
}

const LatestProducts = () => {
    const displayQuantity = 4

    const products = useSelector(
        (state: RootState) => state.product.list
    )

    const latestProducts = useMemo(() => {
        return [...products]
            .sort(
                (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
            )
            .slice(0, displayQuantity)
    }, [products])

    return (
        <section className="max-w-7xl mx-auto px-6 py-20">

            <Title
                title="Latest Products"
                description={`Showing ${latestProducts.length} of ${products.length} products`}
                href="/shop"
            />

            {latestProducts.length === 0 ? (
                <div className="mt-16 rounded-3xl border border-gray-200 bg-gray-50 py-20 text-center">
                    <h3 className="text-xl font-semibold text-gray-800">
                        No products available
                    </h3>
                    <p className="mt-2 text-gray-500">
                        Check back later for our newest arrivals.
                    </p>
                </div>
            ) : (
                <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {latestProducts.map((product) => (
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

export default LatestProducts
