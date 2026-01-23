"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const accordionData = [
    {
        title: "Top Tests We Cover",
        items: ["VDRL Test", "HbA1c Test", "ESR Test", "Liver Function Test", "Throid Profile", "CBC Test", "Lipid Profile"]
    },
    {
        title: "Popular Health Checkups",
        items: ["Full Body Checkup", "Diabetes Screening", "Heart Health Package", "Women's Wellness", "Senior Citizen Care"]
    },
    {
        title: "Top Medicines",
        items: ["Analgesics", "Antibiotics", "Antacids", "Vitamins & Supplements", "Anti-Allergics"]
    }
];

export default function MobileExplore() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="bg-[#f8f9fa] py-6 font-sans mb-20">
            {/* Header */}
            <div className="px-5 mb-6">
                <h2 className="text-[#30363c] text-[18px] font-bold leading-tight">Explore PharmEasy</h2>
                <div className="w-12 h-1 bg-[#a7358d] rounded-full mt-2"></div>
            </div>

            {/* Accordion Menu - Card Style */}
            <div className="px-4 flex flex-col gap-3">
                {accordionData.map((section, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-[#a7358d]/30 shadow-md shadow-[#a7358d]/5' : 'border-gray-100 shadow-sm'}`}
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            className="w-full flex items-center justify-between px-5 py-4 bg-white"
                        >
                            <span className={`text-[15px] font-bold transition-colors ${openIndex === index ? 'text-[#a7358d]' : 'text-gray-800'}`}>
                                {section.title}
                            </span>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#fcebf5] rotate-180' : 'bg-gray-50'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke={openIndex === index ? "#a7358d" : "#6b7280"} className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </button>

                        <div
                            className={`transition-[max-height,opacity] duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="px-5 pb-5 pt-0">
                                <div className="h-[1px] w-full bg-gray-50 mb-4"></div>
                                <div className="flex flex-wrap gap-2">
                                    {section.items.map((item, i) => (
                                        <Link
                                            key={i}
                                            href="#"
                                            className="text-[13px] font-medium text-gray-600 bg-gray-50/50 border border-gray-100 px-3.5 py-2 rounded-lg active:scale-95 transition-all hover:border-[#a7358d] hover:text-[#a7358d] hover:bg-[#fcebf5]"
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Trust Banner - Premium Violet Theme */}
            <div className="mx-4 mt-8">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#fdf4fa] via-white to-[#fcebf5] border border-[#fcebf5] p-5 shadow-sm">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#a7358d] flex items-center justify-center shadow-lg shadow-[#a7358d]/20 shrink-0 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-[15px] leading-tight mb-1.5">Medically Reviewed</h3>
                            <p className="text-[12px] text-gray-500 leading-relaxed">
                                Curated by expert doctors to ensure 100% correct information.
                            </p>
                            <span className="inline-block mt-2 text-[11px] font-bold text-[#a7358d] border-b border-[#a7358d] border-dashed cursor-pointer">Know More</span>
                        </div>
                    </div>

                    {/* Decorative blurred blob */}
                    <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-[#a7358d] opacity-10 rounded-full blur-xl"></div>
                </div>
            </div>
        </div>
    );
}
