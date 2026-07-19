'use client'
import { XIcon } from "lucide-react"
import { useState } from "react"
import { toast } from "react-hot-toast"

const AddressModal = ({ setShowAddressModal }) => {

    const [address, setAddress] = useState({
        name: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        phone: ''
    })

    const handleAddressChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setShowAddressModal(false)
    }

    return (
        <form onSubmit={e => toast.promise(handleSubmit(e), { loading: 'Adding Address...' })} className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm h-screen flex items-center justify-center p-6">
            <div className="flex flex-col gap-4 text-slate-700 w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 relative">
                <XIcon size={22} className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" onClick={() => setShowAddressModal(false)} />
                <h2 className="text-2xl text-slate-800">Add New <span className="font-bold text-indigo-600">Address</span></h2>
                <input name="name" onChange={handleAddressChange} value={address.name} className="p-2.5 px-4 outline-none border border-slate-200 focus:border-indigo-400 rounded-lg w-full transition-colors" type="text" placeholder="Enter your name" required />
                <input name="email" onChange={handleAddressChange} value={address.email} className="p-2.5 px-4 outline-none border border-slate-200 focus:border-indigo-400 rounded-lg w-full transition-colors" type="email" placeholder="Email address" required />
                <input name="street" onChange={handleAddressChange} value={address.street} className="p-2.5 px-4 outline-none border border-slate-200 focus:border-indigo-400 rounded-lg w-full transition-colors" type="text" placeholder="Street" required />
                <div className="flex gap-4">
                    <input name="city" onChange={handleAddressChange} value={address.city} className="p-2.5 px-4 outline-none border border-slate-200 focus:border-indigo-400 rounded-lg w-full transition-colors" type="text" placeholder="City" required />
                    <input name="state" onChange={handleAddressChange} value={address.state} className="p-2.5 px-4 outline-none border border-slate-200 focus:border-indigo-400 rounded-lg w-full transition-colors" type="text" placeholder="State" required />
                </div>
                <div className="flex gap-4">
                    <input name="zip" onChange={handleAddressChange} value={address.zip} className="p-2.5 px-4 outline-none border border-slate-200 focus:border-indigo-400 rounded-lg w-full transition-colors" type="number" placeholder="Zip code" required />
                    <input name="country" onChange={handleAddressChange} value={address.country} className="p-2.5 px-4 outline-none border border-slate-200 focus:border-indigo-400 rounded-lg w-full transition-colors" type="text" placeholder="Country" required />
                </div>
                <input name="phone" onChange={handleAddressChange} value={address.phone} className="p-2.5 px-4 outline-none border border-slate-200 focus:border-indigo-400 rounded-lg w-full transition-colors" type="text" placeholder="Phone" required />
                <button className="bg-indigo-600 text-white text-sm font-medium py-2.5 rounded-full hover:bg-indigo-700 active:scale-95 transition-all mt-2">Save Address</button>
            </div>
        </form>
    )
}

export default AddressModal