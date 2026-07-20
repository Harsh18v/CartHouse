import { PlusIcon, SquarePenIcon, XIcon } from 'lucide-react';
import React, { useState } from 'react'
import AddressModal from './AddressModal';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface Address {
    name: string
    city: string
    state: string
    zip: string
    street?: string
    country?: string
    phone?: string
}

interface Coupon {
    code: string
    description: string
    discount: number
}

interface OrderSummaryProps {
    totalPrice: number
    items: any[]
}

const OrderSummary = ({ totalPrice, items }: OrderSummaryProps) => {

    const router = useRouter();

    const addressList = useSelector((state: { address: { list: Address[] } }) => state.address.list);

    const [paymentMethod, setPaymentMethod] = useState<'COD' | 'STRIPE'>('COD');
    const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [couponCodeInput, setCouponCodeInput] = useState('');
    const [coupon, setCoupon] = useState<Coupon | null>(null);

    const handleCouponCode = async (event: React.FormEvent) => {
        event.preventDefault();

    }

    const handlePlaceOrder = async (e: React.FormEvent) => {
        e.preventDefault();

        router.push('/orders')
    }

    return (
        <div className='w-full max-w-lg lg:max-w-85 bg-white border border-slate-100 shadow-sm text-slate-500 text-sm rounded-2xl p-7'>
            <h2 className='text-xl font-semibold text-slate-800'>Payment Summary</h2>
            <p className='text-slate-400 text-xs mt-4 mb-2 uppercase tracking-wide font-medium'>Payment Method</p>
            <div className='flex gap-2 items-center'>
                <input type="radio" id="COD" onChange={() => setPaymentMethod('COD')} checked={paymentMethod === 'COD'} className='accent-indigo-600' />
                <label htmlFor="COD" className='cursor-pointer text-slate-600'>COD</label>
            </div>
            <div className='flex gap-2 items-center mt-1'>
                <input type="radio" id="STRIPE" name='payment' onChange={() => setPaymentMethod('STRIPE')} checked={paymentMethod === 'STRIPE'} className='accent-indigo-600' />
                <label htmlFor="STRIPE" className='cursor-pointer text-slate-600'>Stripe Payment</label>
            </div>
            <div className='my-4 py-4 border-y border-slate-100 text-slate-400'>
                <p className='uppercase tracking-wide text-xs font-medium'>Address</p>
                {
                    selectedAddress ? (
                        <div className='flex gap-2 items-center mt-2 text-slate-600'>
                            <p>{selectedAddress.name}, {selectedAddress.city}, {selectedAddress.state}, {selectedAddress.zip}</p>
                            <SquarePenIcon onClick={() => setSelectedAddress(null)} className='cursor-pointer text-indigo-600 hover:text-indigo-700 shrink-0' size={18} />
                        </div>
                    ) : (
                        <div>
                            {
                                addressList.length > 0 && (
                                    <select className='border border-slate-200 p-2 w-full my-3 outline-none rounded-lg focus:border-indigo-400 text-slate-600' onChange={(e) => setSelectedAddress(addressList[Number(e.target.value)])} >
                                        <option value="">Select Address</option>
                                        {
                                            addressList.map((address, index) => (
                                                <option key={index} value={index}>{address.name}, {address.city}, {address.state}, {address.zip}</option>
                                            ))
                                        }
                                    </select>
                                )
                            }
                            <button className='flex items-center gap-1 text-indigo-600 font-medium hover:text-indigo-700 mt-1' onClick={() => setShowAddressModal(true)} >Add Address <PlusIcon size={18} /></button>
                        </div>
                    )
                }
            </div>
            <div className='pb-4 border-b border-slate-100'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-1 text-slate-400'>
                        <p>Subtotal:</p>
                        <p>Shipping:</p>
                        {coupon && <p>Coupon:</p>}
                    </div>
                    <div className='flex flex-col gap-1 font-medium text-right text-slate-700'>
                        <p>{totalPrice}</p>
                        <p className='text-green-600'>Free</p>
                        {coupon && <p className='text-green-600'>{`-${(coupon.discount / 100 * totalPrice)}`}</p>}
                    </div>
                </div>
                {
                    !coupon ? (
                        <form onSubmit={e => toast.promise(handleCouponCode(e), { loading: 'Checking Coupon...' })} className='flex justify-center gap-3 mt-3'>
                            <input onChange={(e) => setCouponCodeInput(e.target.value)} value={couponCodeInput} type="text" placeholder='Coupon Code' className='border border-slate-200 p-1.5 rounded-lg w-full outline-none focus:border-indigo-400' />
                            <button className='bg-indigo-600 text-white px-4 rounded-lg hover:bg-indigo-700 active:scale-95 transition-all font-medium'>Apply</button>
                        </form>
                    ) : (
                        <div className='w-full flex items-center justify-center gap-2 text-xs mt-2 bg-indigo-50 rounded-lg py-2'>
                            <p>Code: <span className='font-semibold ml-1 text-indigo-600'>{coupon.code.toUpperCase()}</span></p>
                            <p>{coupon.description}</p>
                            <XIcon size={18} onClick={() => setCoupon(null)} className='hover:text-red-600 transition cursor-pointer' />
                        </div>
                    )
                }
            </div>
            <div className='flex justify-between py-4'>
                <p className='font-medium text-slate-700'>Total:</p>
                <p className='font-semibold text-right text-slate-800 text-base'>{coupon ? totalPrice - (coupon.discount / 100 * totalPrice) : totalPrice}</p>
            </div>
            <button onClick={e => toast.promise(handlePlaceOrder(e), { loading: 'placing Order...' })} className='w-full bg-indigo-600 text-white py-2.5 rounded-full font-medium hover:bg-indigo-700 active:scale-95 transition-all'>Place Order</button>

            {showAddressModal && <AddressModal setShowAddressModal={setShowAddressModal} />}

        </div>
    )
}

export default OrderSummary