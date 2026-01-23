"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../../../context/CartContext";

const navSections = [
    {
        title: "Health & Services",
        items: [
            {
                title: "Medicine",
                link: "/pharmacy/medicine",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                )
            },
            {
                title: "Lab Tests",
                link: "/pharmacy/lab-tests",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                )
            },
            {
                title: "Find Doctors",
                link: "/pharmacy/find-doctors",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                )
            },
            {
                title: "Health Packages",
                link: "/pharmacy/health-packages",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                )
            },
        ]
    },
    {
        title: "More",
        items: [
            {
                title: "Locations",
                link: "/pharmacy/locations",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                )
            },
            {
                title: "PLUS",
                link: "/pharmacy/plus",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                )
            },
            {
                title: "Offers",
                link: "/pharmacy/offers",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a2.25 2.25 0 0 0 .26-.17l4.5-4.5a2.25 2.25 0 0 0 .17-.26c.541-.827.369-1.908-.33-2.607L10.838 3.66a2.251 2.251 0 0 0-1.591-.659Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                    </svg>
                )
            },
        ]
    }
];

export default function MobileHeader() {
    const { cartCount, openCart } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when drawer is open
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isDrawerOpen]);

    return (
        <>
            <header className={`sticky top-0 z-40 bg-white font-sans transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'border-b border-gray-100 py-3'}`}>
                <div className="px-4">
                    <div className="flex items-center justify-between gap-4 mb-3">

                        {/* Left: Hamburger + Logo */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsDrawerOpen(true)}
                                className="p-1 -ml-1 text-gray-800 hover:text-black active:scale-95 transition-transform rounded-md focus:bg-gray-100"
                                aria-label="Open Menu"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>

                            <Link href="/pharmacy/home" className="flex items-center shrink-0">
                                <span className="text-2xl font-black tracking-tighter">
                                    <span style={{ color: '#a7358d' }}>Zru</span>
                                    <span className="text-gray-900">bix</span>
                                </span>
                            </Link>
                        </div>

                        {/* Right: Location + Cart */}
                        <div className="flex items-center gap-5">
                            {/* Location (Simplified Icon) */}
                            <button className="text-gray-700 active:scale-90 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </button>

                            {/* Cart */}
                            <button onClick={openCart} className="relative text-gray-700 active:scale-90 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                {cartCount > 0 && (
                                    <span className="absolute -top-1.5 -right-1.5 bg-[#f47779] text-white text-[9px] font-bold px-1 py-0.5 rounded-full min-w-[16px] text-center shadow-sm border border-white">
                                        {cartCount}
                                    </span>
                                )}
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
                            placeholder="Search for medicines"
                            className="w-full h-11 pl-10 pr-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-[#a7358d]/50 focus:ring-2 focus:ring-[#a7358d]/20 focus:bg-white text-[15px] placeholder:text-gray-400 transition-all shadow-sm"
                        />
                        <div className="absolute inset-y-1.5 right-1.5">
                            <button className="text-white px-4 h-8 rounded-lg font-bold text-xs transition-colors shadow-sm active:shadow-inner active:transform active:translate-y-px" style={{ backgroundColor: '#a7358d' }}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Side Drawer Overlay & Panel */}
            {isDrawerOpen && (
                <div className="fixed inset-0 z-50 flex h-[100dvh]">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-300"
                        onClick={() => setIsDrawerOpen(false)}
                    />

                    {/* Drawer Content */}
                    <div className="relative w-[320px] max-w-[85vw] bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300 ease-out animate-slideIn">

                        {/* 1. Header Section */}
                        <div className="relative bg-[#a7358d] text-white p-6 pb-20">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsDrawerOpen(false)}
                                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-1.5 rounded-full transition-colors text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="flex items-center gap-4 mb-2 mt-4">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#a7358d] text-2xl shadow-lg border-2 border-white/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">Hi, Guest</h3>
                                    <p className="text-white/80 text-xs mt-0.5">Welcome to Zrubix</p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Overlapping Card (Login) */}
                        <div className="px-5 -mt-12 relative z-10 mb-4">
                            <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100/50">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm font-semibold text-gray-800">Unlock special offers!</span>
                                    <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded-full">FREE</span>
                                </div>
                                <button className="w-full py-2.5 bg-[#a7358d] text-white font-bold text-sm rounded-lg hover:bg-[#8e2d78] active:scale-[0.98] transition-all shadow-md">
                                    Login / Sign Up
                                </button>
                            </div>
                        </div>

                        {/* 3. Navigation Links */}
                        <div className="flex-1 overflow-y-auto px-2 pb-6 space-y-6 scrollbar-hide">
                            {navSections.map((section, secIndex) => (
                                <div key={secIndex} className="px-2">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-3">
                                        {section.title}
                                    </div>
                                    <div className="space-y-1">
                                        {section.items.map((item, index) => (
                                            <Link
                                                key={index}
                                                href={item.link}
                                                onClick={() => setIsDrawerOpen(false)}
                                                className="flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-gray-50 active:bg-blue-50 transition-colors group"
                                            >
                                                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 group-hover:bg-white group-hover:text-[#a7358d] group-hover:shadow-sm transition-all">
                                                    {item.icon}
                                                </span>
                                                <span className="font-medium text-gray-700 group-hover:text-gray-900 text-[15px]">
                                                    {item.title}
                                                </span>
                                                <span className="ml-auto text-gray-300 group-hover:text-[#a7358d] transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* PLUS Membership Special Link */}
                            <div className="px-4 mt-4">
                                <Link
                                    href="/pharmacy/plus"
                                    onClick={() => setIsDrawerOpen(false)}
                                    className="block relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 p-4 border border-orange-200 group"
                                >
                                    <div className="flex justify-between items-center relative z-10">
                                        <div className="flex items-center gap-3">
                                            {/* Updated Professional Icon for PLUS */}
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-yellow-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813a3.75 3.75 0 0 0 2.576-2.576l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.394a.75.75 0 0 1 0 1.422l-1.183.394c-.447.15-.799.5-.948.948l-.394 1.183a.75.75 0 0 1-1.422 0l-.394-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.394a.75.75 0 0 1 0-1.422l1.183-.394c.447-.15.799-.5.948-.948l.394-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 text-sm">Join PLUS</h4>
                                                <p className="text-[11px] text-gray-600">Save 5% extra on every order</p>
                                            </div>
                                        </div>
                                        <div className="text-orange-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-center">
                            <Link href="/download-app" className="text-xs text-gray-400 font-medium hover:text-[#a7358d] transition-colors">
                                Download App
                            </Link>
                            <span className="mx-2 text-gray-300">•</span>
                            <Link href="/help" className="text-xs text-gray-400 font-medium hover:text-[#a7358d] transition-colors">
                                Help & Support
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
