"use client";
import React from 'react';
import Image from 'next/image';

const features = [
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/discount_icon_green_1.webp",
        title: "Save Up to 85%",
        description: "Get the same quality medicines at fraction of the cost"
    },
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/verified_icon_blue_1.webp",
        title: "Verified Pharmacy",
        description: "All medicines are checked by certified Health Advisers"
    },
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/expert_pharmacists_icon_1.webp",
        title: "Expert Guidance",
        description: "Get Professional guidance for better alternatives"
    },
    {
        icon: "https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/delivery_percel_icon_1.webp",
        title: "Fast Delivery",
        description: "Quick and reliable medicine delivery across 35000+ pincodes"
    }
];

export default function MobileWhyChoose() {
    return (
        <div className="w-full py-10 px-5 bg-white">
            <div className="text-center mb-8">
                <h2 className="text-[20px] font-bold text-gray-900 mb-2">Why Choose Medkart?</h2>
                <div className="h-1 w-12 bg-[#a7358d] rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-5 flex flex-col items-center text-center border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 group"
                    >
                        <div className="mb-4 w-12 h-12 relative bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#fcebf5] transition-colors">
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                width={28}
                                height={28}
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                        <h3 className="text-gray-900 font-bold text-[13px] mb-2 leading-tight">
                            {feature.title}
                        </h3>
                        <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-3">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
