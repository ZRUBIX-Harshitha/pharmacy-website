"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const checkups = [
    {
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/fe1c968b99b530fd938e99c057067db3.jpg?dim=384x384&q=75"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/5d49494d55ac35029449babd4000c9fa.jpg?dim=384x384&q=75"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/9dbc94fc2da83f9fb1815e0e6fcf2738.jpg?dim=384x384&q=75"
    }
];

export default function CheckupsforMen() {
    return (
        <div className="w-full bg-white py-12 font-sans -mt-15">
            <div className="max-w-[1550px] mx-auto px-5">

                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-[#30363c] text-2xl font-bold leading-tight mb-1">
                        Recommended Checkups for Men
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
                            src="https://cdn01.pharmeasy.in/dam/banner/bannerImages/2c70b0ad021e32f299adc24c530e0a06.jpg?dim=384x384&q=75"
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
