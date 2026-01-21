"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const checkups = [
    {
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/db1baa017c6b3706833cc006174df23d.jpg?dim=384x384&q=75"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/114fe3cdf2a332a983c2b0df82ba992f.jpg?dim=384x384&q=75"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/c887d6cdd6e43f4cb6cd480342845fec.jpg?dim=384x384&q=75"
    }
];

export default function CheckupsforWomen() {
    return (
        <div className="w-full bg-white py-12 font-sans -mt-15">
            <div className="max-w-[1550px] mx-auto px-5">

                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-[#30363c] text-2xl font-bold leading-tight mb-1">
                        Recommended Checkups for Women
                    </h2>
                    <p className="text-[#5e6c84] text-base font-normal">
                        Curated by Doctors for you
                    </p>
                </div>

                {/* Grid Container */}
                <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar scroll-smooth no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

                    {/* Age Group Cards */}
                    {checkups.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[360px] w-[280px] h-[370px] rounded-xl flex flex-col items-center justify-center relative overflow-hidden cursor-pointer "
                        >
                            {/* Full Image */}
                            <Image
                                src={item.image}
                                alt="Checkup"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    ))}

                    {/* Find More Card */}
                    <div className="min-w-[360px] w-[280px] h-[370px] rounded-xl flex flex-col items-center justify-center relative overflow-hidden cursor-pointer ">
                        <Image
                            src="https://cdn01.pharmeasy.in/dam/banner/bannerImages/cd9259c89588344dacfe235ab60689c7.jpg?dim=384x384&q=75"
                            alt="Men Care"
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
