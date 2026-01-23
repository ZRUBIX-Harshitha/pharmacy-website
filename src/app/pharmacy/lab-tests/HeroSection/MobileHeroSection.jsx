"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileHeroSection() {
    return (
        <div className="w-full bg-[#f8f9fa] pt-4 pb-6 font-sans">
            {/* Header / Title */}
            <div className="px-4 mb-5">
                <h1 className="text-gray-900 text-lg font-bold leading-tight">
                    Lab Tests & Health Checkups
                </h1>
                <p className="text-xs text-gray-500 mt-1">Trusted by 20 Million+ Families</p>
            </div>

            {/* Banners Carousel */}
            <div className="mb-6 overflow-x-auto pb-4 px-4 scrollbar-hide no-scrollbar snap-x snap-mandatory flex gap-3">
                {[
                    "https://cms-contents.pharmeasy.in/banner/c9a7fe04b13-Vein.jpg?dim=1920x1920&q=75",
                    "https://cms-contents.pharmeasy.in/banner/34db7efd8bf-Banner_BAU_BOGO.png?dim=1920x1920&q=75",
                    "https://cms-contents.pharmeasy.in/banner/1aa229a7ba5-gvrgvgrfvrfvw.jpg?dim=1920x1920&q=75"
                ].map((url, index) => (
                    <div key={index} className="flex-shrink-0 w-[85%] relative rounded-xl overflow-hidden snap-center shadow-sm border border-gray-100/50">
                        <Image
                            src={url}
                            alt={`Banner ${index + 1}`}
                            width={400}
                            height={150}
                            className="w-full h-auto object-cover"
                            unoptimized
                        />
                    </div>
                ))}
            </div>

            {/* Quick Actions Grid */}
            <div className="px-4 grid grid-cols-4 gap-3 mb-8">
                {[
                    { title: "All Tests", icon: "https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg", link: "/lab-tests/all-tests" },
                    { title: "Packages", icon: "https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg", link: "/lab-tests/health-packages" },
                    { title: "Call", icon: "https://assets.pharmeasy.in/web-assets/dist/4ed59722.svg", link: "/lab-tests/book-on-call" },
                    { title: "Upload", icon: "https://assets.pharmeasy.in/web-assets/dist/d4d62fbf.svg", link: "/lab-tests/upload-prescription" }
                ].map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        className="flex flex-col items-center gap-2 group"
                    >
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 group-active:scale-95 transition-transform">
                            <Image src={item.icon} alt={item.title} width={24} height={24} className="object-contain" unoptimized />
                        </div>
                        <span className="text-gray-700 font-medium text-[11px] text-center leading-tight">
                            {item.title}
                        </span>
                    </Link>
                ))}
            </div>

            {/* Plus Banners - Cleaner Design */}
            <div className="px-4">
                <div className="w-full rounded-xl overflow-hidden bg-[#a7358d] relative p-4 shadow-sm flex items-center justify-between">
                    <div className="flex flex-col text-white">
                        <span className="text-[10px] font-bold uppercase opacity-80 mb-0.5">PharmEasy Plus</span>
                        <span className="text-sm font-bold leading-tight max-w-[200px]">Save 50% on First Test & 5% Extra on Medicines</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
