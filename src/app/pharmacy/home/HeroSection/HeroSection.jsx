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

export default function HeroSection() {
    const scrollContainerRef = React.useRef(null);
    const bannerScrollRef = React.useRef(null);

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

    const scrollBanners = (direction) => {
        if (bannerScrollRef.current) {
            const { current } = bannerScrollRef;
            const scrollAmount = 500;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="w-full relative bg-[#f8fdfd] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-60" style={{ backgroundImage: "url('/hero-pattern-v2.ssvg')", backgroundSize: '60px 60px' }}></div>

            {/* Gradient Overlays for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#f0fcfc]/40 to-white/90 z-0"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d0f6f4] to-transparent opacity-40 blur-3xl z-0 pointer-events-none"></div>

            <div className="w-full relative z-10">
                <div className="pt-10 pb-16 px-6 lg:px-10 max-w-[1600px] mx-auto font-sans relative">

                    {/* Top Header Section */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <h1 className="text-[26px] font-bold text-gray-800 text-center ml-79 leading-tight">What are you looking for?</h1>

                        <div className="flex items-center gap-3 cursor-pointer text-gray-700 mr-79 mt-7 hover:text-gray-900 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                            <span className="text-[17px] font-medium text-gray-600">Order with prescription.</span>
                            <span className="text-[#a7358d] font-bold text-[21px] flex items-center gap-1 cursor-pointer hover:underline">
                                UPLOAD NOW
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative max-w-4xl mx-auto mb-14 shadow-[0_2px_15px_rgba(0,0,0,0.06)] rounded-full">
                        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search for Medicine"
                            className="w-full h-[60px] pl-14 pr-36 rounded-full border border-gray-100 focus:outline-none focus:border-[#a7358d] focus:ring-1 focus:ring-[#a7358d] text-[16px] placeholder:text-gray-400 font-normal transition-all"
                        />
                        <div className="absolute inset-y-1.5 right-1.5">
                            <button className="bg-[#a7358d] hover:bg-[#8e2d78] text-white px-10 h-[48px] rounded-full font-bold text-[15px] transition-colors shadow-sm">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Categories Carousel */}
                    <div className="relative group/carousel">
                        {/* Scroll Container */}
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-15 overflow-x-auto pb-4 scrollbar-hide scroll-smooth no-scrollbar"
                            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                        >
                            {categories.map((item, index) => (
                                <Link key={index} href={item.link} className="flex flex-col items-center min-w-[130px] lg:min-w-[145px] group cursor-pointer p-3 r transition-all duration-300">
                                    <div className="relative mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                                        <div className="w-[125px] lg:w-[150px] lg:h-[160px] aspect-[1.1] flex items-center justify-center p-2 border-b border-gray-100 transition-all">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={120}
                                                height={100}
                                                className="w-full h-auto object-contain"
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-700 font-medium text-[16px] text-center mb-1 leading-tight group-hover:font-bold group-hover:text-gray-900 transition-all">{item.title}</h3>
                                    {item.discount ? (
                                        <span className="text-[#f47779] text-[13px] font-bold">{item.discount}</span>
                                    ) : (
                                        <span className="h-5"></span>
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Navigation Button (Next) - Matches Image */}
                        <button
                            onClick={() => scroll('right')}
                            className="absolute -right-4 top-1/3 -translate-y-1/2 w-12 h-12 bg-[#30363c] hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 z-10 opacity-90 hover:opacity-100"
                            aria-label="Next categories"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    {/* Banners Carousel */}
                    <div className="relative group/banners w-full mt-4">
                        <div
                            ref={bannerScrollRef}
                            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth no-scrollbar"
                            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                        >
                            {banners.map((url, index) => (
                                <div key={index} className="flex-shrink-0 min-w-[700px] h-[290px] relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                                    <Image
                                        src={url}
                                        alt={`Banner ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="500px"
                                        unoptimized
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Banner Next Button */}
                        <button
                            onClick={() => scrollBanners('right')}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#30363c] hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 z-10 opacity-90 hover:opacity-100"
                            aria-label="Next banners"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

