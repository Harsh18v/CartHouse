'use client'
import Image from "next/image";
import { DotIcon } from "lucide-react";
import { useSelector } from "react-redux";
import Rating from "./Rating";
import { useState } from "react";
import RatingModal from "./RatingModal";
import type { Order, OrderItem as OrderItemType, Rating as RatingType } from "@/assets/assets";

interface OrderItemProps {
    order: Order;
}

const OrderItem = ({ order }: OrderItemProps) => {

    const [ratingModal, setRatingModal] = useState<{ orderId: string; productId: string } | null>(null);

    const { ratings } = useSelector((state: { rating: { ratings: RatingType[] } }) => state.rating);

    const statusStyles = order.status === 'ORDER_PLACED' || order.status === 'PROCESSING'
        ? 'text-yellow-600 bg-yellow-50'
        : order.status === 'DELIVERED'
            ? 'text-green-600 bg-green-50'
            : 'text-indigo-600 bg-indigo-50';

    return (
        <>
            <tr className="text-sm">
                <td className="text-left align-top">
                    <div className="flex flex-col gap-6">
                        {order.orderItems.map((item: OrderItemType, index: number) => {
                            const existingRating = ratings.find(
                                rating => order.id === rating.orderId && item.product.id === rating.productId
                            );

                            return (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="w-20 aspect-square bg-indigo-50 flex items-center justify-center rounded-xl shrink-0">
                                        <Image
                                            className="h-14 w-auto object-contain"
                                            src={item.product.images[0]}
                                            alt="product_img"
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center text-sm">
                                        <p className="font-semibold text-slate-800 text-base">{item.product.name}</p>
                                        <p className="text-slate-500">{item.price} Qty : {item.quantity} </p>
                                        <p className="mb-1 text-slate-400 text-xs">{new Date(order.createdAt).toDateString()}</p>
                                        <div>
                                            {existingRating
                                                ? <Rating value={existingRating.rating} />
                                                : <button onClick={() => setRatingModal({ orderId: order.id, productId: item.product.id })} className={`text-indigo-600 font-medium hover:bg-indigo-50 px-2 py-1 -ml-2 rounded-lg transition ${order.status !== "DELIVERED" && 'hidden'}`}>Rate Product</button>
                                            }</div>
                                        {ratingModal && <RatingModal ratingModal={ratingModal} setRatingModal={setRatingModal} />}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </td>

                <td className="text-center max-md:hidden font-semibold text-slate-700 align-top">{order.total}</td>

                <td className="text-left max-md:hidden text-slate-500 align-top">
                    <p>{order.address.name}, {order.address.street},</p>
                    <p>{order.address.city}, {order.address.state}, {order.address.zip}, {order.address.country},</p>
                    <p>{order.address.phone}</p>
                </td>

                <td className="text-left space-y-2 text-sm max-md:hidden align-top">
                    <div
                        className={`flex items-center justify-center gap-1 rounded-full px-3 py-1.5 w-fit font-medium ${statusStyles}`}
                    >
                        <DotIcon size={10} className="scale-250" />
                        {order.status.split('_').join(' ').toLowerCase()}
                    </div>
                </td>
            </tr>
            {/* Mobile */}
            <tr className="md:hidden">
                <td colSpan={5} className="text-slate-500 text-sm">
                    <p>{order.address.name}, {order.address.street}</p>
                    <p>{order.address.city}, {order.address.state}, {order.address.zip}, {order.address.country}</p>
                    <p>{order.address.phone}</p>
                    <br />
                    <div className="flex items-center">
                        <span className={`text-center mx-auto px-6 py-1.5 rounded-full font-medium ${statusStyles}`}>
                            {order.status.replace(/_/g, ' ').toLowerCase()}
                        </span>
                    </div>
                </td>
            </tr>
            <tr>
                <td colSpan={4}>
                    <div className="border-b border-slate-100 w-6/7 mx-auto" />
                </td>
            </tr>
        </>
    )
}

export default OrderItem