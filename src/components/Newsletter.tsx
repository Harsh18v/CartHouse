'use client'

import Title from './Title'

const Newsletter = () => {
    return (
        <section className="px-6 py-24">

            <div className="max-w-4xl mx-auto rounded-4xl border border-gray-200 bg-gray-50 p-8 md:p-14">

                <div className="max-w-2xl mx-auto text-center">

                    <Title
                        visibleButton={false}
                        title="Stay in the Loop"
                        description="Subscribe to receive exclusive offers, new arrivals, product launches, and special discounts delivered directly to your inbox."
                    />

                    <form className="mt-10 flex flex-col gap-4 sm:flex-row">

                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="h-14 flex-1 rounded-2xl border border-gray-300 bg-white px-5 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                        />

                        <button
                            type="submit"
                            className="h-14 rounded-2xl bg-indigo-600 px-8 font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg active:scale-[0.98]"
                        >
                            Subscribe
                        </button>

                    </form>

                    <p className="mt-5 text-sm text-gray-500">
                        No spam. Unsubscribe anytime.
                    </p>

                </div>

            </div>

        </section>
    )
}

export default Newsletter