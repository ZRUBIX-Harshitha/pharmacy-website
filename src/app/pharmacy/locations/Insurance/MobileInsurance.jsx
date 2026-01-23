"use client";
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const brands = [
    "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/624e831a78f70e1acdeee09e_10-IFFCO-Tokio-General-Insurance.jpg",
    "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/624e8319543657bc83d5f13d_18-United-India-Insurance.jpg",
    "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/624e831a35d45051f2fca798_13-Liberty-General-Insurance.jpg",
    "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/624e831acf38534ea46d0bc8_09-Aditya-Birla-Health-Insurance.jpg",
    "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/624e831a78f70eebf7eee09d_16-The-New-India-Assurance.jpg",
];

const expertsBlogs = [
    {
        title: "Teething in Babies: Symptoms and Remedies",
        author: "Dr. Dhilip Kumar",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6916e0ce31561c4a45eb4eb7_Teething%20in%20Babies%20Symptoms%20and%20Remedies.jpg",
    },
    {
        title: "The Science behind Irregular Periods",
        author: "Dr. Aravind",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/67fa5db9f9207244e2cfb0b0_me.jpg",
    },
    {
        title: "Can You Get Pregnant With High AMH?",
        author: "Dr. Aravind",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/68beb823430181cc4d9b0e49_Can%20You%20Get%20Pregnant%20With%20High%20AMH%20Fertility%20Facts%20You%20Need%20to%20Know.jpg",
    }
];

export default function MobileInsurance() {
    return (
        <div className="w-full bg-white py-8 border-t border-gray-100">
            {/* Styling for scrolling animation */}
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: scroll 20s linear infinite;
                }
            `}</style>


            {/* Insurance Partners */}
            <div className="mb-10 overflow-hidden">
                <div className="text-center mb-6">
                    <p className="text-[#a7358d] text-xs font-bold uppercase tracking-wider mb-1">Empanelled Brands</p>
                    <h2 className="text-lg font-black text-gray-900">Insurance Partners</h2>
                </div>

                <div className="relative w-full">
                    {/* Horizontal Scroller */}
                    <div className="flex gap-4 animate-marquee w-fit px-4">
                        {[...brands, ...brands, ...brands].map((logo, idx) => (
                            <div key={idx} className="w-[120px] h-[60px] bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-2 shrink-0">
                                <img src={logo} alt="Brand" className="max-w-full max-h-full object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Experts Section */}
            <div className="bg-[#f8f9fa] py-8 px-5">
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <p className="text-[#a7358d] text-xs font-bold uppercase tracking-wider mb-1">Health Insights</p>
                        <h2 className="text-lg font-black text-gray-900">Expert Blogs</h2>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400">
                        <FaChevronRight className="text-xs" />
                    </button>
                </div>

                <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide -mx-5 px-5">
                    {expertsBlogs.map((blog, idx) => (
                        <div key={idx} className="min-w-[260px] bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                            <div className="w-full aspect-video rounded-lg overflow-hidden mb-3 bg-gray-100">
                                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-bold text-gray-800 text-[13px] leading-snug line-clamp-2 mb-2 min-h-[40px]">
                                {blog.title}
                            </h3>
                            <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-[#fcebf5] flex items-center justify-center text-[#a7358d] text-[10px] font-bold">Dr</span>
                                <span className="text-[11px] text-gray-500 font-medium">{blog.author}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
