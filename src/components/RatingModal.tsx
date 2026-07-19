'use client'

import { Star } from 'lucide-react';
import React, { useState } from 'react'
import { XIcon } from 'lucide-react';
import toast from 'react-hot-toast';

const RatingModal = ({ ratingModal, setRatingModal }) => {

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleSubmit = async () => {
        if (rating < 0 || rating > 5) {
            return toast('Please select a rating');
        }
        if (review.length < 5) {
            return toast('write a short review');
        }

        setRatingModal(null);
    }

    return (
        <div className='fixed inset-0 z-120 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-6'>
            <div className='bg-white p-8 rounded-2xl shadow-xl w-96 relative'>
                <button onClick={() => setRatingModal(null)} className='absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors'>
                    <XIcon size={20} />
                </button>
                <h2 className='text-2xl text-slate-800 mb-4'>Rate <span className='font-bold text-indigo-600'>Product</span></h2>
                <div className='flex items-center justify-center gap-1 mb-4'>
                    {Array.from({ length: 5 }, (_, i) => (
                        <Star
                            key={i}
                            className={`size-8 cursor-pointer transition-colors ${rating > i ? "text-indigo-600 fill-current" : "text-slate-300"}`}
                            onClick={() => setRating(i + 1)}
                        />
                    ))}
                </div>
                <textarea
                    className='w-full p-3 border border-slate-200 rounded-lg mb-4 outline-none focus:border-indigo-400 transition-colors'
                    placeholder='Write your review (optional)'
                    rows={4}
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                ></textarea>
                <button onClick={e => toast.promise(handleSubmit(), { loading: 'Submitting...' })} className='w-full bg-indigo-600 text-white py-2.5 rounded-full font-medium hover:bg-indigo-700 active:scale-95 transition-all'>
                    Submit Rating
                </button>
            </div>
        </div>
    )
}

export default RatingModal