"use client";
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const articles = [
    { title: "What is the TMT Test? Procedure & Risks", category: "Heart", image: "https://images.apollo247.in/pd-cms/cms/2024-07/intenza-fitness-X3huptykYH0-unsplash%20(1)%20(1).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max" },
    { title: "Top 10 Vitamin B12 Rich Foods for Vegetarians", category: "Nutrition", image: "https://images.apollo247.in/pd-cms/cms/2023-10/Blog%20B12.png?tr=q-80,f-webp,w-200,dpr-2,c-at_max" },
    { title: "First Aid for Heart Attack: Immediate Steps", category: "Emergency", image: "https://images.apollo247.in/pd-cms/cms/2023-07/Shutterstock_695929858.jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max" }
];

const cities = ["Delhi", "Hyderabad", "Kolkata", "Chennai", "Bengaluru", "Mumbai", "Pune", "Noida"];

export default function MobileCity() {
    return (
        <div className="bg-[#f8f9fa] py-8 ">

            {/* Health Articles */}
            <div className="px-4 mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-[16px] font-bold text-[#30363c]">Health Articles</h2>
                    <span className="text-[11px] font-bold text-[#a7358d] bg-white border border-gray-100 px-3 py-1 rounded-full shadow-sm">View All</span>
                </div>

                <div className="flex overflow-x-auto gap-3 scrollbar-hide snap-x snap-mandatory pb-2 -mx-4 px-4">
                    {articles.map((article, i) => (
                        <div key={i} className="min-w-[220px] snap-center bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
                            <div className="h-[120px] w-full relative overflow-hidden">
                                <img src={article.image} alt="Article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-[9px] font-bold px-2 py-0.5 rounded-md text-[#a7358d]">{article.category}</span>
                            </div>
                            <div className="p-3">
                                <h3 className="text-[13px] font-bold text-gray-800 leading-snug line-clamp-2">{article.title}</h3>
                                <p className="text-[10px] text-gray-500 mt-2">Read More</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top Cities */}
            <div className="px-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <h2 className="text-[16px] font-bold text-[#30363c] mb-4">Find Doctors by City</h2>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                        {cities.map((city, i) => (
                            <div key={i} className="flex justify-between items-center py-2.5 border-b border-gray-50 last:border-0 group cursor-pointer">
                                <span className="text-[13px] text-gray-600 font-medium group-hover:text-[#a7358d] transition-colors">{city}</span>
                                <FaChevronRight className="text-gray-300 text-[10px] group-hover:text-[#a7358d]" />
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-5 py-2.5 text-[#a7358d] font-bold text-[12px] bg-[#fcebf5] rounded-xl hover:bg-[#a7358d] hover:text-white transition-colors">View All Cities</button>
                </div>
            </div>
        </div>
    );
}
