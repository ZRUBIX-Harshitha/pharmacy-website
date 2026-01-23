"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const essentials = [
    { title: "Covid Care", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png?dim=256x0" },
    { title: "Diabetes", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/154dec0567b23244b7dcbf2158d39eee.png?f=png?dim=256x0" },
    { title: "Cardiac", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png?dim=256x0" },
    { title: "Stomach Care", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/154dec0567b23244b7dcbf2158d39eee.png?f=png?dim=256x0" },
];

export default function MobileEssentialMedicines() {
    return (
        <div className="py-8 px-5 bg-white mb-2">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-[18px] font-bold text-gray-900 leading-tight">
                    Essential Medicines
                    <span className="block w-8 h-1 bg-[#a7358d] rounded-full mt-1"></span>
                </h2>
                <Link href="/pharmacy/medicine" className="text-[#a7358d] text-xs font-bold uppercase tracking-wide">View All</Link>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {essentials.map((item, index) => (
                    <Link key={index} href="/pharmacy/medicine" className="flex flex-col items-center group">
                        <div className="w-[70px] h-[70px] bg-gray-50 rounded-2xl p-3 mb-3 border border-gray-100 shadow-sm group-hover:shadow-md transition-all group-hover:border-[#a7358d]/30">
                            <Image src={item.image} alt={item.title} width={64} height={64} className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300" unoptimized />
                        </div>
                        <h3 className="text-[11px] font-bold text-center text-gray-700 leading-tight group-hover:text-[#a7358d] transition-colors">{item.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}
