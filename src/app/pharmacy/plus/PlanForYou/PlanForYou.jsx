"use client";
import React from "react";
import Image from "next/image";

export default function PlanForYou() {
    return (
        <div className="w-full bg-white py-12 px-4 font-sans">
            <div className="max-w-[1250px] mx-auto">
                <h2 className="text-[#4f585e] font-bold text-lg mb-6">Plan for you</h2>

                {/* Plan Selection Card */}
                <div className="border-[1.5px] border-[#a7358d] rounded-lg p-4 flex items-center justify-between mb-8 cursor-pointer bg-white relative">
                    <div className="flex items-center gap-4">
                        {/* Checkbox Icon */}
                        <div className="w-6 h-6 rounded-full bg-[#a7358d] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 011.04-.207z" clipRule="evenodd" />
                            </svg>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-[#a7358d] text-[10px] font-bold tracking-wider uppercase mb-0.5">BEST DEAL</span>
                            <span className="text-[#4f585e] font-bold text-lg">3 Months</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-[#8e9ca7] text-sm line-through font-medium">₹499</span>
                        <span className="text-[#a7358d] text-xl font-bold">₹99</span>
                    </div>
                </div>

                {/* Apply Coupon Section */}
                <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between mb-8 cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 relative">
                            <Image
                                src="https://assets.pharmeasy.in/web-assets/images/cartCoupon.svg?dim=64x64&q=75"
                                alt="Coupon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-[#4f585e] font-bold text-[15px]">Apply coupon</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#4f585e" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>

                <div className="h-[1px] bg-gray-100 w-full mb-6"></div>

                {/* Add to Cart Button */}
                <button className="w-full bg-[#a7358d] hover:bg-[#8e2d78] text-white font-bold text-lg py-3.5 rounded-lg transition-colors shadow-md">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
