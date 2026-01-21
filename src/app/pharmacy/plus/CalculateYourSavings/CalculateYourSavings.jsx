"use client";
import React, { useState } from "react";

export default function CalculateYourSavings() {
    const [spending, setSpending] = useState(3000);

    // Calculate savings based on spending (3 months logic)
    const medicineSavings = Math.round((spending * 3) * 0.05);
    const labTestSavings = 1000;
    const shippingSavings = 150;
    const totalSavings = medicineSavings + labTestSavings + shippingSavings;

    const handleSliderChange = (e) => {
        setSpending(Number(e.target.value));
    };

    return (
        <div className="w-full bg-white py-12 px-4 font-sans relative overflow-hidden">
            {/* Decorative Dots - Top Right */}
            <div className="absolute top-12 right-4 md:right-20 -z-0 opacity-40">
                <div className="grid grid-cols-6 gap-2">
                    {[...Array(36)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-[#fec84e] rounded-full"></div>
                    ))}
                </div>
            </div>
            {/* Decorative Dots - Bottom Left */}
            <div className="absolute bottom-12 left-4 md:left-20 -z-0 opacity-40">
                <div className="grid grid-cols-6 gap-2">
                    {[...Array(36)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-[#fec84e] rounded-full"></div>
                    ))}
                </div>
            </div>

            <div className="max-w-[1250px] mx-auto relative z-10">
                <h2 className="text-[#4f585e] font-bold text-xl mb-8 text-left">Calculate your savings for yourself</h2>

                <div className="bg-white rounded-xl shadow-[0_5px_25px_rgba(0,0,0,0.06)] p-6 md:px-12 md:py-10 flex flex-col md:flex-row gap-10 md:gap-20 border border-gray-100">

                    {/* Left Section: Slider */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center pt-4">
                        <p className="text-[#4f585e] font-bold text-[16px] mb-3">
                            As a Plus member you will save upto
                        </p>
                        <h3 className="text-[#4f585e] font-bold text-5xl mb-5 tracking-tight">
                            ₹{totalSavings}
                        </h3>
                        <p className="text-[#8e9ca7] text-[14px] mb-12 font-medium">
                            if your spending on medicine is
                        </p>

                        {/* Custom Slider */}
                        <div className="w-full px-2 relative mb-8">
                            <style jsx>{`
                                input[type=range]::-webkit-slider-thumb {
                                    -webkit-appearance: none;
                                    height: 24px;
                                    width: 24px;
                                    border-radius: 50%;
                                    background: #ffffff;
                                    border: 2px solid #fcebf5;
                                    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
                                    cursor: pointer;
                                    margin-top: -10px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
                                }
                                input[type=range]::-moz-range-thumb {
                                    height: 24px;
                                    width: 24px;
                                    border-radius: 50%;
                                    background: #ffffff;
                                    border: 2px solid #fcebf5;
                                    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
                                    cursor: pointer;
                                }
                            `}</style>
                            <input
                                type="range"
                                min="2000"
                                max="4000"
                                step="1000"
                                value={spending}
                                onChange={handleSliderChange}
                                className="w-full h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-none"
                                style={{
                                    background: `linear-gradient(to right, #a7358d 0%, #a7358d ${(spending - 2000) / 20}% , #fcebf5 ${(spending - 2000) / 20}%, #fcebf5 100%)`
                                }}
                            />

                            {/* Custom Marks */}
                            <div className="flex justify-between mt-4 text-xs font-bold text-[#8e9ca7]">
                                <div className="text-center w-8">
                                    <span className={spending === 2000 ? 'text-[#a7358d]' : ''}>₹2000</span>
                                    <br />
                                    <span className="font-normal text-[10px] opacity-80">/month</span>
                                </div>
                                <div className="text-center w-8">
                                    <span className={spending === 3000 ? 'text-[#a7358d]' : ''}>₹3000</span>
                                    <br />
                                    <span className="font-normal text-[10px] opacity-80">/month</span>
                                </div>
                                <div className="text-center w-8">
                                    <span className={spending === 4000 ? 'text-[#a7358d]' : ''}>₹4000</span>
                                    <br />
                                    <span className="font-normal text-[10px] opacity-80">/month</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Breakdown Table */}
                    <div className="flex-1 w-full md:border-l md:border-gray-50 md:pl-8">
                        <h4 className="text-[#4f585e] font-bold text-lg mb-6">Break down</h4>

                        <div className="w-full text-sm font-bold text-[#4f585e] rounded-lg overflow-hidden border border-gray-100/50">
                            {/* Row 1 */}
                            <div className="flex">
                                <div className="flex-1 bg-[#fcebf5] p-4 flex items-center border-b border-white border-r">
                                    5% PharmEasy Credits on Medicines
                                </div>
                                <div className="w-32 text-right bg-[#f6dcea] p-4 flex items-center justify-end border-b border-white">
                                    ₹{medicineSavings}
                                </div>
                            </div>
                            {/* Row 2 */}
                            <div className="flex">
                                <div className="flex-1 bg-[#fcebf5] p-4 flex items-center border-b border-white border-r">
                                    Upto 50% PharmEasy Credits on Lab Tests*
                                </div>
                                <div className="w-32 text-right bg-[#f6dcea] p-4 flex items-center justify-end border-b border-white">
                                    ₹{labTestSavings}
                                </div>
                            </div>
                            {/* Row 3 */}
                            <div className="flex">
                                <div className="flex-1 bg-[#fcebf5] p-4 flex items-center border-b border-white border-r">
                                    Savings on Shipping & Convenience Charges
                                </div>
                                <div className="w-32 text-right bg-[#f6dcea] p-4 flex items-center justify-end border-b border-white">
                                    ₹{shippingSavings}
                                </div>
                            </div>
                            {/* Total Row */}
                            <div className="flex">
                                <div className="flex-1 bg-[#fcebf5] p-4 py-5 flex items-center border-r border-white">
                                    Total 3 Months Savings
                                </div>
                                <div className="w-32 text-right bg-[#f6dcea] p-4 py-5 flex items-center justify-end">
                                    ₹{totalSavings}
                                </div>
                            </div>
                        </div>

                        <p className="mt-4 text-[#8e9ca7] text-[11px] font-medium">
                            *Assuming you get a lab test done every 1 month
                        </p>
                    </div>

                </div>
            </div>
            {/* Testimonials Section */}
            <div className="max-w-[1250px] mx-auto relative z-10 mt-16 md:mt-24 mb-12">
                <h3 className="text-[#4f585e] font-bold text-lg mb-1">Still not sure?</h3>
                <h2 className="text-[#4f585e] font-bold text-xl mb-8">Hear from some of our PLUS members</h2>

                {/* Testimonial Card */}
                <div className="mt-8">
                    <div className="mb-4">
                        <h4 className="text-[#4f585e] font-bold text-base">Rahul Singh</h4>
                        <p className="text-[#4f585e] text-sm font-semibold opacity-80">Saved ₹3782 in 6 months</p>
                    </div>

                    <div className="bg-[#fcebf5] rounded-xl p-6 md:p-8 relative">
                        <p className="text-[#4f585e] text-[15px] leading-relaxed font-medium pr-8">
                            I must admit that I’ve made huge savings since I became a member of Pharmeasy Plus. There’s not just free deliveries but extra cashback on every order too! It makes ordering monthly medicines a truly satisfying experience.
                        </p>
                        {/* Quote Icon */}
                        <div className="absolute bottom-4 right-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a7358d" className="w-8 h-8 opacity-80">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                            </svg>
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        <div className="w-6 h-2 bg-[#a7358d] rounded-full"></div>
                        <div className="w-2 h-2 bg-[#d1d5db] rounded-full"></div>
                        <div className="w-2 h-2 bg-[#d1d5db] rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
