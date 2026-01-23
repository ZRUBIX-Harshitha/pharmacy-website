"use client";
import React from 'react';
import Image from 'next/image';

const scans = [
    { alt: "Full Body", image: "https://cms-contents.pharmeasy.in/banner/728f8d7d580-2decho.jpg?dim=384x384&q=75" },
    { alt: "Fever", image: "https://cms-contents.pharmeasy.in/banner/3122e5a64cf-c.jpg?dim=384x384&q=75" },
    { alt: "Thyroid", image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/d8cd62d088753bad841afb629384f795.jpg?dim=256x256&q=75" },
    { alt: "Diabetes", image: "https://cms-contents.pharmeasy.in/banner/c10ee781c2e-ecg.jpg?dim=384x384&q=75" },
    { alt: "Heart", image: "https://cms-contents.pharmeasy.in/banner/f16d8507913-mri.jpg?dim=384x384&q=75" },
];

export default function MobileBookAScan() {
    return (
        <div className="w-full bg-white py-8 font-sans border-b border-gray-50">
            <div className="px-5 mb-5">
                <h2 className="text-[#30363c] text-[18px] font-bold leading-tight">Book A Scan</h2>
                <div className="w-12 h-1 bg-yellow-400 rounded-full mt-1.5" />
            </div>

            <div className="flex overflow-x-auto gap-4 px-5 pb-2 scrollbar-hide no-scrollbar">
                {scans.map((item, index) => (
                    <div key={index} className="flex flex-col items-center min-w-[140px] group">
                        <div className="w-[140px] h-[140px] rounded-2xl overflow-hidden relative mb-3 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-gray-100 group-active:scale-95 transition-all">
                            <Image src={item.image} alt={item.alt} fill className="object-cover" unoptimized />
                        </div>
                        <span className="text-gray-700 font-bold text-[13px]">{item.alt}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
