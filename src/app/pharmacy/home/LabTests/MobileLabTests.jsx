"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const labTests = [
    {
        title: "Full Body Checkups",
        image: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=360x0",
        bgColor: "bg-gradient-to-br from-[#fcebf5] to-[#f8d7e9]",
        link: "/lab-tests/full-body-checkup"
    },
    {
        title: "Vitamins",
        image: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1a18d8deac-Vitamins.png?dim=360x0",
        bgColor: "bg-gradient-to-br from-[#fff6d8] to-[#ffefb7]",
        link: "/lab-tests/vitamins"
    },
    {
        title: "Diabetes",
        image: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/1e927857c26-Diabetes.png?dim=360x0",
        bgColor: "bg-gradient-to-br from-[#e0f3ff] to-[#cbe9fe]",
        link: "/lab-tests/diabetes"
    },
    {
        title: "Women Care",
        image: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=360x0",
        bgColor: "bg-gradient-to-br from-[#ffeef6] to-[#ffdaeb]",
        link: "/lab-tests/women-care"
    },
    {
        title: "Hair & Skin Care",
        image: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/9696ef00b0a-lifestyle.png?dim=360x0",
        bgColor: "bg-gradient-to-br from-[#f0f0ff] to-[#e4e4ff]",
        link: "/lab-tests/hair-skin"
    },
    {
        title: "Thyroid",
        image: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=360x0",
        bgColor: "bg-gradient-to-br from-[#f6f2ff] to-[#ebe3ff]",
        link: "/lab-tests/thyroid"
    },
    {
        title: "Heart",
        image: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/520acd31898-heart.png?dim=360x0",
        bgColor: "bg-gradient-to-br from-[#fff0f0] to-[#ffdcd9]",
        link: "/lab-tests/heart"
    },
    {
        title: "Lifestyle",
        image: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/9696ef00b0a-lifestyle.png?dim=360x0",
        bgColor: "bg-gradient-to-br from-[#f4f8ff] to-[#e1edff]",
        link: "/lab-tests/lifestyle"
    }

];

export default function MobileLabTests() {
    return (
        <div className="py-6 px-4 font-sans border-b border-gray-100 bg-white">
            <div className="flex flex-col mb-4">
                <h2 className="text-lg font-bold text-gray-800 leading-tight mb-2">Lab Tests by Health Concern</h2>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Powered by</span>
                    <Image
                        src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0"
                        alt="Thyrocare"
                        width={80}
                        height={24}
                        className="h-5 w-auto object-contain"
                        unoptimized
                    />
                </div>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide -mx-4 px-4 no-scrollbar mb-6">
                {labTests.map((item, index) => (
                    <Link key={index} href={item.link} className="flex-shrink-0 w-[140px] h-[160px] rounded-xl relative overflow-hidden cursor-pointer block">
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={140}
                                height={140}
                                className="object-contain w-full h-full"
                                unoptimized
                            />
                        </div>
                    </Link>
                ))}
            </div>

            {/* Order with Prescription Section - Simplified for Mobile */}
            <div className="w-full bg-[#ecf4ff] rounded-xl p-5 border border-blue-100">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center p-2 shadow-sm">
                        <Image
                            src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0"
                            alt="Prescription"
                            width={32}
                            height={32}
                            className="object-contain"
                            unoptimized
                        />
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-gray-800 leading-tight mb-1">Order with Prescription</h3>
                        <p className="text-xs text-gray-600">Upload prescription and get delivery</p>
                    </div>
                </div>

                <button className="w-full bg-[#a7358d] active:bg-[#8e2d78] text-white py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                    </svg>
                    Upload Now
                </button>
            </div>
        </div>
    );
}
