"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const accordionItems = [
    {
        title: "Top-Tests we cover",
        content: (
            <div className="text-gray-600 text-sm leading-7">
                {[
                    "VDRL Test", "HbA1c Test", "ESR Test", "Liver Function Test", "PSA Test",
                    "TSH Test", "Widal Test", "Lipid Profile Test", "CBC Test", "Prolactin Test",
                    "CRP Test", "Troponin Test", "RBS Test", "Thyroid Profile Test", "SGPT Test",
                    "RFT Test", "HBsAg Test"
                ].map((test, index, array) => (
                    <span key={index}>
                        <Link href="#" className="hover:text-[#a7358d] transition-colors">
                            {test}
                        </Link>
                        {index < array.length - 1 && <span className="mx-2 text-gray-400">|</span>}
                    </span>
                ))}
            </div>
        )
    },
    { title: "Top-Selling Healthcare Products", content: <div className="text-sm text-gray-500">Content for Top-Selling Healthcare Products</div> },
    { title: "Top-Selling Medicines", content: <div className="text-sm text-gray-500">Content for Top-Selling Medicines</div> },
    { title: "Top-Searched Medicines", content: <div className="text-sm text-gray-500">Content for Top-Searched Medicines</div> },
    { title: "Explore Lab test in Your City", content: <div className="text-sm text-gray-500">Content for Lab test in Your City</div> },
    { title: "Explore Full Body Checkup in Your City", content: <div className="text-sm text-gray-500">Content for Full Body Checkup in Your City</div> },
];

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                className="w-full text-left py-4 flex items-center justify-between group"
                onClick={onClick}
            >
                <span className={`text-[#4f5869] font-medium text-[22spx] ${isOpen ? 'text-gray-900' : ''}`}>
                    {title}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#e5fcf3]' : 'bg-[#f3f4f9] group-hover:bg-[#ebedf0]'}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className={`w-4 h-4 text-[#4f5869] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'
                    }`}
            >
                {content}
            </div>
        </div>
    );
};

export default function Explore() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="w-full bg-white py-12 font-sans">
            <div className="max-w-[1550px] mx-auto px-5">

                {/* Accordion Section */}
                <div className="mb-12">
                    <h2 className="text-[#30363c] text-[23px] font-bold mb-4">
                        Explore More at PharmEasy
                    </h2>
                    <div className="border border-gray-200 rounded-lg p-5 shadow-sm">
                        {accordionItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                title={item.title}
                                content={item.content}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Trust Badge Section */}
                <div className="border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                        <div className="min-w-[40px] w-10 h-10 relative">
                            <Image
                                src="https://assets.pharmeasy.in/web-assets/images/diagnostics/icon_trustShield_blue_filled.svg?dim=96x96&q=75"
                                alt="Trust Shield"
                                fill
                                className="object-contain"
                                unoptimized
                            />
                            {/* Small white tick badge overlay (if needed based on design analysis, but the blue shield usually includes it or acts as the base. Layout shows one main icon)
                                The user provided a second icon: icon_whiteTickTrustBadge_green_filled.svg
                                Looking at the image, the icon is blue. The text says "We provide trusted...".
                                I will place the blue shield as the main icon.
                             */}
                        </div>
                        <div>
                            <h3 className="text-[#30363c] font-bold text-[18px] leading-tight mb-2">
                                We provide trusted, expert-curated health content to support better awareness,prevention, and care.
                            </h3>
                        </div>
                    </div>

                    <div className="pl-[56px]">
                        <p className="text-[#4f5869] text-sm mb-3">
                            Backed by experienced doctors, medical experts, and strict editorial standards.
                        </p>
                        <Link href="#" className="text-[#a7358d] font-bold text-sm flex items-center gap-1 hover:text-[#8e2d78] transition-colors">
                            Want to know how we do it?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
}
