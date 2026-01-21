"use client";
import React, { useRef } from 'react';
import Image from 'next/image';

const concerns = [
    {
        alt: "Full Body Checkups",
        image: "https://cms-contents.pharmeasy.in/banner/728f8d7d580-2decho.jpg?dim=384x384&q=75"
    },
    {
        alt: "Fever",
        image: "https://cms-contents.pharmeasy.in/banner/3122e5a64cf-c.jpg?dim=384x384&q=75"
    },
    {
        alt: "Thyroid",
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/d8cd62d088753bad841afb629384f795.jpg?dim=256x256&q=75"
    },
    {
        alt: "Diabetes",
        image: "https://cms-contents.pharmeasy.in/banner/c10ee781c2e-ecg.jpg?dim=384x384&q=75"
    },
    {
        alt: "Heart Health",
        image: "https://cms-contents.pharmeasy.in/banner/f16d8507913-mri.jpg?dim=384x384&q=75"
    },
    {
        alt: "Cancer Screening",
        image: "https://cms-contents.pharmeasy.in/banner/e3cf153e7dc-ultra.jpg?dim=384x384&q=75"
    },
    {
        alt: "Hair & Skin",
        image: "https://cms-contents.pharmeasy.in/banner/6f397e3aa7b-xray.jpg?dim=384x384&q=75"
    }

];

export default function BookAScanPage() {
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
                        Book A Scan
                    </h2>

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
                                <div className="w-[250px] h-[230px] flex items-center justify-center mb-3 transition-transform duration-300 group-hover/item:-translate-y-1 overflow-hidden relative">
                                    <div className="relative w-[250px] h-[230px]  overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                            fill
                                            className="object-contain"
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
