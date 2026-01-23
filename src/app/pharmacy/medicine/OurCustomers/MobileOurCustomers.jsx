"use client";
import React from 'react';

const testimonials = [
    {
        name: "Ramesh P.",
        highlight: "Saved ₹2,200",
        feedback: "Earlier I was spending ₹3,000/month. After switching to Medkart's generics, it's down to ₹800."
    },
    {
        name: "Kavita S.",
        highlight: "Safe Substitute",
        feedback: "Medkart app ne sab simplify kar diya—substitute bhi mil gaya aur discount bhi."
    }
];

export default function MobileOurCustomers() {
    return (
        <div className="py-10 px-5 bg-white">
            {/* Testimonials */}
            <div className="text-center mb-8">
                <h2 className="text-[20px] font-bold text-gray-900 mb-2">Review from Customers</h2>
                <div className="h-1 w-12 bg-[#a7358d] rounded-full mx-auto"></div>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide -mx-5 px-5 no-scrollbar snap-x snap-mandatory">
                {testimonials.map((item, idx) => (
                    <div key={idx} className="min-w-[300px] snap-center bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#fbbf24]">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                            ))}
                        </div>
                        <div className="mb-4">
                            <span className="inline-block bg-[#fcebf5] text-[#a7358d] text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide mb-2">
                                {item.highlight}
                            </span>
                            <p className="text-gray-700 text-[14px] leading-relaxed italic">
                                "{item.feedback}"
                            </p>
                        </div>

                        <div className="flex items-center gap-3 border-t border-gray-100 pt-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-400 text-xs">
                                {item.name.charAt(0)}
                            </div>
                            <p className="text-gray-900 font-bold text-xs">{item.name}</p>
                        </div>

                    </div>
                ))}
            </div>

            {/* FAQs */}
            <div className="mt-8 bg-gray-50 rounded-2xl p-6">
                <h3 className="text-[18px] font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#a7358d]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    FAQs
                </h3>
                <div className="space-y-3">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <p className="font-bold text-sm text-gray-800 mb-1">Are medicines genuine?</p>
                        <p className="text-[13px] text-gray-500 leading-relaxed">Yes, every order is checked by a certified expert before delivery.</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <p className="font-bold text-sm text-gray-800 mb-1">Is COD available?</p>
                        <p className="text-[13px] text-gray-500 leading-relaxed">Yes, Cash on Delivery is available for most locations.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
