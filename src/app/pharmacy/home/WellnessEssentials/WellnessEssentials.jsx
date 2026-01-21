"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const essentials = [
    {
        title: "Wellwoman 70+ Tablets Support Physical And...",
        mrp: "₹831.00",
        price: "₹673.11",
        discount: "19%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/N97601/wellwoman-70-tablets-support-physical-and-mental-performance-60-nos-6.1-1742880576.jpg?dim=1440x0",
        link: "/product/wellwoman"
    },
    {
        title: "Shelcal 500mg Strip Of 15 Tablets",
        mrp: "₹144.65",
        price: "₹115.95",
        discount: "22%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/159115/shelcal-500mg-strip-of-15-tablets-6.1-1766498211.jpg?dim=1440x0",
        link: "/product/shelcal"
    },
    {
        title: "Softovac Bowel Regulator For Constipation Powder...",
        mrp: "₹225.00",
        price: "₹159.75",
        discount: "29%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I11042/softovac-bowel-regulator-for-constipation-powder-100-gm-6.1-1737113414.jpg?dim=1440x0",
        link: "/product/softovac"
    },
    {
        title: "Volini Pain Relief | Gel | 75 Gm",
        mrp: "₹272.00",
        price: "₹209.44",
        discount: "23%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-6.1-1712726723.jpg?dim=1440x0",
        link: "/product/volini"
    },
    {
        title: "Aptivate Tasty Pineapple Appetite Stimulating...",
        mrp: "₹174.00",
        price: "₹123.54",
        discount: "29%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/013240/aptivate-tasty-pineapple-appetite-stimulating-syrup-bottle-of-175-ml-2-1729346827.jpg?dim=1440x0",
        link: "/product/aptivate"
    },
    {
        title: "Scalpe Plus Expert Anti-Dandruff Shampoo With...",
        mrp: "₹330.94",
        price: "₹244.90",
        discount: "26%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/270382/scalpe-plus-expert-anti-dandruff-shampoo-bottle-of-75ml-2-1737968403.jpg?dim=1440x0",
        link: "/product/scalpe-plus"
    },
    {
        title: "Enterogermina Suspension 10 x 5 ml",
        mrp: "₹550.00",
        price: "₹450.00",
        discount: "18%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/H13055/enterogermina-suspension-10-x-5-ml-6.01-1725351208.jpg?dim=1440x0",
        link: "/product/enterogermina"
    },
    {
        title: "Diataal Cal Calcium For Men Women...",
        mrp: "₹350.00",
        price: "₹290.00",
        discount: "17%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/M87057/diataal-cal-calcium-for-men-women-clinically-tested-400-iu-vit-d3-30-tablets-6.1-1757394859.jpg?dim=1440x0",
        link: "/product/diataal"
    },
    {
        title: "Cetaphil Gentle Skin Cleanser 125ml",
        mrp: "₹333.00",
        price: "₹299.00",
        discount: "10%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I00623/cetaphil-gentle-skin-cleanser-125ml-2-1671740876.jpg?dim=1440x0",
        link: "/product/cetaphil"
    },
    {
        title: "Nasoclear 0.65% Nasal Spray 20ml",
        mrp: "₹65.00",
        price: "₹55.00",
        discount: "15%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/119870/nasoclear-065-bottle-of-20ml-nasal-spray-6.01-1749197546.jpg?dim=1440x0",
        link: "/product/nasoclear"
    }
];

export default function WellnessEssentials() {
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
            <h2 className="text-[26px] font-bold text-gray-800 leading-tight mb-1">Wellness Essentials of the Week</h2>
            <p className="text-[#4f585e] text-[16px] mb-6">Super charge your immunity with us</p>

            <div className="relative group/carousel">
                <div
                    ref={scrollContainerRef}
                    className="grid grid-rows-2 grid-flow-col gap-x-6 gap-y-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth no-scrollbar"
                    style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                >
                    {essentials.map((item, index) => (
                        <Link key={index} href={item.link} className="w-[320px] lg:w-[360px] flex items-start gap-4 p-2 group cursor-pointer hover:bg-white transition-colors">
                            {/* Image Container */}
                            <div className="flex-shrink-0 w-[80px] h-[80px] border border-gray-200 rounded-lg flex items-center justify-center p-2 bg-white group-hover:border-gray-400 transition-colors">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={70}
                                    height={70}
                                    className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                    unoptimized
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1">
                                <h3 className="text-gray-700 font-medium text-[16px] mb-1 leading-snug line-clamp-2 group-hover:text-[#a7358d] transition-colors">
                                    {item.title}
                                </h3>

                                <div className="text-[13px] text-gray-500 mb-[2px]">
                                    MRP <span className="line-through">{item.mrp}</span>
                                </div>

                                <div className="flex gap-2 items-center text-[16px]">
                                    <span className="font-bold text-gray-800">{item.price}</span>
                                    <span className="text-[#f47779] font-bold text-[14px]">({item.discount})</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Navigation Button */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#30363c] hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 z-10 opacity-90 hover:opacity-100"
                    aria-label="Next wellness essentials"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
