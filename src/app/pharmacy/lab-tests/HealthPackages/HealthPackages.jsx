"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const packages = [
    {
        title: "Basic Health Checkup",
        description: "Basic Health Checkup package can be taken by anyone...",
        price: "699",
        originalPrice: "2249",
        discount: "69%",
        bgColor: "bg-[#e5f1ff]", // Light Blue
        bgGradient: "from-[#e5f1ff] to-white"
    },
    {
        title: "Comprehensive Full Body Checkup with Vitamin D & B12",
        description: "This checkup can help identify significant health risks...",
        price: "1149",
        originalPrice: "4599",
        discount: "75%",
        bgColor: "bg-[#fff8e5]", // Light Yellow
        bgGradient: "from-[#fff8e5] to-white"
    },
    {
        title: "Comprehensive Plus Full Body Checkup",
        description: "Comprehensive Plus Checkup with Vitamin D & B12...",
        price: "1249",
        originalPrice: "4899",
        discount: "75%",
        bgColor: "bg-[#ffeef0]", // Light Pink
        bgGradient: "from-[#ffeef0] to-white"
    },
    {
        title: "Diabetes Care",
        description: "The Diabetes Care Package helps screen for diabetes...",
        price: "649",
        originalPrice: "1399",
        discount: "54%",
        bgColor: "bg-[#f3f0ff]", // Light Purple
        bgGradient: "from-[#f3f0ff] to-white"
    },
    {
        title: "Women's Advanced Healthcare Package",
        description: "A sedentary lifestyle or poor eating patterns affect...",
        price: "1999",
        originalPrice: "6499",
        discount: "69%",
        bgColor: "bg-[#e5f1ff]", // Light Blue
        bgGradient: "from-[#e5f1ff] to-white"
    }
];

export default function HealthPackages() {
    const scrollRef = useRef(null);

    return (
        <div className="w-full bg-white py-10 font-sans">
            <div className="max-w-[1550px] mx-auto px-5">

                {/* Header */}
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <h2 className="text-[#30363c] text-[24px] font-bold leading-tight mb-1">
                            Recommended Health Packages
                        </h2>
                        <div className="flex items-center gap-2">
                            <span className="text-[#8897a2] text-[13px] font-medium">Powered By</span>
                            <Image
                                src="https://assets.pharmeasy.in/web-assets/images/diagnostics/icon_thyrocare_logo_red.webp?dim=256x256&q=75"
                                alt="Thyrocare"
                                width={70}
                                height={22}
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    </div>
                    <Link href="/lab-tests/packages" className="text-[#a7358d] font-bold text-[15px] hover:text-[#8e2d78] transition-colors flex items-center gap-1">
                        View All <span className="text-lg leading-none">&gt;</span>
                    </Link>
                </div>

                {/* Packages Grid/Carousel */}
                <div
                    className="flex gap-5 overflow-x-auto pb-6 hide-scrollbar scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`min-w-[280px] w-[240px] h-[340px] rounded-lg p-5 flex flex-col justify-between relative overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 group ${pkg.bgColor}`}
                        >
                            {/* Content */}
                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="text-[#30363c] font-bold text-[17px] mb-2 leading-snug tracking-tight">
                                    {pkg.title}
                                </h3>
                                <p className="text-[#5e6c84] text-[13px] mb-4 line-clamp-3 leading-relaxed">
                                    {pkg.description}
                                </p>

                                <div className="mt-auto mb-10">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[#30363c] font-bold text-[18px]">
                                            ₹{pkg.price}
                                        </span>
                                        <span className="text-[#5e6c84] text-[13px] line-through decoration-gray-400">
                                            ₹{pkg.originalPrice}
                                        </span>
                                        <span className="text-[#f47779] text-[11px] font-bold ml-1">
                                            {pkg.discount} OFF
                                        </span>
                                    </div>
                                    <p className="text-[#5e6c84] text-[11px] font-medium">
                                        with Coupon Discount
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Circular Image Overlay */}
                            <div className="absolute bottom-0 right-0 w-[120px] h-[120px] pointer-events-none transition-transform duration-300 group-hover:scale-105">
                                <div className="relative w-full h-full">
                                    {/* Circle background effect */}
                                    <div className="absolute bottom-[-20%] right-[-20%] w-[120%] h-[120%] bg-white/40 rounded-full blur-2xl"></div>

                                    <Image
                                        src="https://assets.pharmeasy.in/web-assets/images/diagnostics/image_ecllipseAtualContent.webp?dim=256x256&q=75"
                                        alt="Package visual"
                                        fill
                                        className="object-contain object-bottom-right transform scale-110 translate-x-1 translate-y-1"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-4">
                    <Link href="/lab-tests/all" className="block w-[300px] border border-gray-200 items-center ml-150 justify-center bg-white hover:bg-gray-50 text-[#30363c] font-bold text-[16px] text-center py-3.5 rounded-lg transition-colors shadow-sm hover:shadow-md flex  gap-2">
                        View All Tests and Packages <span className="text-xl ">&gt;</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}
