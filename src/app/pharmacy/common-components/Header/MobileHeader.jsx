"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../../../context/CartContext";

export default function MobileHeader() {
    const { cartCount, openCart } = useCart();
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 font-sans transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
            <div className="px-4">
                <div className="flex items-center justify-between gap-4 mb-3">
                    {/* Logo */}
                    <Link href="/pharmacy/home" className="flex items-center shrink-0">
                        <span className="text-2xl font-black tracking-tight">
                            <span style={{ color: '#a7358d' }}>Zru</span>
                            <span className="text-gray-800">bix</span>
                        </span>
                    </Link>

                    {/* Right Actions: User, Offers, Cart */}
                    <div className="flex items-center gap-3">
                        <div className="text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        {/* Cart */}
                        <button onClick={openCart} className="relative text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            <span className="absolute -top-1.5 -right-1.5 bg-[#f47779] text-white text-[9px] font-bold px-1 py-0.5 rounded-full min-w-[16px] text-center">{cartCount}</span>
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search for Medicine"
                        className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:border-[#a7358d] focus:ring-1 focus:ring-[#a7358d] text-sm placeholder:text-gray-400"
                    />
                    <div className="absolute inset-y-1 right-1">
                        <button className="text-white px-4 h-8 rounded-lg font-bold text-xs transition-colors shadow-sm" style={{ backgroundColor: '#a7358d' }}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
