import Title from "./Title";
import { ourSpecsData } from "@/assets/assets";

const OurSpecs = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">

            <Title
                visibleButton={false}
                title="Why Shop With Us"
                description="We're committed to providing a secure, seamless, and enjoyable shopping experience from browsing to delivery."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {ourSpecsData.map((spec) => {
                    const Icon = spec.icon;

                    return (
                        <div
                            key={spec.title}
                            className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                                <Icon size={24} />
                            </div>

                            <h3 className="mt-6 text-xl font-semibold text-gray-900">
                                {spec.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-gray-600">
                                {spec.description}
                            </p>
                        </div>
                    );
                })}

            </div>

        </section>
    );
};

export default OurSpecs;