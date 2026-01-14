"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 font-sans">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
                <div className="flex items-center justify-between h-[80px]">

                    {/* Left Section: Logo & Location */}
                    <div className="flex items-center gap-10">
                        {/* Logo */}
                        <Link href="/" className="shrink-0 flex items-center">
                            <Image
                                src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=360x0"
                                alt="PharmEasy Logo"
                                width={160}
                                height={48}
                                className="h-12 w-auto object-contain"
                                unoptimized
                            />
                        </Link>

                        {/* Location Widget */}
                        <div className="hidden lg:flex items-center gap-2 cursor-pointer group hover:bg-gray-50 px-2 py-1.5 rounded-lg transition-colors">
                            <div className="shrink-0 text-gray-500 group-hover:text-gray-700">
                                {/* Location Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-[17px] leading-tight">Delivering to</span>
                                <span className="text-[#10847e] font-bold text-[15px] flex items-center gap-1 group-hover:text-[#0a5c56] transition-colors leading-tight">
                                    Enter pincode
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 mt-0.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Center: Navigation Links */}
                    <nav className="hidden xl:flex items-center gap-10 text-[16px] font-semibold text-gray-700">
                        <Link href="/" className="hover:text-[#10847e] transition-colors py-2 border-b-2 border-transparent hover:border-[#10847e]">Home</Link>
                        <Link href="/medicines" className="hover:text-[#10847e] transition-colors py-2 border-b-2 border-transparent hover:border-[#10847e]">Medicines</Link>
                        <Link href="/lab-tests" className="hover:text-[#10847e] transition-colors py-2 border-b-2 border-transparent hover:border-[#10847e]">Lab tests</Link>
                        <Link href="/store-locator" className="hover:text-[#10847e] transition-colors py-2 border-b-2 border-transparent hover:border-[#10847e]">Store Locator</Link>
                        <Link href="/compare-medicines" className="hover:text-[#10847e] transition-colors py-2 border-b-2 border-transparent hover:border-[#10847e]">Compare Medicines</Link>
                    </nav>

                    {/* Right Section: Actions */}
                    <div className="flex items-center gap-8">

                        {/* Language */}
                        <button className="flex items-center gap-2 text-gray-700 hover:text-[#10847e] transition-colors text-[15px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-500 ">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                            <span>English</span>
                        </button>

                        {/* Cart */}
                        <Link href="/cart" className="flex items-center gap-2 text-gray-700 hover:text-[#10847e] transition-colors">
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                <span className="absolute -top-1 -right-1 bg-[#f47779] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">0</span>
                            </div>
                            <span className="text-[15px] font-semibold hidden md:block">Cart</span>
                        </Link>

                        {/* Sign In */}
                        <Link href="/login" className="flex items-center gap-2 text-gray-700 hover:text-[#10847e] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <span className="text-[15px] font-semibold hidden md:block">Sign in</span>
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}
