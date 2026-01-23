"use client";
import React from 'react';
import Image from 'next/image';

const steps = [
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/upload_prescription_icon_green.webp",
        title: "Upload Prescription",
        description: "Upload prescription or search medicine"
    },
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/check_verified_green.webp",
        title: "Expert Verification",
        description: "Call from Health Adviser"
    },
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/medicine_icon_green.webp",
        title: "Confirm Order",
        description: "Choose delivery or pickup"
    },
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/percel_icon_green.webp",
        title: "Doorstep Delivery",
        description: "Receive at your doorstep"
    }
];

export default function MobileHowtoOrder() {
    return (
        <div className="w-full bg-[#fafbfe] py-10 px-5 font-sans">
            <div className="text-center mb-10">
                <h2 className="text-[20px] font-bold text-gray-900 mb-2">How to Order?</h2>
                <div className="h-1 w-12 bg-[#a7358d] rounded-full mx-auto"></div>
            </div>

            <div className="relative pl-4 space-y-8">
                {/* Vertical Line Connector */}
                <div className="absolute left-[34px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#a7358d]/20 via-[#a7358d]/50 to-[#a7358d]/20"></div>

                {steps.map((step, index) => (
                    <div key={index} className="flex items-start relative z-10 group">
                        <div className="bg-white rounded-full p-2 w-[44px] h-[44px] flex items-center justify-center border border-[#a7358d]/20 shadow-sm flex-shrink-0 z-10 mr-5 group-hover:scale-110 transition-transform duration-300">
                            <Image
                                src={step.icon}
                                alt={step.title}
                                width={24}
                                height={24}
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                        <div className="flex-1 bg-white p-5 rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] group-hover:shadow-md transition-all -mt-2">
                            <h3 className="text-gray-900 font-bold text-[15px] mb-1">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 text-[13px] leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Generic Medicines Card */}
            <div className="mt-10 bg-gradient-to-r from-[#a7358d] to-[#6a225a] rounded-2xl p-6 text-center shadow-lg relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                    <h3 className="text-white font-bold text-lg mb-2">
                        Switch to Generic Medicines
                    </h3>
                    <p className="text-purple-100 text-[13px] leading-relaxed mb-6 font-medium">
                        Same effectiveness, huge savings. Up to 85% off.
                    </p>
                    <button className="bg-white text-[#a7358d] font-bold py-3 px-8 rounded-xl text-sm w-full shadow-lg active:scale-95 transition-all">
                        Know More
                    </button>
                </div>
            </div>
        </div>
    );
}
