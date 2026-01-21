"use client";
import React, { useRef } from 'react';
import Image from 'next/image';

const concerns = [
    {
        alt: "Full Body Checkups",
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/de15f0739f2c3197aebf1a6f27d1a1a9.jpg?dim=384x384&q=75"
    },
    {
        alt: "Fever",
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/121181e3ec683a6e80961720c03f4ef4.jpg?dim=384x384&q=75"
    },
    {
        alt: "Thyroid",
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/b0adfeb440cb390a8f6a9db2eaff8fb8.jpg?dim=384x384&q=75"
    },
    {
        alt: "Diabetes",
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/f69239bb75873d10bd3b35e4ebe545be.jpg?dim=384x384&q=75"
    },
    {
        alt: "Heart Health",
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/159cbdf19f62395c9eaf826573d5be73.jpg?dim=384x384&q=75"
    },
    {
        alt: "Cancer Screening",
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/29bfbe09aa28390a9499aab66e1a3175.jpg?dim=384x384&q=75"
    },
    {
        alt: "Hair & Skin",
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/8b25f0218ab5321e8e39f764b4fdba9c.jpg?dim=384x384&q=75"
    }

];

export default function VitalOrgansPage() {
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
                        Checkups based on Vital Organs
                    </h2>

                </div>

                {/* Carousel Container */}
                <div className="relative group mb-12">


                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar scroll-smooth no-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {concerns.map((item, index) => (
                            <div key={index} className="flex flex-col items-center min-w-[160px] cursor-pointer group/item">
                                <div className="w-[200px] h-[280px] flex items-center justify-center mb-3 transition-transform duration-300 group-hover/item:-translate-y-1 overflow-hidden relative">
                                    <div className="relative w-[200px] h-[280px]  overflow-hidden">
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
