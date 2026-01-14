"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
    { title: "Must haves", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png?f=png?dim=360x0" },
    { title: "Winter store", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b862c2d54aa633c19765eb6cf2bd6660.png?f=png?dim=360x0" },
    { title: "Vitamin store", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/71ab5b001d2c3ef699d6661a1c583998.jpg?f=jpg?dim=360x0" },
    { title: "Sexual wellness", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/23bec394cf943a83a0e946ded843a2a9.png?f=png?dim=360x0" },
    { title: "Personal care", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6cbaa600864b3bd491d96834bfb0547e.png?f=png?dim=360x0" },
    { title: "Health concerns", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/5a4fa9318fbb3b7daa2cfa6d293bea87.png?f=png?dim=360x0" },
    { title: "Health food and drinks", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6517ad5aaeca38e69936298d3e677a3a.png?f=png?dim=360x0" },
    { title: "Beauty", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b3b7e50dd83a31e8b86dbbf1b5c3aab2.jpg?f=jpg?dim=360x0" },
    { title: "Skin Care", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b17f1b5866723c1e9dc37970b7f43324.png?f=png?dim=360x0" },
    { title: "Home Care", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/27db727f1d5c3fd9b45b124ece3d7876.png?f=png?dim=360x0" },
    // Reusing some images/placeholders for the rest of the list provided (18 total requested, mapping unique ones first)
    { title: "Ayurvedic Care", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b3b7e50dd83a31e8b86dbbf1b5c3aab2.jpg?f=jpg?dim=360x0" },
    { title: "Orthopaedics", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b17f1b5866723c1e9dc37970b7f43324.png?f=png?dim=360x0" },
];

export default function FeaturedBrands() {
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
            <h2 className="text-[26px] font-bold text-gray-800 leading-tight mb-6">Featured Brands</h2>

            <div className="relative group/carousel">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth no-scrollbar"
                    style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                >
                    {categories.map((item, index) => (
                        <Link key={index} href={`/category/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex-shrink-0 group cursor-pointer">
                            <div className="w-[160px] lg:w-[200px] h-[170px] lg:h-[200px] border border-gray-200 rounded-xl flex items-center justify-center p-4 bg-white hover:shadow-lg hover:border-gray-300 transition-all duration-300 mb-3">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={150}
                                    height={150}
                                    className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                    unoptimized
                                />
                            </div>
                            <h3 className="text-gray-700 text-[16px] font-medium text-center leading-snug group-hover:text-gray-900 group-hover:font-bold transition-colors max-w-[180px] mx-auto">
                                {item.title}
                            </h3>
                        </Link>
                    ))}
                </div>

                {/* Navigation Button */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute -right-4 top-[40%] -translate-y-1/2 w-12 h-12 bg-[#30363c] hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 z-10 opacity-90 hover:opacity-100"
                    aria-label="Next categories"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
