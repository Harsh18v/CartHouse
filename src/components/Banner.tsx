'use client'

import { useState } from 'react'
import { X, TicketPercent } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Banner() {
    const [isOpen, setIsOpen] = useState(true)

    const handleClaim = async () => {
        try {
            await navigator.clipboard.writeText('WELCOME20')
            toast.success('Coupon copied successfully!')
            setIsOpen(false)
        } catch {
            toast.error('Unable to copy coupon.')
        }
    }

    if (!isOpen) return null

    return (
        <div className="border-b border-indigo-100 bg-indigo-600 text-white">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

                <div className="flex items-center gap-3">

                    <div className="rounded-full bg-white/15 p-2">
                        <TicketPercent size={18} />
                    </div>

                    <p className="text-sm md:text-base">
                        Get <span className="font-semibold">20% OFF</span> on your
                        first order with code{" "}
                        <span className="rounded bg-white/15 px-2 py-1 font-semibold tracking-wide">
                            WELCOME20
                        </span>
                    </p>

                </div>

                <div className="flex items-center gap-3">

                    <button
                        onClick={handleClaim}
                        className="hidden rounded-xl bg-white px-5 py-2 text-sm font-medium text-indigo-600 transition-all duration-300 hover:bg-gray-100 md:block"
                    >
                        Copy Code
                    </button>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="rounded-lg p-2 transition hover:bg-white/10"
                    >
                        <X size={18} />
                    </button>

                </div>

            </div>

        </div>
    )
}