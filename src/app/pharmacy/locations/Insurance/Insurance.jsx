"use client";
import React from 'react';

// --- Insurance Data ---
const insuranceBrands = [
    "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/624e831a78f70e1acdeee09e_10-IFFCO-Tokio-General-Insurance.jpg",
    "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/624e8319543657bc83d5f13d_18-United-India-Insurance.jpg",
    "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/624e831a35d45051f2fca798_13-Liberty-General-Insurance.jpg",
    "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/624e831acf38534ea46d0bc8_09-Aditya-Birla-Health-Insurance.jpg",
    "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/624e831a78f70eebf7eee09d_16-The-New-India-Assurance.jpg",
    "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/624e831a78f70e1acdeee09e_10-IFFCO-Tokio-General-Insurance.jpg"
];

// Duplicate for marquee effect
const marqueBrands = [...insuranceBrands, ...insuranceBrands, ...insuranceBrands, ...insuranceBrands];


// --- Our Experts Data ---
const expertsBlogs = [
    {
        title: "Teething in Babies: Symptoms and Remedies",
        date: "November 14, 2025",
        author: "Dr. Dhilip Kumar S",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6916e0ce31561c4a45eb4eb7_Teething%20in%20Babies%20Symptoms%20and%20Remedies.jpg",
        link: "#"
    },
    {
        title: "The Science behind Irregular Periods and Egg Maturity",
        date: "September 8, 2025",
        author: "Dr. Aravind Ravichandran",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/67fa5db9f9207244e2cfb0b0_me.jpg",
        link: "#"
    },
    {
        title: "Can You Get Pregnant With High AMH? Fertility Facts You Need to Know",
        date: "September 8, 2025",
        author: "Dr. Aravind Ravichandran",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/68beb823430181cc4d9b0e49_Can%20You%20Get%20Pregnant%20With%20High%20AMH%20Fertility%20Facts%20You%20Need%20to%20Know.jpg",
        link: "#"
    },
    {
        title: "The Importance of Regular Visits to a Gynaecologist Hospital in Chennai",
        date: "August 30, 2025",
        author: "Dr. Sathiya S",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/68a801bd378265f1bf376f31_Gynecologist%20in%20noida.jpg",
        link: "#"
    }
];


export default function Insurance() {
    return (
        <div className="w-full bg-[#f4f6f8] pb-16 overflow-hidden">

            {/* Global Styles for Animations */}
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: scroll 40s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="w-full max-w-[1550px] mx-auto px-4 lg:px-10">

                {/* --- Section 1: Insurance Brands --- */}
                <div className="mb-20">
                    <div className="text-center mb-12 pt-10">
                        <h2 className="text-lg md:text-xl text-[#d14da1] mb-2 font-medium">Empanelled Brands & TPAs of</h2>
                        <h3 className="text-3xl md:text-4xl font-bold" style={{ color: '#a7358d' }}>Insurance</h3>
                    </div>

                    <div className="relative w-full">
                        {/* Gradient Fade Effects */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f4f6f8] to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f4f6f8] to-transparent z-10 pointer-events-none"></div>

                        <div className="overflow-hidden py-4">
                            <div className="flex gap-8 animate-marquee w-fit">
                                {marqueBrands.map((logo, index) => (
                                    <div
                                        key={index}
                                        className="w-68 h-40 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-4 shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-md"
                                    >
                                        <img
                                            src={logo}
                                            alt="Insurance Brand"
                                            className="w-full h-full object-contain transition-all duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                {/* --- Section 2: Our Experts --- */}
                <div className="pb-10">
                    <div className="text-center mb-12">
                        <h2 className="text-lg md:text-xl text-[#d14da1] mb-2 font-medium">Insights from</h2>
                        <h3 className="text-3xl md:text-4xl font-bold" style={{ color: '#a7358d' }}>Our Experts</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {expertsBlogs.map((blog, index) => (
                            <div key={index} className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-[0_10px_30px_rgba(167,53,141,0.1)] transition-all duration-300 border border-gray-100 flex flex-col group h-full hover:border-[#a7358d]/20 hover:-translate-y-1">
                                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 relative bg-gray-50">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                                </div>

                                <div className="px-2 flex flex-col flex-1">
                                    <div className="flex justify-between items-center text-[10px] text-gray-400 mb-2.5 font-medium tracking-wide">
                                        <div className="flex items-center gap-1.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#a7358d]">
                                                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5 .75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5 .75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5 .75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5 .75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5 .75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5 .75.75 0 0 0 0 1.5Z" />
                                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                            </svg>
                                            {blog.date}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#a7358d]">
                                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                            </svg>
                                            <span className="truncate max-w-[80px]">{blog.author.split(' ')[0]} {blog.author.split(' ')[1]}</span>
                                        </div>
                                    </div>

                                    <h4 className="text-[#002f5b] font-bold text-[15px] leading-snug mb-4 group-hover:text-[#a7358d] transition-colors line-clamp-2">
                                        {blog.title}
                                    </h4>

                                    <div className="mt-auto pt-4 border-t border-dashed border-gray-100">
                                        <a href={blog.link} className="inline-flex items-center gap-1.5 text-[12px] font-bold text-gray-500 hover:text-[#a7358d] transition-colors group/link">
                                            Read More
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 transition-transform group-hover/link:translate-x-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <button className="px-10 py-3 rounded-full border border-[#a7358d] text-[#a7358d] text-sm font-bold hover:bg-[#a7358d] hover:text-white transition-all shadow-sm hover:shadow-md">
                            View all blogs
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
