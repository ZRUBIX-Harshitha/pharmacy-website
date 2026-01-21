"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const banners = [
    "https://cms-contents.pharmeasy.in/banner/c9a7fe04b13-Vein.jpg?dim=1920x1920&q=75",
    "https://cms-contents.pharmeasy.in/banner/34db7efd8bf-Banner_BAU_BOGO.png?dim=1920x1920&q=75",
    "https://cms-contents.pharmeasy.in/banner/1aa229a7ba5-gvrgvgrfvrfvw.jpg?dim=1920x1920&q=75",
    "https://cms-contents.pharmeasy.in/banner/7c5efa3f228-dfdss.jpg?dim=1920x1920&q=75",
    "https://cms-contents.pharmeasy.in/banner/98d73c5985b-13.jpg?dim=1920x1920&q=75"
];

const actions = [
    {
        title: "All Tests",
        icon: "https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg",
        link: "/lab-tests/all-tests"
    },
    {
        title: "Health Packages",
        icon: "https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg",
        link: "/lab-tests/health-packages"
    },
    {
        title: "Book on Call",
        icon: "https://assets.pharmeasy.in/web-assets/dist/4ed59722.svg",
        link: "/lab-tests/book-on-call"
    },
    {
        title: "Upload Prescription",
        icon: "https://assets.pharmeasy.in/web-assets/dist/d4d62fbf.svg",
        link: "/lab-tests/upload-prescription"
    }
];

export default function HeroSection() {
    const scrollRef = useRef(null);

    return (
        <div className="w-full bg-white pt-6 pb-12 font-sans">
            <div className="max-w-[1550px] mx-auto px-5">

                {/* Heading */}
                <h1 className="text-[#30363c] text-2xl font-bold mb-6 text-left">
                    Book Lab Test Online with PharmEasy
                </h1>

                {/* Banners Carousel */}
                <div className="relative group mb-10">
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar scroll-smooth no-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {banners.map((url, index) => (
                            <div key={index} className="flex-shrink-0 w-[450px] md:w-[540px] relative rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.01]">
                                <Image
                                    src={url}
                                    alt={`Lab Test Banner ${index + 1}`}
                                    width={540}
                                    height={200}
                                    className="w-full h-auto object-cover"
                                    unoptimized
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Buttons (Pills) */}
                <div className="flex flex-wrap justify-between gap-4 mb-10 border-b border-transparent">
                    {actions.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="flex items-center gap-4 px-6 py-4 rounded-[40px] border border-gray-300 hover:border-[#a7358d] hover:shadow-md transition-all cursor-pointer flex-1 min-w-[240px] bg-white"
                        >
                            <div className="w-10 h-10 relative flex-shrink-0">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                            <span className="text-[#30363c] font-bold text-[17px] whitespace-nowrap">
                                {item.title}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Plus Membership Banner */}
                <div className="w-full rounded-lg overflow-hidden relative cursor-pointer group">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#a7358d] to-[#7f286b]"></div>

                    {/* Background Pattern Image */}
                    <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
                        <Image
                            src="https://assets.pharmeasy.in/web-assets/dist/527af8cc.svg?dim=1200x1200&q=75"
                            alt="Pattern"
                            fill
                            className="object-cover object-right"
                            unoptimized
                        />
                    </div>

                    <div className="relative z-10 flex items-center justify-between px-6 py-4">
                        <div className="flex items-center gap-4">
                            {/* Plus Icon */}
                            <div className="w-10 h-10 relative flex-shrink-0">
                                <Image
                                    src="https://assets.pharmeasy.in/web-assets/images/diagnostics/icon_plusForBanner_yellow_filled.svg?dim=48x48&q=75"
                                    alt="Plus"
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[#fec84e] text-[10px] font-bold uppercase tracking-wider">PLUS</span>
                            </div>

                            {/* Text Content */}
                            <div className="text-white">
                                <p className="text-[17px] font-medium leading-tight">
                                    Save 5% on medicines, 50% on 1st lab test & get FREE delivery with PLUS membership
                                </p>
                            </div>
                        </div>

                        {/* Know More CTA */}
                        <div className="text-white/90 text-sm font-bold flex items-center gap-1 group-hover:text-white group-hover:translate-x-1 transition-all">
                            Know more
                            <span className="text-lg">&gt;</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
