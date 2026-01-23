"use client";
import React from 'react';
import Image from 'next/image';

export default function MobileHeroSection() {
    return (
        <div className="w-full bg-[#f4f6f8] pb-6 font-sans">
            {/* Purple Banner */}
            <div className="bg-[#a7358d] px-5 pt-8 pb-16 relative overflow-hidden">
                <div className="relative z-10 text-white">
                    <div className="flex items-center gap-1 mb-2">
                        <span className="text-3xl font-bold tracking-tight">PharmEasy</span>
                        <div className="relative w-6 h-6 mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fec84e" className="w-full h-full">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-[#fec84e] text-3xl font-bold font-serif italic">Plus</span>
                    </div>
                    <p className="text-sm font-medium opacity-90 mb-6">Reduce your medical expenses with Plus.</p>

                    <div className="bg-white/10 rounded-lg p-3 inline-block backdrop-blur-sm border border-white/20">
                        <p className="text-xs font-semibold">Save extra 5% on every order</p>
                    </div>
                </div>
                {/* Decorative Circle */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
            </div>

            {/* Benefits Overlay Card */}
            <div className="px-4 -mt-10 relative z-20">
                <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-100">
                    <h3 className="text-gray-900 font-bold text-lg mb-4">Membership Benefits</h3>

                    <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                            <img src="https://club-cdn.pharmeasy.in/production/ui/med_cb.svg?dim=1440x1440&q=75" className="w-10 h-10 object-contain" alt="Icon" />
                            <div>
                                <h4 className="text-sm font-bold text-gray-800">5% Extra Cashback</h4>
                                <p className="text-xs text-gray-500 mt-0.5">Applicable on all medicine orders</p>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-gray-50"></div>
                        <div className="flex gap-4 items-start">
                            <img src="https://d22gqcf6g8w6wb.cloudfront.net/ui/delivery.svg?dim=1440x1440&q=75" className="w-10 h-10 object-contain" alt="Icon" />
                            <div>
                                <h4 className="text-sm font-bold text-gray-800">Free Delivery</h4>
                                <p className="text-xs text-gray-500 mt-0.5">On orders above ₹199</p>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-gray-50"></div>
                        <div className="flex gap-4 items-start">
                            <img src="https://d22gqcf6g8w6wb.cloudfront.net/ui/diag_cb.svg?dim=1440x1440&q=75" className="w-10 h-10 object-contain" alt="Icon" />
                            <div>
                                <h4 className="text-sm font-bold text-gray-800">50% Cashback on Labs</h4>
                                <p className="text-xs text-gray-500 mt-0.5">On your first lab test</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
