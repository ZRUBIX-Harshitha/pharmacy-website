"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const labTests = [
    {
        title: "Full Body Checkups",
        image: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=360x0",
        bgColor: "bg-gradient-to-br from-[#fcebf5] to-[#f8d7e9]", // Purple-ish
        link: "/lab-tests/full-body-checkup"
    },
    {
        title: "Vitamins",
        image: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1a18d8deac-Vitamins.png?dim=360x0",
        bgColor: "bg-gradient-to-br from-[#fff6d8] to-[#ffefb7]", // Yellowish
        link: "/lab-tests/vitamins"
    },
    {
        title: "Diabetes",
        image: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/1e927857c26-Diabetes.png?dim=360x0",
        bgColor: "bg-gradient-to-br from-[#e0f3ff] to-[#cbe9fe]", // Blueish
        link: "/lab-tests/diabetes"
    },
    {
        title: "Women Care",
        image: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=360x0", // Reusing Thyroid image or similar since specific one absent
        bgColor: "bg-gradient-to-br from-[#ffeef6] to-[#ffdaeb]", // Pinkish
        link: "/lab-tests/women-care"
    },
    {
        title: "Hair & Skin Care",
        image: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/9696ef00b0a-lifestyle.png?dim=360x0",
        bgColor: "bg-gradient-to-br from-[#f0f0ff] to-[#e4e4ff]", // Light Purple/Blue
        link: "/lab-tests/hair-skin"
    },
    {
        title: "Thyroid",
        image: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=360x0",
        bgColor: "bg-gradient-to-br from-[#f6f2ff] to-[#ebe3ff]", // Lavender
        link: "/lab-tests/thyroid"
    },
    {
        title: "Heart",
        image: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/520acd31898-heart.png?dim=360x0",
        bgColor: "bg-gradient-to-br from-[#fff0f0] to-[#ffdcd9]", // Light Red
        link: "/lab-tests/heart"
    },
    {
        title: "Lifestyle",
        image: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/9696ef00b0a-lifestyle.png?dim=360x0",
        bgColor: "bg-gradient-to-br from-[#f4f8ff] to-[#e1edff]", // Another blueish
        link: "/lab-tests/lifestyle"
    }

];

export default function LabTests() {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="py-8 px-6 lg:px-10 max-w-[1600px] mx-auto font-sans">
            <div className="flex items-end justify-between mb-6">
                <div>
                    <h2 className="text-[26px] font-bold text-gray-800 leading-tight mb-2">Lab Tests by Health Concern</h2>
                    <div className="flex items-center gap-2">
                        <span className="text-[14px] text-gray-500">Powered by</span>
                        <Image
                            src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0"
                            alt="Thyrocare"
                            width={100}
                            height={30}
                            className="h-6 w-auto object-contain"
                            unoptimized
                        />
                    </div>
                </div>
            </div>

            <div className="relative group/carousel">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth no-scrollbar"
                    style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                >
                    {labTests.map((item, index) => (
                        <Link key={index} href={item.link} className="flex-shrink-0 w-[200px] lg:w-[240px] h-[250px] lg:h-[280px] rounded-xl relative overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute inset-0 flex items-center justify-center p-2">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={240}
                                    height={240}
                                    className="object-contain w-full h-full"
                                    unoptimized
                                />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Navigation Button */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#30363c] hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 z-10 opacity-90 hover:opacity-100"
                    aria-label="Next categories"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
                {/* Order with Prescription Section */}
                <div className="mt-12 flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                    {/* Left Side */}
                    <div className="w-full lg:w-1/3 bg-[#ecf4ff] p-6 lg:p-8 flex items-start gap-4">
                        <div className="w-16 h-16 flex-shrink-0">
                            <Image
                                src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0"
                                alt="Prescription"
                                width={64}
                                height={64}
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                        <div>
                            <h3 className="text-[20px] font-bold text-gray-800 mb-2">Order with Prescription</h3>
                            <p className="text-[#4f585e] text-[14px] mb-6">Upload prescription and we will deliver your medicines</p>
                            <button className="bg-[#a7358d] hover:bg-[#8e2d78] text-white px-6 py-2.5 rounded-md font-bold text-[15px] flex items-center gap-2 w-fit transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                                </svg>
                                Upload
                            </button>
                        </div>
                    </div>

                    {/* Right Side - How it works */}
                    <div className="w-full lg:w-2/3 p-6 lg:p-10">
                        <h4 className="text-[14px] text-gray-500 font-medium mb-6">How does this work?</h4>
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                            {/* Column 1 */}
                            <div className="flex flex-col gap-8 flex-1">
                                {/* Step 1 */}
                                <div className="flex gap-4">
                                    <span className="w-8 h-8 rounded-lg bg-[#ecf3ff] text-[#a7358d] font-bold flex items-center justify-center flex-shrink-0 text-[14px]">1</span>
                                    <div className="text-[14px] text-gray-700">Upload a photo of your prescription</div>
                                </div>
                                {/* Step 2 */}
                                <div className="flex gap-4">
                                    <span className="w-8 h-8 rounded-lg bg-[#ecf3ff] text-[#a7358d] font-bold flex items-center justify-center flex-shrink-0 text-[14px]">2</span>
                                    <div className="text-[14px] text-gray-700">Add delivery address and place the order</div>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="flex flex-col gap-8 flex-1">
                                {/* Step 3 */}
                                <div className="flex gap-4">
                                    <span className="w-8 h-8 rounded-lg bg-[#ecf3ff] text-[#a7358d] font-bold flex items-center justify-center flex-shrink-0 text-[14px]">3</span>
                                    <div className="text-[14px] text-gray-700">We will call you to confirm the medicines</div>
                                </div>
                                {/* Step 4 */}
                                <div className="flex gap-4">
                                    <span className="w-8 h-8 rounded-lg bg-[#ecf3ff] text-[#a7358d] font-bold flex items-center justify-center flex-shrink-0 text-[14px]">4</span>
                                    <div className="text-[14px] text-gray-700">Now, sit back! your medicines will get delivered at your doorstep</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
