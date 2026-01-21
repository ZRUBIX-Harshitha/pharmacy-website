"use client";
import React from 'react';
import Image from 'next/image';

const steps = [
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/upload_prescription_icon_green.webp",
        title: "Search or Upload Prescription",
        description: "Easy search or upload prescription for quick order"
    },
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/check_verified_green.webp",
        title: "Get Expert Verification",
        description: "Expert review and cost-effective alternatives"
    },
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/medicine_icon_green.webp",
        title: "Confirm Order & Delivery Address",
        description: "Choose delivery or store pickup"
    },
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/percel_icon_green.webp",
        title: "Get your medicines delivered at doorstep!",
        description: "Track your order and receive at home"
    }
];

export default function HowtoOrder() {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1200px] mx-auto text-center">
                <h2 className="text-[#091e42] font-bold text-2xl md:text-3xl mb-4">
                    How to Order Medicine Online from Medkart?
                </h2>
                <p className="text-[#5e6c84] text-sm md:text-base max-w-4xl mx-auto mb-16 leading-relaxed">
                    Ordering your medicines with Medkart is simple, safe, and made for everyone, whether you're tech-savvy or not. Follow
                    these four easy steps to get your medicines delivered from a nearby Medkart store.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center relative z-10">
                            {/* Arrow connector for desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] border-t-2 border-dashed border-gray-300 -z-10"></div>
                            )}

                            <div className="mb-6 bg-white rounded-full p-2">
                                <Image
                                    src={step.icon}
                                    alt={step.title}
                                    width={60}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-[#172b4d] font-bold text-base mb-2 px-2">
                                {step.title}
                            </h3>
                            <p className="text-[#5e6c84] text-xs leading-relaxed max-w-[200px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Generic Medicines Banner */}
                <div className="mt-16 relative bg-white border border-gray-100 rounded-2xl p-8 md:p-12 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.02)]">
                    {/* Decorative Blobs */}
                    {/* Blue Blob - Top/Left */}
                    <div
                        className="absolute top-0 left-0 w-32 h-32"
                        style={{
                            boxShadow: 'rgb(211, 228, 248) 0px 0px 30px 20px',
                            borderRadius: '50%',
                            backgroundColor: 'rgb(211, 228, 248)',
                            transform: 'translate(-30%, -30%)'
                        }}
                    ></div>

                    {/* Green Blob - Bottom/Right */}
                    <div
                        className="absolute bottom-0 right-0 w-32 h-32"
                        style={{
                            boxShadow: 'rgb(220, 239, 234) 0px 0px 30px 20px',
                            borderRadius: '50%',
                            backgroundColor: 'rgb(220, 239, 234)',
                            transform: 'translate(30%, 30%)'
                        }}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <h3 className="text-[#091e42] font-bold text-xl md:text-2xl mb-4">
                            Lets learn about Generic Medicines
                        </h3>
                        <p className="text-[#42526e] text-base leading-relaxed max-w-2xl mb-8">
                            Generic medicines offer the same effectiveness as brand-name drugs at a lower cost,
                            making healthcare more affordable and accessible.
                        </p>
                        <button className="bg-[#1755a6] hover:bg-[#0e438a] text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg">
                            Know More About Generic
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
