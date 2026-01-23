"use client";
import React from 'react';
import Image from 'next/image';

const checkups = [
    { image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/fe1c968b99b530fd938e99c057067db3.jpg?dim=384x384&q=75" },
    { image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/5d49494d55ac35029449babd4000c9fa.jpg?dim=384x384&q=75" },
];

export default function MobileCheckupsforMen() {
    return (
        <div className="w-full bg-white py-6 font-sans border-b border-gray-100">
            <div className="px-4 mb-4">
                <h2 className="text-[#30363c] text-lg font-bold leading-tight">Checkups for Men</h2>
            </div>
            <div className="flex overflow-x-auto gap-3 px-4 pb-2 scrollbar-hide no-scrollbar">
                {checkups.map((item, index) => (
                    <div key={index} className="flex flex-col items-center min-w-[180px]">
                        <div className="w-[180px] h-[220px] rounded-lg overflow-hidden relative mb-2">
                            <Image src={item.image} alt="Checkup" fill className="object-cover" unoptimized />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
