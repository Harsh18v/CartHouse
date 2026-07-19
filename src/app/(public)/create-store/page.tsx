'use client'
import { assets } from "@/assets/assets"
import { useEffect, useState } from "react"
import Image from "next/image"
import toast from "react-hot-toast"
import Loading from "@/components/Loading"

export default function CreateStore() {

    const [alreadySubmitted, setAlreadySubmitted] = useState(false)
    const [status, setStatus] = useState("")
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState("")

    const [storeInfo, setStoreInfo] = useState<{ name: string; username: string; description: string; email: string; contact: string; address: string; image: any }>({
        name: "",
        username: "",
        description: "",
        email: "",
        contact: "",
        address: "",
        image: ""
    })

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setStoreInfo({ ...storeInfo, [e.target.name]: e.target.value })
    }

    const fetchSellerStatus = async () => {
        // Logic to check if the store is already submitted


        setLoading(false)
    }

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Logic to submit the store details


    }

    useEffect(() => {
        fetchSellerStatus()
    }, [])

    return !loading ? (
        <>
            {!alreadySubmitted ? (
                <div className="mx-6 min-h-[70vh] my-16">
                    <form onSubmit={e => toast.promise(onSubmitHandler(e), { loading: "Submitting data..." })} className="max-w-7xl mx-auto flex flex-col items-start gap-3 text-slate-500">
                        {/* Title */}
                        <div>
                            <h1 className="text-3xl">Add Your <span className="text-slate-800 font-bold">Store</span></h1>
                            <p className="max-w-lg text-slate-500 mt-1">To become a seller on GoCart, submit your store details for review. Your store will be activated after admin verification.</p>
                        </div>

                        <label className="mt-10 cursor-pointer group">
                            <p>Store Logo</p>
                            <div className="mt-2 size-24 rounded-xl bg-indigo-50 border border-dashed border-indigo-200 flex items-center justify-center overflow-hidden group-hover:border-indigo-400 transition-colors">
                                <Image src={storeInfo.image ? URL.createObjectURL(storeInfo.image) : assets.upload_area} className="h-full w-full object-cover" alt="" width={150} height={100} />
                            </div>
                            <input type="file" accept="image/*" onChange={(e) => setStoreInfo({ ...storeInfo, image: e.target.files?.[0] ?? "" })} hidden />
                        </label>

                        <p>Username</p>
                        <input name="username" onChange={onChangeHandler} value={storeInfo.username} type="text" placeholder="Enter your store username" className="border border-slate-200 outline-none focus:border-indigo-400 w-full max-w-lg p-2.5 rounded-lg transition-colors" />

                        <p>Name</p>
                        <input name="name" onChange={onChangeHandler} value={storeInfo.name} type="text" placeholder="Enter your store name" className="border border-slate-200 outline-none focus:border-indigo-400 w-full max-w-lg p-2.5 rounded-lg transition-colors" />

                        <p>Description</p>
                        <textarea name="description" onChange={onChangeHandler} value={storeInfo.description} rows={5} placeholder="Enter your store description" className="border border-slate-200 outline-none focus:border-indigo-400 w-full max-w-lg p-2.5 rounded-lg resize-none transition-colors" />

                        <p>Email</p>
                        <input name="email" onChange={onChangeHandler} value={storeInfo.email} type="email" placeholder="Enter your store email" className="border border-slate-200 outline-none focus:border-indigo-400 w-full max-w-lg p-2.5 rounded-lg transition-colors" />

                        <p>Contact Number</p>
                        <input name="contact" onChange={onChangeHandler} value={storeInfo.contact} type="text" placeholder="Enter your store contact number" className="border border-slate-200 outline-none focus:border-indigo-400 w-full max-w-lg p-2.5 rounded-lg transition-colors" />

                        <p>Address</p>
                        <textarea name="address" onChange={onChangeHandler} value={storeInfo.address} rows={5} placeholder="Enter your store address" className="border border-slate-200 outline-none focus:border-indigo-400 w-full max-w-lg p-2.5 rounded-lg resize-none transition-colors" />

                        <button className="bg-indigo-600 text-white px-12 py-2.5 rounded-full mt-10 mb-40 active:scale-95 hover:bg-indigo-700 transition font-medium">Submit</button>
                    </form>
                </div>
            ) : (
                <div className="min-h-[80vh] flex flex-col items-center justify-center">
                    <p className="sm:text-2xl lg:text-3xl mx-5 font-semibold text-slate-600 text-center max-w-2xl">{message}</p>
                    {status === "approved" && <p className="mt-5 text-slate-400">redirecting to dashboard in <span className="font-semibold text-indigo-600">5 seconds</span></p>}
                </div>
            )}
        </>
    ) : (<Loading />)
}