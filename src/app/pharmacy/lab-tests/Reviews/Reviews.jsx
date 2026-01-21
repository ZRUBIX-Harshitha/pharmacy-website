"use client";
import React, { useRef } from 'react';
import Image from 'next/image';

const reviews = [
    {
        text: "Both the above tests take a minimum of one day, your report is ready within an hour.",
        name: "Manali",
        date: "19 Jun '25"
    },
    {
        text: "User Friendly App - Easy to compare and book the test",
        name: "Prashant Shinde",
        date: "09 Jul '24"
    },
    {
        text: "if I had to go to the lab, I would've skipped my breakfast and rushed. Home testing happened calmly at home.",
        name: "Arjun Verma",
        date: "03 Dec '25"
    },
    {
        text: "Best service pharmacy",
        name: "Sana",
        date: "06 Jan '25"
    },
    {
        text: "Excellent service and timely reports. Highly recommended!",
        name: "Rahul",
        date: "12 Aug '24"
    }
];

export default function Reviews() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="w-full bg-white py-12 font-sans">
            <div className="max-w-[1550px] mx-auto px-5">
                <div className="bg-[#fcebf5] rounded-2xl p-8 relative overflow-hidden">

                    {/* Header Top: Ratings */}
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <Image
                            src="https://assets.pharmeasy.in/web-assets/images/diagnostics/icon_google_cicular.webp?dim=48x48&q=75"
                            alt="Google"
                            width={24}
                            height={24}
                            className="object-contain"
                            unoptimized
                        />
                        <span className="text-[#30363c] font-bold text-base">4.6 Stars</span>
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#f4a222]">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                </svg>
                            ))}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#f4a222]">
                                <defs>
                                    <linearGradient id="half-star">
                                        <stop offset="50%" stopColor="currentColor" />
                                        <stop offset="50%" stopColor="#d3d3d3" stopOpacity="1" />
                                    </linearGradient>
                                </defs>
                                <path fill="url(#half-star)" fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-[#30363c] text-sm ml-2 border-l border-gray-400 pl-3">7+ Lakhs Ratings & Reviews</span>
                    </div>

                    {/* Main Heading */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
                                <Image
                                    src="https://assets.pharmeasy.in/web-assets/images/diagnostics/icon_reviewDoctor1_circular.png?dim=96x96&q=75"
                                    alt="User 1"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
                                <Image
                                    src="https://assets.pharmeasy.in/web-assets/images/diagnostics/icon_reviewDoctor2_circular.png?dim=96x96&q=75"
                                    alt="User 2"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                        </div>
                        <h2 className="text-[#0f847e] text-2xl font-bold">
                            Over 10 million happy users <span className="text-[#30363c]">PharmEasy Labs</span>
                        </h2>
                    </div>

                    {/* Quote Icon Background */}
                    <div className="absolute top-32 left-8 text-[#d1f0ea] opacity-50 pointer-events-none">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                        </svg>
                    </div>

                    {/* Reviews Carousel */}
                    <div className="relative pl-12">
                        <div
                            ref={scrollRef}
                            className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar scroll-smooth no-scrollbar"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="min-w-[300px] w-[300px] bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between h-[220px]"
                                >
                                    <p className="text-[#4f5869] text-base leading-relaxed">
                                        {review.text}
                                    </p>
                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400">
                                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-[#30363c] font-bold text-sm">{review.name}</span>
                                        <span className="text-gray-400 text-sm">{review.date}</span>
                                    </div>
                                </div>
                            ))}

                            {/* Navigation Arrow (Visual only mostly, consistent with image) */}
                            <div className="flex items-center justify-center min-w-[60px]">
                                <button
                                    onClick={() => scroll('right')}
                                    className="w-12 h-12 bg-[#767d86] hover:bg-[#5e646d] rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
