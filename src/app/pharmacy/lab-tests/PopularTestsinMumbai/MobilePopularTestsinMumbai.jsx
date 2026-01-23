"use client";
import React from 'react';

const tests = [
    "Full Body Checkup in Mumbai", "Blood Test in Mumbai", "Thyroid Test in Mumbai",
    "Diabetes Test in Mumbai", "COVID-19 Test in Mumbai", "Lipid Profile in Mumbai",
    "Liver Function Test in Mumbai", "CBC Test in Mumbai"
];

export default function MobilePopularTestsinMumbai() {
    return (
        <div className="bg-white py-8 px-5 border-t border-gray-100">
            <h2 className="text-gray-900 font-bold text-lg mb-4">Popular in Mumbai</h2>
            <div className="grid grid-cols-1 gap-2">
                {tests.map((test, i) => (
                    <a key={i} href="#" className="flex justify-between items-center py-2 border-b border-gray-50 text-sm text-gray-600 hover:text-[#a7358d] group">
                        {test}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-gray-300 group-hover:text-[#a7358d]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </a>
                ))}
            </div>
        </div>
    );
}
