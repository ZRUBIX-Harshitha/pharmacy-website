"use client";
import React, { useRef } from 'react';
import Image from 'next/image';

const concerns = [
    {
        alt: "Full Body Checkups",
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/26e9560695983443b7e1d4993f345ac1.jpg?dim=256x256&q=75"
    },
    {
        alt: "Fever",
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/645c7bb3152033aba39becd2b5e0f478.jpg?dim=256x256&q=75"
    },
    {
        alt: "Thyroid",
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/d8cd62d088753bad841afb629384f795.jpg?dim=256x256&q=75"
    },
    {
        alt: "Diabetes",
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/c6a535a8efb4333cb51533b2b83acf98.jpg?dim=256x256&q=75"
    },
    {
        alt: "Heart Health",
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/b177d2190f4e3313922413831adbd7ba.jpg?dim=256x256&q=75"
    },
    {
        alt: "Cancer Screening",
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/8445232fa75d30c2a4bfe8fc2dc99fba.jpg?dim=256x256&q=75"
    },
    {
        alt: "Hair & Skin",
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/cc0b7be4a0a531e1af7ad259c640a010.jpg?dim=256x256&q=75"
    },
    {
        alt: "Lifestyle Habits",
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/a32a87032cef3afdbc58bc858cc38d7a.jpg?dim=256x256&q=75"
    }
];

export default function HealthConcern() {
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
        <div className="w-full bg-white py-12 font-sans ">
            <div className="max-w-[1550px] mx-auto px-5">

                {/* Header Section */}
                <div className="flex items-end gap-3 mb-8">
                    <h2 className="text-[#30363c] text-2xl font-bold leading-tight">
                        Browse By Health Concern
                    </h2>
                    <div className="flex items-center gap-2 pb-1">
                        <span className="text-gray-500 text-sm font-medium">Powered By</span>
                        <Image
                            src="https://assets.pharmeasy.in/web-assets/images/diagnostics/icon_thyrocare_logo_red.webp?dim=256x256&q=75"
                            alt="Thyrocare"
                            width={80}
                            height={25}
                            className="object-contain"
                            unoptimized
                        />
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative group">


                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar scroll-smooth no-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {concerns.map((item, index) => (
                            <div key={index} className="flex flex-col items-center min-w-[160px] cursor-pointer group/item">
                                <div className="w-[150px] h-[230px] flex items-center justify-center mb-3 transition-transform duration-300 group-hover/item:-translate-y-1 overflow-hidden relative">
                                    <div className="relative w-[170px] h-[230px]  overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    );
}
