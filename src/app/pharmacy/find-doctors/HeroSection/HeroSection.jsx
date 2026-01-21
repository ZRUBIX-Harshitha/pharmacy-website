"use client";
import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <div className="w-full bg-[#f4f6f8] pt-4 pb-10">
            <div className="w-full max-w-[1550px] mx-auto px-4 lg:px-10">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <Link href="/" className="hover:text-[#a7358d] transition-colors">Home</Link>
                    <span className="text-gray-400">›</span>
                    <span className="text-[#025b6a] font-medium">Find Doctors</span>
                </div>

                {/* Banner */}
                <div className="w-full rounded-[30px] overflow-hidden">
                    <img
                        src="https://images.apollo247.in/images/consult-web/consult-home/contentful/doc-banner-desktop-new.png?tr=q-80,f-webp,w-1300,dpr-2,c-at_max"
                        alt="Doctor Consultation"
                        className="w-full h-auto object-cover"
                    />
                </div>

            </div>
        </div>
    );
}
