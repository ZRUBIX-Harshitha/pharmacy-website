"use client";
import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="w-full relative overflow-hidden" style={{ background: 'linear-gradient(124.19deg, #fcebf5, #e6d3f0 99.39%)' }}>
            <div className="max-w-[1200px] mx-auto px-4 mt-10 py-8 relative z-10">

                {/* Header Text */}
                <h1 className="text-center text-2xl md:text-4xl font-semibold text-[#4f585e] mb-6">
                    <span className="text-[#a7358d] font-bold">Get Medicines Fast</span> with Superfast Delivery in your city
                </h1>

                {/* Only on PharmEasy Badge */}
                <div className="flex justify-center mb-10">
                    <div className="relative">
                        <div className="bg-[#a7358d] px-6 py-1.5 rounded-full border border-white/50 shadow-sm relative z-10">
                            <span className="text-[10px] md:text-[11px] font-bold text-white tracking-widest uppercase">ONLY ON PHARMEASY</span>
                        </div>
                        {/* Decorative lines/glow if needed, keeping it simple for now as per image clarity */}
                    </div>
                </div>

                {/* Benefits Badges */}
                {/* Benefits Badges */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
                    {/* Cash on Delivery */}
                    <div className="relative flex items-center justify-between bg-white/60 rounded-2xl p-6 border border-[#a7358d]/20 overflow-hidden group hover:shadow-md transition-all">
                        {/* Glow Effect */}
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-[#a7358d]/5 blur-xl group-hover:bg-[#a7358d]/10 transition-colors"></div>

                        <div className="relative z-10">
                            <h3 className="text-[#4f585e] font-bold text-[20px] mb-1">Cash on Delivery</h3>
                            <p className="text-[#8e9ca7] text-[15px]">On all your orders</p>
                        </div>
                        <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                            <Image
                                src="https://assets.pharmeasy.in/web-assets/images/cod-1-om.svg?dim=128x128&q=75"
                                alt="COD"
                                width={56}
                                height={56}
                                className="drop-shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Express Delivery */}
                    <div className="relative flex items-center justify-between bg-white/60 rounded-2xl p-6 border border-[#a7358d]/20 overflow-hidden group hover:shadow-md transition-all">
                        {/* Glow Effect */}
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-[#a7358d]/5 blur-xl group-hover:bg-[#a7358d]/10 transition-colors"></div>

                        <div className="relative z-10">
                            <h3 className="text-[#4f585e] font-bold text-[20px] mb-1">Express Delivery</h3>
                            <p className="text-[#8e9ca7] text-[15px]">Free* and fast in your city</p>
                        </div>
                        <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                            <Image
                                src="https://assets.pharmeasy.in/web-assets/images/delivery-om.svg?dim=128x128&q=75"
                                alt="Express"
                                width={60}
                                height={50}
                                className="drop-shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Easy Returns */}
                    <div className="relative flex items-center justify-between bg-white/60 rounded-2xl p-6 border border-[#a7358d]/20 overflow-hidden group hover:shadow-md transition-all">
                        {/* Glow Effect */}
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-[#a7358d]/5 blur-xl group-hover:bg-[#a7358d]/10 transition-colors"></div>

                        <div className="relative z-10">
                            <h3 className="text-[#4f585e] font-bold text-[20px] mb-1">Easy Returns</h3>
                            <p className="text-[#8e9ca7] text-[15px]">No questions asked</p>
                        </div>
                        <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                            <Image
                                src="https://assets.pharmeasy.in/web-assets/images/easy-returns-om.svg?dim=128x128&q=75"
                                alt="Returns"
                                width={56}
                                height={56}
                                className="drop-shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 mb-6 opacity-70">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent w-24"></div>
                    <span className="text-[10px] font-bold text-[#a7358d] tracking-widest uppercase">ORDER & AVAIL MAX DISCOUNTS</span>
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent w-24"></div>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-xl shadow-xl p-5 md:p-6 max-w-5xl mx-auto">

                    {/* Search Bar */}
                    <div className="flex flex-col md:flex-row gap-3 mb-8">
                        <div className="relative flex-1 border border-[#a7358d] rounded-lg flex items-center p-2.5 pl-5 transition-shadow hover:shadow-md">
                            <div className="mr-4 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search for Medicines..."
                                className="w-full h-full text-gray-700 outline-none placeholder-gray-400 font-medium text-lg"
                            />
                            <button className="bg-[#a7358d] hover:bg-[#8e2d78] text-white font-bold px-10 py-3 rounded-md transition-colors text-lg">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Or Order Via Divider */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[1px] bg-gray-200 flex-1 max-w-[150px]"></div>
                        <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase bg-white px-2">OR YOU CAN ORDER VIA</span>
                        <div className="h-[1px] bg-gray-200 flex-1 max-w-[150px]"></div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                        {/* WhatsApp */}
                        <div className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-[#a7358d] hover:bg-[#a7358d]/5 transition-all group shadow-sm">
                            <Image
                                src="https://assets.pharmeasy.in/web-assets/images/whatsApp-logo.png?dim=64x64&q=75"
                                alt="WhatsApp"
                                width={32}
                                height={32}
                            />
                            <span className="text-gray-800 font-semibold text-base">Order with WhatsApp</span>
                        </div>

                        {/* Scan Rx */}
                        <div className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-[#a7358d] hover:bg-[#a7358d]/5 transition-all group shadow-sm">
                            <Image
                                src="https://assets.pharmeasy.in/web-assets/images/camera.svg?dim=64x64&q=75"
                                alt="Camera"
                                width={28}
                                height={28}
                            />
                            <span className="text-gray-800 font-semibold text-base">Scan Rx</span>
                        </div>

                        {/* Call us */}
                        <div className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-[#a7358d] hover:bg-[#a7358d]/5 transition-all group shadow-sm">
                            <Image
                                src="https://assets.pharmeasy.in/web-assets/images/order-medicine-phone-icon.svg?dim=64x64&q=75"
                                alt="Phone"
                                width={28}
                                height={28}
                            />
                            <span className="text-gray-800 font-semibold text-base">Call us to Order</span>
                        </div>
                    </div>

                    {/* Offers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* App Only Offer - Ticket Style */}
                        <div className="relative rounded-xl border border-[#d6f2f7] bg-[#effcfd] overflow-hidden flex flex-col justify-between min-h-[160px]">
                            {/* Top Content */}
                            <div className="p-5 relative z-10">
                                <span className="text-[#a7358d] font-bold text-[10px] tracking-wider uppercase mb-1.5 block">APP ONLY OFFER</span>
                                <h3 className="text-gray-900 font-bold text-base mb-1">Get 25% OFF on orders above Rs 1000</h3>
                                <p className="text-gray-500 text-xs">on medicine & healthcare</p>
                                <div className="absolute top-4 right-4 bg-blue-100 rounded-full p-2 opacity-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a7358d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                </div>
                            </div>

                            {/* Ticket Cutouts */}
                            <div className="relative flex items-center w-full">
                                <div className="h-4 w-4 bg-white rounded-full absolute -left-2 z-20 shadow-[inset_-2px_0_2px_rgba(0,0,0,0.05)] border-r border-[#d6f2f7]"></div>
                                <div className="w-full border-t border-dashed border-[#aad6db] mx-2"></div>
                                <div className="h-4 w-4 bg-white rounded-full absolute -right-2 z-20 shadow-[inset_2px_0_2px_rgba(0,0,0,0.05)] border-l border-[#d6f2f7]"></div>
                            </div>

                            {/* Bottom Content */}
                            <div className="px-5 py-3 relative z-10 flex items-center">
                                <button className="bg-[#a7358d] text-white hover:bg-[#8e2d78] font-bold text-[11px] py-2 px-3 rounded flex items-center gap-1.5 transition-colors">
                                    Install App
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Website Offer - Ticket Style */}
                        <div className="relative rounded-xl border border-[#fddcdf] bg-[#fff5f6] overflow-hidden flex flex-col justify-between min-h-[160px]">
                            {/* Top Content */}
                            <div className="p-5 relative z-10">
                                <span className="text-[#f15e6d] font-bold text-[10px] tracking-wider uppercase mb-1.5 block">WEBSITE OFFER</span>
                                <h3 className="text-gray-900 font-bold text-base mb-1">Get 24% OFF on orders above Rs 1000</h3>
                                <p className="text-gray-500 text-xs">on medicine & healthcare</p>
                                <div className="absolute top-4 right-4 bg-pink-100 rounded-full p-2 opacity-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f15e6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                </div>
                            </div>

                            {/* Ticket Cutouts */}
                            <div className="relative flex items-center w-full">
                                <div className="h-4 w-4 bg-white rounded-full absolute -left-2 z-20 shadow-[inset_-2px_0_2px_rgba(0,0,0,0.05)] border-r border-[#fddcdf]"></div>
                                <div className="w-full border-t border-dashed border-[#fbaeb5] mx-2"></div>
                                <div className="h-4 w-4 bg-white rounded-full absolute -right-2 z-20 shadow-[inset_2px_0_2px_rgba(0,0,0,0.05)] border-l border-[#fddcdf]"></div>
                            </div>

                            {/* Bottom Content */}
                            <div className="px-5 py-3 relative z-10 flex items-center">
                                <div className="bg-transparent border border-dashed border-[#f15e6d] bg-white/50 text-[#f15e6d] font-bold text-[11px] py-1.5 px-3 rounded flex items-center gap-2">
                                    CODE: <span className="text-gray-900">24MEDNU</span>
                                    <button className="hover:text-black transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
