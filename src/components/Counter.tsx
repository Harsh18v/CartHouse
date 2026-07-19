'use client'
import { addToCart, removeFromCart } from "@/lib/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = ({ productId }: { productId: string }) => {

    const { cartItems } = useSelector((state: any) => state.cart);

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart({ productId }))
    }

    const removeFromCartHandler = () => {
        dispatch(removeFromCart({ productId }))
    }

    return (
        <div className="inline-flex items-center gap-1 sm:gap-2 rounded-full border border-slate-200 bg-white max-sm:text-sm text-slate-700 shadow-sm overflow-hidden">
            <button
                onClick={removeFromCartHandler}
                className="px-3 py-1.5 select-none font-medium text-indigo-600 hover:bg-indigo-50 active:scale-95 transition-all"
                aria-label="Decrease quantity"
            >
                -
            </button>
            <p className="px-2 py-1.5 min-w-6 text-center font-semibold text-slate-800">{cartItems[productId]}</p>
            <button
                onClick={addToCartHandler}
                className="px-3 py-1.5 select-none font-medium text-indigo-600 hover:bg-indigo-50 active:scale-95 transition-all"
                aria-label="Increase quantity"
            >
                +
            </button>
        </div>
    )
}

export default Counter