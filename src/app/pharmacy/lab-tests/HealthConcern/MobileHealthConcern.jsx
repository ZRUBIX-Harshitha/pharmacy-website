"use client";
import React from 'react';
import Image from 'next/image';

const concerns = [
    { alt: "Full Body", image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/26e9560695983443b7e1d4993f345ac1.jpg?dim=256x256&q=75" },
    { alt: "Fever", image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/645c7bb3152033aba39becd2b5e0f478.jpg?dim=256x256&q=75" },
    { alt: "Thyroid", image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/d8cd62d088753bad841afb629384f795.jpg?dim=256x256&q=75" },
    { alt: "Diabetes", image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/c6a535a8efb4333cb51533b2b83acf98.jpg?dim=256x256&q=75" },
    { alt: "Heart", image: "https://cdn01.pharmeasy.in/dam/banner/bannerImages/b177d2190f4e3313922413831adbd7ba.jpg?dim=256x256&q=75" },
];

export default function MobileHealthConcern() {
    return (
        <div className="w-full bg-white py-6 font-sans">
            <div className="px-4 mb-4 flex items-end justify-between">
                <div>
                    <h2 className="text-gray-900 text-[16px] font-bold">In the Spotlight</h2>
                    <p className="text-xs text-gray-400 mt-0.5">Explore tests by health concern</p>
                </div>
            </div>

            <div className="flex overflow-x-auto gap-3 px-4 pb-2 scrollbar-hide no-scrollbar">
                {concerns.map((item, index) => (
                    <div key={index} className="flex flex-col items-center min-w-[90px] group">
                        <div className="w-[90px] h-[100px] rounded-xl overflow-hidden relative mb-2 border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                            <Image src={item.image} alt={item.alt} fill className="object-cover" unoptimized />
                        </div>
                        <span className="text-gray-700 text-[11px] font-medium text-center">{item.alt}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
