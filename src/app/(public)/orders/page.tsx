'use client'
import PageTitle from "@/components/PageTitle"
import { useEffect, useState } from "react";
import OrderItem from "@/components/OrderItem";
import { orderDummyData, type Order } from "@/assets/assets";

export default function Orders() {

    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        setOrders(orderDummyData)
    }, []);

    return (
        <div className="min-h-[70vh] mx-6">
            {orders.length > 0 ? (
                (
                    <div className="my-20 max-w-7xl mx-auto">
                        <PageTitle heading="My Orders" text={`Showing total ${orders.length} orders`} linkText={'Go to home'} />

                        <table className="w-full max-w-5xl text-slate-500 table-auto border-separate border-spacing-y-4 border-spacing-x-0">
                            <thead>
                                <tr className="max-sm:text-sm text-slate-500 max-md:hidden">
                                    <th className="text-left font-semibold uppercase text-xs tracking-wide pl-2">Product</th>
                                    <th className="text-center font-semibold uppercase text-xs tracking-wide">Total Price</th>
                                    <th className="text-left font-semibold uppercase text-xs tracking-wide">Address</th>
                                    <th className="text-left font-semibold uppercase text-xs tracking-wide">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <OrderItem order={order} key={order.id} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            ) : (
                <div className="min-h-[80vh] mx-6 flex flex-col items-center justify-center text-slate-400 gap-4">
                    <h1 className="text-2xl sm:text-4xl font-semibold text-slate-500">You have no orders</h1>
                </div>
            )}
        </div>
    )
}