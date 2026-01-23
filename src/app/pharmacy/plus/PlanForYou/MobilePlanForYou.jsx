"use client";
import React from 'react';

export default function MobilePlanForYou() {
    return (
        <div className="bg-white px-4 pb-6 pt-2">
            <h2 className="text-gray-800 font-bold text-lg mb-4">Choose a Plan</h2>

            <div className="border border-[#a7358d] bg-[#fdf2f8] rounded-xl p-4 flex items-center justify-between mb-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#a7358d] text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                    RECOMMENDED
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#a7358d] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-3 h-3">
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 011.04-.207z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-bold text-gray-900 text-lg">3 Months</p>
                        <p className="text-xs text-gray-500">Unlimited Savings</p>
                    </div>
                </div>

                <div className="text-right">
                    <p className="text-xs text-gray-400 line-through">₹499</p>
                    <p className="text-xl font-bold text-[#a7358d]">₹99</p>
                </div>
            </div>

            <button className="w-full bg-[#a7358d] text-white font-bold py-3.5 rounded-xl shadow-lg active:scale-95 transition-transform text-sm">
                Join Plus Membership
            </button>
        </div>
    );
}
