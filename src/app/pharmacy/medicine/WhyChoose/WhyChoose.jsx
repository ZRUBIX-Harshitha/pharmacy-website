"use client";
import React from 'react';
import Image from 'next/image';

const features = [
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/discount_icon_green_1.webp",
        title: "Save Up to 85% on Your Medicine Bills",
        description: "Get the same quality medicines at fraction of the cost"
    },
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/verified_icon_blue_1.webp",
        title: "Verified & Licensed Online Pharmacy",
        description: "All medicines are checked by certified Health Advisers"
    },
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/mobile_icons_1.webp",
        title: "Order via Website, App, or WhatsApp",
        description: "Order anywhere, anytime and get the medicines delivered to your doorstep"
    },
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/expert_pharmacists_icon_1.webp",
        title: "Suggested By Health Adviser",
        description: "Get Professional guidance for better alternatives"
    },
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/delivery_percel_icon_1.webp",
        title: "Fast and trusted online medicine delivery across 35000+ pincodes",
        description: "Quick and reliable medicine delivery"
    },
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/delivery_percel_verified_1.webp",
        title: "Trusted online medicine delivery",
        description: "Get Live tracking and secure packaging with Medkart"
    }
];

export default function WhyChoose() {
    return (
        <div className="w-full py-16 px-4">
            <div className="max-w-[1500px] mx-auto">
                <h2 className="text-center text-[#091e42] font-bold text-2xl md:text-3xl mb-12">
                    Why Choose Medkart to Order Medicines Online?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="mb-6">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={60}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-[#172b4d] font-bold text-lg mb-3 leading-tight">
                                {feature.title}
                            </h3>
                            <p className="text-[#5e6c84] text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
