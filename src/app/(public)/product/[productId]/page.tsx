'use client'
import ProductDescription from "@/components/ProductDescription";
import ProductDetails from "@/components/ProductDetails";
import type { Product } from "@/assets/assets";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Product() {

    const { productId } = useParams();
    const [product, setProduct] = useState<any>(null);
    const products = useSelector((state: any) => state.product.list);

    const fetchProduct = async () => {
        const product = products.find((product: Product) => product.id === productId);
        setProduct(product);
    }

    useEffect(() => {
        if (products.length > 0) {
            fetchProduct()
        }
        scrollTo(0, 0)
    }, [productId, products]);

    return (
        <div className="mx-6">
            <div className="max-w-7xl mx-auto">

                {/* Breadcrums */}
                <div className="text-slate-500 text-sm mt-8 mb-5">
                    Home <span className="text-slate-300 mx-1">/</span> Products <span className="text-slate-300 mx-1">/</span> <span className="text-indigo-600 font-medium">{product?.category || ""}</span>
                </div>

                {/* Product Details */}
                {product && (<ProductDetails product={product} />)}

                {/* Description & Reviews */}
                {product && (<ProductDescription product={product} />)}
            </div>
        </div>
    );
}