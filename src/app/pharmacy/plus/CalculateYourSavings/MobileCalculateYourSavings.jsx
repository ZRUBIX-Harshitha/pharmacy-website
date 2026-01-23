"use client";
import React, { useState } from 'react';

export default function MobileCalculateYourSavings() {
    const [spending, setSpending] = useState(3000);
    const savings = Math.round((spending * 3) * 0.05 + 1000 + 150);

    return (
        <div className="bg-[#f4f6f8] py-8 px-4">
            <h2 className="text-gray-900 font-bold text-lg mb-6 text-center">Your Potential Savings</h2>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Total Savings</p>
                <h3 className="text-4xl font-black text-[#a7358d] mb-6">₹{savings}</h3>

                <p className="text-gray-600 text-xs mb-4">Adjust your monthly medicine spend:</p>

                <input
                    type="range"
                    min="1000"
                    max="5000"
                    step="500"
                    value={spending}
                    onChange={(e) => setSpending(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#a7358d]"
                />
                <div className="flex justify-between mt-2 text-xs font-bold text-gray-400">
                    <span>₹1000</span>
                    <span className="text-[#a7358d]">₹{spending}</span>
                    <span>₹5000</span>
                </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-5 border border-orange-100">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm">😊</div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm">Real User Review</h4>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed italic">"I saved over ₹3000 in just 6 months. Best investment for my family's health!"</p>
                        <p className="text-[10px] font-bold text-gray-400 mt-2">- Rahul S.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
