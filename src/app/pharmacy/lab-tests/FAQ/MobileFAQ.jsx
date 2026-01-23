"use client";
import React, { useState } from 'react';

const mobileFaqs = [
    { q: "Are labs certified?", a: "Yes, we partner with NABL certified labs." },
    { q: "Home sample collection?", a: "Yes, trained phlebotomists visit your home." },
    { q: "When will I get reports?", a: "Usually within 24-48 hours via email/app." }
];

export default function MobileFAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="w-full bg-white py-6 px-4 font-sans border-b border-gray-100">
            <h2 className="text-[#30363c] text-lg font-bold mb-4">FAQs</h2>
            <div className="space-y-3">
                {mobileFaqs.map((item, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg p-3">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            className="w-full flex justify-between items-center text-left font-semibold text-sm text-gray-800"
                        >
                            {item.q}
                            <span className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                        {openIndex === index && (
                            <p className="text-xs text-gray-500 mt-2 leading-relaxed">{item.a}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
