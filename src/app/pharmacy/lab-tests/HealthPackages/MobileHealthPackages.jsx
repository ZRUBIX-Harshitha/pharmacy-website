"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const packages = [
    { title: "Basic Health Checkup", price: "699", originalPrice: "2249", discount: "69%", tests: "59 Tests" },
    { title: "Comprehensive Full Body Checkup", price: "1149", originalPrice: "4599", discount: "75%", tests: "85 Tests" },
    { title: "Diabetes Care Package", price: "649", originalPrice: "1399", discount: "54%", tests: "42 Tests" },
];

export default function MobileHealthPackages() {
    return (
        <div className="w-full bg-[#f2f5f9] py-8 font-sans">
            <div className="px-4 mb-4 flex justify-between items-end">
                <div>
                    <h2 className="text-gray-900 text-[16px] font-bold leading-tight">Popular Packages</h2>
                    <p className="text-gray-500 text-[11px] mt-0.5">Curated wellness checkups</p>
                </div>
                <Link href="/lab-tests/packages" className="text-[#a7358d] font-bold text-[12px] hover:bg-white hover:shadow-sm px-3 py-1 rounded-full transition-all">View All</Link>
            </div>

            <div className="flex overflow-x-auto gap-4 px-4 pb-4 scrollbar-hide no-scrollbar snap-x snap-mandatory">
                {packages.map((pkg, index) => (
                    <div key={index} className="min-w-[280px] snap-center bg-white rounded-xl p-5 flex flex-col justify-between shadow-sm border border-gray-100">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-bold text-white bg-[#a7358d] px-2 py-0.5 rounded-md uppercase tracking-wide">Popular</span>
                                <span className="text-[11px] font-bold text-gray-400">{pkg.tests}</span>
                            </div>
                            <h3 className="text-gray-800 font-bold text-[16px] leading-snug line-clamp-2 mb-4 h-[44px]">{pkg.title}</h3>
                        </div>

                        <div className="flex items-center justify-between border-t border-gray-50 pt-3 mt-2">
                            <div>
                                <p className="text-xs text-green-600 font-bold mb-0.5">{pkg.discount} OFF</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-gray-900 font-black text-lg">₹{pkg.price}</span>
                                    <span className="text-gray-400 text-xs line-through">₹{pkg.originalPrice}</span>
                                </div>
                            </div>
                            <button className="bg-white border border-[#a7358d] text-[#a7358d] rounded-lg px-4 py-1.5 text-xs font-bold uppercase hover:bg-[#a7358d] hover:text-white transition-colors">
                                Add
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
