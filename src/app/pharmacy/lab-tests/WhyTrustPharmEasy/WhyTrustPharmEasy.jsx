"use client";
import React from 'react';
import Image from 'next/image';

const trustStats = [
    {
        title: "100% NABL",
        subtitle: "Certified Labs"
    },
    {
        title: "80 LAKHS+",
        subtitle: "Happy Users"
    },
    {
        title: "27 YEARS+",
        subtitle: "Lab Expertise"
    }
];

const cards = [
    {
        icon: "https://assets.pharmeasy.in/web-assets/images/diagnostics/icon_whyTrustPeCard_1.png?dim=96x96&q=75",
        title: "700+",
        subtitle: "100% NABL & ISO Certified Labs"
    },
    {
        icon: "https://assets.pharmeasy.in/web-assets/images/diagnostics/icon_whyTrustPeCard_2.png?dim=96x96&q=75",
        title: "70,000+",
        subtitle: "Test processed everyday"
    },
    {
        icon: "https://assets.pharmeasy.in/web-assets/images/diagnostics/icon_whyTrustPeCard_3.png?dim=96x96&q=75",
        title: "70 Million",
        subtitle: "Total customer served"
    },
    {
        icon: "https://assets.pharmeasy.in/web-assets/images/diagnostics/icon_whyTrustPeCard_4.png?dim=96x96&q=75",
        title: "700",
        subtitle: "Collection Center"
    },
    {
        icon: "https://assets.pharmeasy.in/web-assets/images/diagnostics/icon_whyTrustPeCard_5.png?dim=96x96&q=75",
        title: "7000",
        subtitle: "Quality & trained Phlebotomist"
    }
];

export default function WhyTrustPharmEasy() {
    return (
        <div className="w-full bg-[#fcebf5] py-12 font-sans">
            <div className="max-w-[1550px] mx-auto px-5">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-[#30363c] text-3xl font-bold mb-3">
                        Why trust PharmEasy?
                    </h2>
                    <h3 className="text-[#a7358d] text-sm font-bold tracking-widest uppercase mb-8">
                        # ONE OF INDIA'S MOST TRUSTED HEALTHCARE PLATFORM
                    </h3>

                    {/* Top Stats with Laurels */}
                    <div className="flex justify-center gap-12 md:gap-24 flex-wrap">
                        {trustStats.map((stat, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <Image
                                    src="https://assets.pharmeasy.in/web-assets/images/diagnostics/image_leftSideWhyTrustPe_green.png?dim=48x48&q=75"
                                    alt=""
                                    width={20}
                                    height={40}
                                    className="object-contain"
                                    unoptimized
                                />
                                <div className="text-center">
                                    <p className="text-[#30363c] font-bold text-lg leading-tight">{stat.title}</p>
                                    <p className="text-[#4f5869] text-sm">{stat.subtitle}</p>
                                </div>
                                <Image
                                    src="https://assets.pharmeasy.in/web-assets/images/diagnostics/image_leftSideWhyTrustPe_green.png?dim=48x48&q=75"
                                    alt=""
                                    width={20}
                                    height={40}
                                    className="object-contain scale-x-[-1]" // Flipping for the right side
                                    unoptimized
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cards Section */}
                <div className=" rounded-2xl p-8 md:p-12">
                    <div className="flex flex-wrap justify-between gap-6">
                        {cards.map((card, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 flex flex-col justify-start items-start w-full md:w-[18%] min-w-[200px] shadow-sm">
                                <div className="mb-4 w-12 h-12 relative">
                                    <Image
                                        src={card.icon}
                                        alt={card.title}
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>
                                <h4 className="text-[#30363c] font-bold text-lg mb-1">{card.title}</h4>
                                <p className="text-[#4f5869] text-sm leading-tight">{card.subtitle}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Text */}
                    <div className="flex items-center justify-center gap-2 mt-8 text-[#a7358d] font-bold text-base">
                        <div className="w-6 h-6 relative">
                            <Image
                                src="https://assets.pharmeasy.in/web-assets/images/diagnostics/icon_mainWhyTrustDweb_green.png?dim=96x96&q=75"
                                alt=""
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                        <p>Making lab test bookings affordable, high-quality, and easily accessible across India</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
