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
        image: "https://assets.pharmeasy.in/apothecary/images/locationMarker.svg?dim=256x0",
    },
    {
        title: "19000+",
        subtitle: "Pin codes serviced last 3 months",
        image: "https://assets.pharmeasy.in/apothecary/images/pincodeServed.svg?dim=256x0",
    },
];

export default function MobileWhyChooseUs() {
    return (
        <div className="w-full font-sans">
            {/* Stats Section */}
            <div className="w-full bg-[#f8f9ff] py-8 px-4">
                <h2 className="text-xl font-bold text-gray-800 leading-tight mb-6 text-center">Why Choose Us?</h2>

                <div className="grid grid-cols-1 gap-6">
                    {features.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-[50px] h-[50px] relative mt-1">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 leading-tight mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-snug">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Download App Banner */}
            <div className="w-full bg-[#fcebf5] pb-8 pt-6 px-4 relative overflow-hidden flex flex-col items-center text-center">
                {/* Background Image (faded/absolute if needed specifically, but simple layout works well) */}

                <div className="relative z-10 w-full max-w-[320px]">
                    <h2 className="text-2xl font-bold text-gray-800 leading-tight mb-1 font-sans">
                        Simplifying Healthcare
                    </h2>
                    <h2 className="text-2xl font-bold text-gray-800 leading-tight mb-4 font-sans">
                        Impacting Lives
                    </h2>
                    <p className="text-base font-bold text-gray-700 mb-6">
                        Download the App for Free
                    </p>

                    <div className="flex flex-row justify-center gap-3">
                        <a href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&hl=en_IN&gl=US" target="_blank" rel="noreferrer" className="w-[140px] h-[45px] relative hover:scale-105 transition-transform cursor-pointer">
                            <Image
                                src="https://assets.pharmeasy.in/apothecary/images/googlePlay.svg?dim=360x0"
                                alt="Get it on Google Play"
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </a>
                        <a href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643" target="_blank" rel="noreferrer" className="w-[140px] h-[45px] relative hover:scale-105 transition-transform cursor-pointer">
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

                <div className="w-full h-[200px] mt-6 relative">
                    <Image
                        src="https://assets.pharmeasy.in/apothecary/images/downloadBanner.webp?dim=1440x0&q=100"
                        alt="Mobile App Banner"
                        fill
                        className="object-contain object-bottom"
                        unoptimized
                    />
                </div>
            </div>
        </div>
    );
}
