"use client";
import React from 'react';
import Image from 'next/image';

export default function MobileTrustedPharmacy() {
    return (
        <div className="py-10 px-5 bg-gradient-to-br from-[#f0f4ff] via-white to-[#fdf2f8] relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#a7358d]/5 rounded-full blur-3xl translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl -translate-x-10 translate-y-10"></div>

            <div className="relative z-10 text-center">


                <h2 className="text-[22px] font-black text-gray-800 mb-2 tracking-tight">
                    India's Trusted Pharmacy
                </h2>
                <p className="text-gray-500 text-sm mb-8 max-w-xs mx-auto font-medium leading-relaxed">
                    Genuine medicines, timely delivery, and great savings!
                </p>

                <div className="flex justify-center gap-4">
                    <div className="bg-white rounded-xl p-4 flex-1 shadow-sm border border-gray-50">
                        <p className="text-2xl font-black text-[#a7358d]">50L+</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Happy Customers</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 flex-1 shadow-sm border border-gray-50">
                        <p className="text-2xl font-black text-[#a7358d]">20K+</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Pincodes Served</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
