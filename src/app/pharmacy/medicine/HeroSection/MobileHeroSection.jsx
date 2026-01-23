"use client";
import React from 'react';
import Image from 'next/image';

export default function MobileHeroSection() {
    return (
        <div className="w-full relative overflow-hidden bg-gradient-to-br from-[#fcebf5] to-[#e6d3f0] pb-8 font-sans">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#a7358d]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="px-4 pt-6 relative z-10">
                {/* Header Text */}
                <h1 className="text-center text-[22px] font-semibold text-[#4f585e] mb-4 leading-tight">
                    <span className="text-[#a7358d] font-bold block mb-1">Get Medicines Fast</span>
                    Superfast Delivery in your city
                </h1>

                {/* Only on PharmEasy Badge */}
                <div className="flex justify-center mb-6">
                    <div className="bg-[#a7358d] px-4 py-1 rounded-full border border-white/50 shadow-sm relative z-10">
                        <span className="text-[9px] font-bold text-white tracking-widest uppercase">ONLY ON PHARMEASY</span>
                    </div>
                </div>

                {/* Search Bar Mobile */}
                <div className="bg-white rounded-xl shadow-lg p-4 mb-6 relative z-20">
                    <div className="flex bg-gray-50 border border-gray-200 rounded-lg items-center px-3 py-2.5 mb-3">
                        <div className="mr-2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search for Medicines..."
                            className="w-full bg-transparent text-gray-700 outline-none placeholder-gray-400 font-medium text-sm"
                        />
                    </div>
                    <button className="w-full bg-[#a7358d] active:bg-[#8e2d78] text-white font-bold py-2.5 rounded-lg transition-colors text-sm shadow-md">
                        Search
                    </button>
                </div>

                {/* Benefits Scroll */}
                <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide -mx-4 px-4 no-scrollbar">
                    {[
                        { title: "Cash on Delivery", sub: "On all orders", icon: "https://assets.pharmeasy.in/web-assets/images/cod-1-om.svg?dim=128x128&q=75" },
                        { title: "Express Delivery", sub: "Free* & fast", icon: "https://assets.pharmeasy.in/web-assets/images/delivery-om.svg?dim=128x128&q=75" },
                        { title: "Easy Returns", sub: "No questions asked", icon: "https://assets.pharmeasy.in/web-assets/images/easy-returns-om.svg?dim=128x128&q=75" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex-shrink-0 w-[140px] bg-white/70 backdrop-blur-sm rounded-xl p-3 border border-white shadow-sm flex flex-col items-center text-center">
                            <div className="w-10 h-10 mb-2 relative">
                                <Image src={item.icon} alt={item.title} fill className="object-contain" unoptimized />
                            </div>
                            <h3 className="text-[#4f585e] font-bold text-xs mb-0.5">{item.title}</h3>
                            <p className="text-[#8e9ca7] text-[10px] leading-tight">{item.sub}</p>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center gap-2 my-6 opacity-60">
                    <div className="h-[1px] bg-gray-400 w-12"></div>
                    <span className="text-[9px] font-bold text-[#a7358d] tracking-wider uppercase">OR ORDER VIA</span>
                    <div className="h-[1px] bg-gray-400 w-12"></div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-3">
                    {[
                        { title: "WhatsApp", icon: "https://assets.pharmeasy.in/web-assets/images/whatsApp-logo.png?dim=64x64&q=75" },
                        { title: "Scan Rx", icon: "https://assets.pharmeasy.in/web-assets/images/camera.svg?dim=64x64&q=75" },
                        { title: "Call Order", icon: "https://assets.pharmeasy.in/web-assets/images/order-medicine-phone-icon.svg?dim=64x64&q=75" }
                    ].map((btn, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-2 border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-2 active:bg-gray-50">
                            <Image src={btn.icon} alt={btn.title} width={24} height={24} />
                            <span className="text-gray-700 font-semibold text-[10px] text-center leading-tight">{btn.title}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
