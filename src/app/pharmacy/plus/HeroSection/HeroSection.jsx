"use client";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
    const benefits = [
        {
            icon: "https://club-cdn.pharmeasy.in/production/ui/med_cb.svg?dim=1440x1440&q=75",
            title: "5%* Extra PharmEasy",
            title2: "Credits",
            subtitle: "Applicable on medicines and healthcare products. *TC Apply",
            isNew: false
        },
        {
            icon: "https://d22gqcf6g8w6wb.cloudfront.net/ui/diag_cb.svg?dim=1440x1440&q=75",
            title: "20% Extra PharmEasy",
            title2: "Credits",
            subtitle: "Applicable on all lab tests. *TC Apply",
            isNew: false
        },
        {
            icon: "https://d22gqcf6g8w6wb.cloudfront.net/ui/delivery.svg?dim=1440x1440&q=75",
            title: "FREE Delivery",
            title2: "",
            subtitle: "Enjoy free delivery on medicine and healthcare orders above ₹999",
            isNew: false
        }
    ];

    const additionalBenefits = [
        {
            icon: "https://d22gqcf6g8w6wb.cloudfront.net/ui/diag_cb.svg?dim=1440x1440&q=75",
            title: "50% Extra PharmEasy Credits on 1st lab test",
            subtitle: ""
        },
        {
            icon: "https://club-cdn.pharmeasy.in/production/ui/cash_handling.svg?dim=1440x1440&q=75",
            title: "Get 100% PharmEasy Credits on healthcare products from the House of PharmEasy",
            subtitle: ""
        }
    ];

    return (
        <div className="w-full relative font-sans">
            {/* Purple Background Section */}
            <div className="w-full bg-[#a7358d]  pt-10 pb-32 md:pb-36 px-4">
                <div className="max-w-[1250px] mx-auto relative z-10">

                    {/* Hero Content Row */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">

                        {/* Left Content */}
                        <div className="text-white pt-6 max-w-2xl">
                            {/* Logo Area */}
                            <div className="flex items-center gap-1 mb-4">
                                <span className="text-4xl md:text-5xl font-bold tracking-tight">PharmEasy</span>
                                <div className="relative w-7 h-7 md:w-8 md:h-8 mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fec84e" className="w-full h-full">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-[#fec84e] text-4xl md:text-5xl font-bold font-serif italic">Plus</span>
                            </div>

                            <p className="text-[16px] md:text-[17px] font-medium mb-10 text-white/90 tracking-wide">
                                Reduce your medical expenses with Plus
                            </p>

                            <div className="bg-white rounded-md pl-5 pr-8 py-3.5 inline-flex flex-wrap items-center gap-2 mb-10 shadow-md min-w-[300px] md:min-w-[420px]">
                                <span className="text-[#a7358d] font-bold text-lg whitespace-nowrap">Enjoy benefits worth</span>
                                <span className="text-[#a7358d] font-extrabold text-2xl font-serif">₹1500</span>
                            </div>

                            <p className="text-white font-bold text-lg">
                                Get exclusive access to
                            </p>
                        </div>

                        {/* Right Image (Family) */}
                        <div className="relative mt-12 md:mt-0 w-full md:w-[500px] h-[300px] md:h-[350px]">
                            {/* Chat Bubble */}
                            <div className="absolute -top-10 md:-top-4 right-1/2 translate-x-1/2 md:translate-x-0 md:right-24 z-20 bg-white rounded-xl rounded-bl-none px-5 py-2 flex items-center gap-2 shadow-sm animate-bounce-slow whitespace-nowrap">
                                <span className="text-[#a7358d] font-bold text-sm">Start saving more!</span>
                                <span className="text-xl">😄</span>
                                {/* Triangle */}
                                <div className="absolute -bottom-2 left-0 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-white border-r-[0px] border-r-transparent"></div>
                            </div>

                            <Image
                                src="https://assets.pharmeasy.in/web-assets/dist/3c950b3a.png?dim=1024x1024&q=75"
                                alt="Happy Family"
                                fill
                                className="object-contain object-bottom md:object-right-bottom"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Benefits Card (Negative Margin Layout) */}
            <div className="max-w-[1250px] mx-auto -mt-37.5 px-4 -mt-24 relative z-20">
                <div className="w-full bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-8 border border-gray-50">
                    {/* Primary Benefits Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-8 border-b border-gray-100/80">
                        {benefits.map((item, index) => (
                            <div key={index} className="flex gap-5 items-start">
                                <div className="w-12 h-12 relative shrink-0">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-[#4f585e] font-bold text-[16px] leading-snug">
                                        {item.title} <br /> {item.title2}
                                    </h3>
                                    <p className="text-[#8e9ca7] text-[13px] leading-relaxed mt-1 font-medium">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Benefits Section */}
                    <div className="pt-8">
                        <h4 className="text-[#4f585e] font-bold text-[16px] mb-6">Additional Benefits</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {additionalBenefits.map((item, index) => (
                                <div key={index} className="flex gap-5 items-center">
                                    <div className="w-10 h-10 relative shrink-0">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-[#4f585e] font-bold text-[14px] leading-snug">
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Spacer */}
            <div className="h-24 w-full bg-transparent"></div>
        </div>
    );
}
