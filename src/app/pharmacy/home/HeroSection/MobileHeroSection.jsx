"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
    {
        title: "Medicine",
        discount: "SAVE 24%",
        image: "https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0",
        link: "/medicines"
    },
    {
        title: "Lab Tests",
        discount: "UPTO 70% OFF",
        image: "https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0",
        link: "/lab-tests"
    },
    {
        title: "Doctor Consult",
        discount: "FROM ₹199",
        image: "https://assets.pharmeasy.in/web-assets/images/icon_doc_consult_tile.webp?dim=720x0",
        link: "/doctor-consult"
    },
    {
        title: "Branded Substitute",
        discount: "UPTO 50% OFF",
        image: "https://retention-images.pharmeasy.in/store_assets/tile/branded_09092025.png?dim=720x0",
        link: "/branded-substitute"
    },
    {
        title: "Healthcare",
        discount: "UPTO 60% OFF",
        image: "https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0",
        link: "/healthcare"
    },
    {
        title: "Health Blogs",
        discount: "",
        image: "https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=720x0",
        link: "/health-blogs"
    },
    {
        title: "PLUS",
        discount: "SAVE 5% EXTRA",
        image: "https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=720x0",
        link: "/plus"
    },
    {
        title: "Offers",
        discount: "",
        image: "https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=720x0",
        link: "/offers"
    },
    {
        title: "Value Store",
        discount: "UPTO 50% OFF",
        image: "https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0",
        link: "/value-store"
    }
];

const banners = [
    "https://cdn01.pharmeasy.in/dam/banner/banner/0d33436df01-Wegovy_PrimaryBanner.jpg",
    "https://cdn01.pharmeasy.in/dam/banner/banner/1f0926b08e9-Banner_BAU_BOGO.png",
    "https://cdn01.pharmeasy.in/dam/banner/banner/a7cd06ec70a-HimalayaKofletCitrus.jpg",
    "https://cdn01.pharmeasy.in/dam/banner/banner/de4d23a6121-HimalayaShilajit_PB.jpg",
    "https://cdn01.pharmeasy.in/dam/banner/banner/ba969c1e973-DocConsult_HPBanner_ABC.jpg",
    "https://cdn01.pharmeasy.in/dam/banner/banner/60c9facf368-CCHP.jpg",
    "https://cdn01.pharmeasy.in/dam/banner/banner/531d9e9f320-SmartScale_HPBanner.jpg",
    "https://cdn01.pharmeasy.in/dam/banner/banner/375114c96c4-WinnerStore.jpg"
];

export default function MobileHeroSection() {
    return (
        <div className="w-full relative bg-[#f8fdfd] overflow-hidden pb-6">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-60" style={{ backgroundImage: "url('/hero-pattern-v2.ssvg')", backgroundSize: '40px 40px' }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#f0fcfc]/40 to-white/90 z-0"></div>

            <div className="w-full relative z-10 pt-4 px-4 font-sans">

                {/* Top Text & Upload Presc */}
                <div className="mb-6">
                    <h1 className="text-xl font-bold text-gray-800 mb-3 leading-tight">What are you looking for?</h1>
                    <div className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                            <span className="text-sm font-medium text-gray-600">Order with prescription.</span>
                        </div>
                        <span className="text-[#a7358d] font-bold text-sm flex items-center gap-1">
                            UPLOAD NOW
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Categories Grid (2 rows horizontal scroll or just grid?) 
                    The desktop has a single row carousel. Mobile usually does a grid or horizontal scroll.
                    Let's do horizontal scroll for consistency with desktop behavior but touch friendly.
                */}
                <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide -mx-4 px-4 no-scrollbar">
                    {categories.map((item, index) => (
                        <Link key={index} href={item.link} className="flex flex-col items-center min-w-[100px] shrink-0">
                            <div className="w-[90px] h-[90px] bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-2 mb-2">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={80}
                                    height={80}
                                    className="w-full h-full object-contain"
                                    unoptimized
                                />
                            </div>
                            <h3 className="text-gray-800 font-medium text-xs text-center leading-tight max-w-[90px]">{item.title}</h3>
                            {item.discount && (
                                <span className="text-[#f47779] text-[10px] font-bold mt-0.5">{item.discount}</span>
                            )}
                        </Link>
                    ))}
                </div>

                {/* Banners Carousel */}
                <div className="mt-4 overflow-x-auto flex gap-4 scrollbar-hide -mx-4 px-4 pb-2 no-scrollbar snap-x snap-mandatory">
                    {banners.map((url, index) => (
                        <div key={index} className="flex-shrink-0 w-[90%] md:w-[60%] h-[160px] relative rounded-xl overflow-hidden shadow-sm snap-center">
                            <Image
                                src={url}
                                alt={`Banner ${index + 1}`}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
