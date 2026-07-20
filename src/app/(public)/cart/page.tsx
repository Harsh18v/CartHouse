'use client'
import { Product } from "@/assets/assets";
import Counter from "@/components/Counter";
import OrderSummary from "@/components/OrderSummary";
import PageTitle from "@/components/PageTitle";
import { deleteItemFromCart } from "@/lib/features/cart/cartSlice";
import { Link, Trash2Icon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/lib/store";



interface CartItem extends Product {
    quantity: number;
}

export default function Cart() {

    const { data: user } = useSelector((state: RootState) => state.user);

    const { cartItems } = useSelector((state: RootState) => state.cart);
    const products = useSelector((state: RootState) => state.product.list);

    const dispatch = useDispatch();

    const [cartArray, setCartArray] = useState<CartItem[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const createCartArray = () => {
        setTotalPrice(0);
        const cartArray: CartItem[] = [];
        for (const [key, value] of Object.entries(cartItems as Record<string, number>)) {
            const product = products.find((product: Product) => product.id === key);
            if (product) {
                cartArray.push({
                    ...product,
                    quantity: value,
                });
                setTotalPrice(prev => prev + Number(product.price) * Number(value));
            }
        }
        setCartArray(cartArray);
    }

    const handleDeleteItemFromCart = (productId: string) => {
        dispatch(deleteItemFromCart({ productId }))
    }

    useEffect(() => {
        if (products.length > 0) {
            createCartArray();
        }
    }, [cartItems, products]);

    return cartArray.length > 0 ? (
        <div className="min-h-screen mx-6 text-slate-800 bg-slate-50/50">

            <div className="max-w-7xl mx-auto py-6">
                {/* Title */}
                <PageTitle heading="My Cart" text="items in your cart" linkText="Add more" />

                {user && (
                    <p className="text-sm text-slate-500 mt-4 mb-6">
                        Cart for <span className="font-medium text-indigo-600">{user.name}</span>
                    </p>
                )}

                <div className="flex items-start justify-between gap-6 max-lg:flex-col mt-6">

                    {/* Cart items */}
                    <div className="w-full max-w-4xl">

                        {/* Header row - desktop only */}
                        <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_auto] items-center px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                            <p>Product</p>
                            <p className="text-center">Quantity</p>
                            <p className="text-center">Total</p>
                            <p className="text-center">Remove</p>
                        </div>

                        <div className="space-y-3">
                            {
                                cartArray.map((item, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_auto] items-center gap-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow px-4 py-4 md:px-6"
                                    >
                                        {/* Product */}
                                        <div className="flex gap-3 items-center col-span-2 md:col-span-1">
                                            <div className="flex items-center justify-center bg-indigo-50 size-16 sm:size-18 rounded-xl shrink-0">
                                                <Image src={item.images[0]} className="h-12 w-auto object-contain" alt="" width={45} height={45} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-sm sm:text-base font-medium text-slate-800 truncate">{item.name}</p>
                                                <p className="text-xs text-indigo-500 bg-indigo-50 inline-block px-2 py-0.5 rounded-full mt-1">{item.category}</p>
                                                <p className="text-sm text-slate-600 mt-1">{item.price}</p>
                                            </div>
                                        </div>

                                        {/* Quantity */}
                                        <div className="flex justify-start md:justify-center">
                                            <Counter productId={item.id} />
                                        </div>

                                        {/* Total price */}
                                        <div className="text-left md:text-center font-semibold text-slate-800">
                                            {item.price * item.quantity}
                                        </div>

                                        {/* Remove */}
                                        <div className="flex justify-end md:justify-center">
                                            <button
                                                onClick={() => handleDeleteItemFromCart(item.id)}
                                                className="text-red-500 hover:bg-red-50 p-2.5 rounded-full active:scale-95 transition-all"
                                                aria-label="Remove item"
                                            >
                                                <Trash2Icon size={18} />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <OrderSummary totalPrice={totalPrice} items={cartArray} />
                </div>
            </div>
        </div>
    ) : (
        <div className="min-h-[80vh] mx-6 flex flex-col items-center justify-center text-slate-400 gap-4">
            <h1 className="text-2xl sm:text-4xl font-semibold text-slate-500">Your cart is empty</h1>
            <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
                Continue Shopping
            </Link>
        </div>
    )
}
