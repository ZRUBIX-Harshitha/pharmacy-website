"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function MobileHeroSection() {
    return (
        <div className="bg-white pt-4 pb-6 px-4">
            <div className="flex items-center gap-3 mb-6">
                <Link href="/" className="p-2 -ml-2 text-gray-700 hover:bg-gray-50 rounded-full transition-colors">
                    <FaArrowLeft className='text-sm' />
                </Link>
                <div className="flex flex-col">
                    <h1 className="text-lg font-bold text-[#30363c] leading-none">Find Doctors</h1>
                    <span className="text-[10px] text-gray-500 font-medium mt-1">Book appointments instantly</span>
                </div>
            </div>

            <div className="w-full h-[60px] rounded-2xl overflow-hidden shadow-lg shadow-[#a7358d]/10 relative">
                <Image
                    src="https://images.apollo247.in/images/consult-web/consult-home/contentful/doc-banner-desktop-new.png?tr=q-80,f-webp,w-1300,dpr-2,c-at_max"
                    alt="Consult Online"
                    fill
                    className="object-cover object-left"
                    unoptimized
                />
            </div>
        </div>
    );
}
