"use client";
import React from 'react';
import Image from 'next/image';

const organs = [
    { alt: "Full Body", image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/de15f0739f2c3197aebf1a6f27d1a1a9.jpg?dim=384x384&q=75" },
    { alt: "Fever", image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/121181e3ec683a6e80961720c03f4ef4.jpg?dim=384x384&q=75" },
    { alt: "Thyroid", image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/b0adfeb440cb390a8f6a9db2eaff8fb8.jpg?dim=384x384&q=75" },
];

export default function MobileVitalOrgans() {
    return (
        <div className="w-full bg-white py-6 font-sans border-b border-gray-100">
            <div className="px-4 mb-4">
                <h2 className="text-[#30363c] text-lg font-bold leading-tight">Checkups by Vital Organs</h2>
            </div>
            <div className="flex overflow-x-auto gap-3 px-4 pb-2 scrollbar-hide no-scrollbar">
                {organs.map((item, index) => (
                    <div key={index} className="flex flex-col items-center min-w-[120px]">
                        <div className="w-[120px] h-[160px] rounded-lg overflow-hidden relative mb-2">
                            <Image src={item.image} alt={item.alt} fill className="object-cover" unoptimized />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
