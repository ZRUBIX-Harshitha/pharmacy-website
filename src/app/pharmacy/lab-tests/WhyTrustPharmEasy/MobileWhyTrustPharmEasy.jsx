"use client";
import React from 'react';
import Image from 'next/image';

export default function MobileWhyTrustPharmEasy() {
    return (
        <div className="w-full bg-[#fcebf5] py-8 px-4 -mt-10 font-sans text-center">
            <h2 className="text-[#30363c] text-xl font-bold mb-2">Why trust PharmEasy?</h2>
            <p className="text-[#a7358d] text-[10px] font-bold tracking-widest uppercase mb-6">India's Trusted Healthcare Platform</p>

            <div className="grid grid-cols-3 gap-2 mb-6">
                {[
                    { t: "100% NABL", s: "Certified Labs" },
                    { t: "80L+", s: "Happy Users" },
                    { t: "27 Yrs+", s: "Expertise" }
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <p className="text-[#30363c] font-bold text-sm">{stat.t}</p>
                        <p className="text-gray-500 text-[9px]">{stat.s}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
