"use client";
import React from "react";
import Image from "next/image";

const features = [
    {
        title: "51 Million+",
        subtitle: "Registered users as of Aug 18, 2025",
        image: "https://assets.pharmeasy.in/apothecary/images/family.svg?dim=256x0",
    },
    {
        title: "71 Million+",
        subtitle: "Orders on PharmEasy till date",
        image: "https://assets.pharmeasy.in/apothecary/images/deliveryBoy.svg?dim=256x0",
    },
    {
        title: "60000+",
        subtitle: "Unique items sold last 6 months",
        image: "https://assets.pharmeasy.in/apothecary/images/locationMarker.svg?dim=256x0", // Using locationMarker as per elimination/user list
    },
    {
        title: "19000+",
        subtitle: "Pin codes serviced last 3 months",
        image: "https://assets.pharmeasy.in/apothecary/images/pincodeServed.svg?dim=256x0",
    },
];

export default function WhyChooseUs() {
    return (
        <div className="w-full font-sans">
            <div className="w-full" style={{ backgroundColor: "rgb(248, 249, 255)" }}>
                <div className="py-16 px-6 lg:px-10 max-w-[1600px] mx-auto">
                    <h2 className="text-[26px] font-bold text-gray-800 leading-tight mb-10">Why Choose Us?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {features.map((item, index) => (
                            <div key={index} className="flex items-center gap-5">
                                <div className="flex-shrink-0 w-[70px] h-[70px] relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>
                                <div>
                                    <h3 className="text-[24px] font-bold text-gray-800 leading-tight mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-[15px] leading-snug">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Download App Banner Container */}
            <div className="w-full mt-16 md:mt-24">
                <div className="w-full relative bg-[#fcebf5] overflow-hidden min-h-[350px] lg:min-h-[400px] flex items-center justify-center">
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src="https://assets.pharmeasy.in/apothecary/images/downloadBanner.webp?dim=1440x0&q=100"
                            alt="Download PharmEasy App"
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-[600px]">
                        <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-gray-800 leading-tight mb-2 font-sans">
                            Simplifying <br className="hidden md:block" /> Healthcare
                        </h2>
                        <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-gray-800 leading-tight mb-6 font-sans">
                            Impacting Lives
                        </h2>
                        <p className="text-[20px] md:text-[24px] font-bold text-gray-700 mb-8">
                            Download the App for Free
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&hl=en_IN&gl=US" target="_blank" rel="noreferrer" className="w-[180px] h-[55px] relative hover:scale-105 transition-transform cursor-pointer">
                                <Image
                                    src="https://assets.pharmeasy.in/apothecary/images/googlePlay.svg?dim=360x0"
                                    alt="Get it on Google Play"
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </a>
                            <a href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643" target="_blank" rel="noreferrer" className="w-[180px] h-[55px] relative hover:scale-105 transition-transform cursor-pointer">
                                <Image
                                    src="https://assets.pharmeasy.in/apothecary/images/appStore.svg?dim=360x0"
                                    alt="Download on the App Store"
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
