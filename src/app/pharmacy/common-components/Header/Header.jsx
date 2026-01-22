"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../../../context/CartContext";

const categories = [
    { title: "Medicine", link: "/pharmacy/medicine" },
    { title: "Lab Tests", link: "/pharmacy/lab-tests" },
    { title: "Locations", link: "/pharmacy/locations" },
    { title: "Find Doctors", link: "/pharmacy/find-doctors" },
    { title: "PLUS", link: "/pharmacy/plus" },
    { title: "Offers", link: "/pharmacy/offers" },
    { title: "Health Packages", link: "/pharmacy/health-packages" },
];

export default function Header() {
    const { cartCount, openCart } = useCart();
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > 350) {
                        setIsScrolled(true);
                    } else {
                        setIsScrolled(false);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 bg-white font-sans transition-all duration-300 ${isScrolled ? '' : 'shadow-sm border-b border-gray-100'}`}>
            <div className={`max-w-[1600px] mx-auto px-6 lg:px-10 ${isScrolled ? 'py-4' : 'py-5'}`}>
                {/* Top Row: Logo, Search, Actions */}
                <div className="flex items-center justify-between gap-6">

                    {/* Logo & Location */}
                    <div className="flex items-center gap-8 shrink-0">
                        <div className="shrink-0 cursor-pointer flex items-center">
                            <Link href="/pharmacy/home" className="flex items-center">
                                <span className="text-3xl font-black tracking-tight">
                                    <span style={{ color: '#a7358d' }}>Zru</span>
                                    <span className="text-gray-800">bix</span>
                                </span>
                            </Link>
                        </div>

                        {/* Location Widget */}
                        <div className="hidden lg:flex items-center gap-2 cursor-pointer group hover:bg-gray-50 px-2 py-1.5 rounded-lg transition-colors">
                            <div className="shrink-0 text-gray-500 group-hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-[18px] font-medium leading-tight">Express delivery to</span>
                                <span className="text-gray-800 font-bold text-[16px] flex items-center gap-1 leading-tight">
                                    400001 Mumbai
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-gray-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Center Section: Dynamic Content (Nav or Search) */}
                    <div className="flex-1 px-4 mx-auto relative h-[48px] flex items-center justify-center">

                        {/* Navigation - Visible when NOT scrolled */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${isScrolled ? 'opacity-0 translate-y-4 pointer-events-none scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
                            <nav className="hidden xl:flex items-center gap-8 text-[17px]  text-black justify-center whitespace-nowrap">
                                {categories.map((item, index) => (
                                    <Link key={index} href={item.link} className="transition-colors py-2 border-b-2 border-transparent flex items-center gap-1 hover:opacity-80" style={{ borderColor: 'transparent' }}
                                        onMouseEnter={(e) => { e.currentTarget.style.color = '#a7358d'; e.currentTarget.style.borderColor = '#a7358d'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = 'transparent'; }}
                                    >
                                        {item.title}
                                        {["Locations", "Lab Tests", "Health Insights"].includes(item.title) && (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-gray-500">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        )}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Search Bar - Visible when Scrolled */}
                        <div className={`absolute inset-0 flex items-center justify-center w-full transition-all duration-300 ease-in-out ${isScrolled ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 pointer-events-none scale-95'}`}>
                            <div className="relative shadow-sm rounded-full w-full max-w-2xl">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search for Medicine"
                                    className="w-full h-[48px] pl-12 pr-28 rounded-full border border-gray-200 focus:outline-none focus:border-[#a7358d] focus:ring-1 focus:ring-[#a7358d] text-[16px] placeholder:text-gray-400 font-normal transition-all bg-gray-50/50"
                                />
                                <div className="absolute inset-y-1 right-1">
                                    <button className="text-white px-6 h-[40px] rounded-full font-bold text-[16px] transition-colors shadow-sm" style={{ backgroundColor: '#a7358d' }}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-6 shrink-0">
                        <div className="flex items-center gap-2 text-gray-700 transition-colors cursor-pointer hover:opacity-80"
                            onMouseEnter={(e) => e.currentTarget.style.color = '#a7358d'}
                            onMouseLeave={(e) => e.currentTarget.style.color = ''}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <span className="text-[19px] font-semibold hidden lg:block">User</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 transition-colors cursor-pointer hover:opacity-80"
                            onMouseEnter={(e) => e.currentTarget.style.color = '#a7358d'}
                            onMouseLeave={(e) => e.currentTarget.style.color = ''}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a2.25 2.25 0 0 0 .26-.17l4.5-4.5a2.25 2.25 0 0 0 .17-.26c.541-.827.369-1.908-.33-2.607L10.838 3.66a2.251 2.251 0 0 0-1.591-.659Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                            </svg>
                            <span className="text-[19px] font-semibold  hidden lg:block">Offers</span>
                        </div>
                        <button onClick={openCart} className="flex items-center gap-2 text-gray-700 transition-colors relative hover:opacity-80"
                            onMouseEnter={(e) => e.currentTarget.style.color = '#a7358d'}
                            onMouseLeave={(e) => e.currentTarget.style.color = ''}
                        >
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                <span className="absolute -top-1.5 -right-1.5 bg-[#f47779] text-white text-[9px] font-bold px-1 py-0.5 rounded-full min-w-[16px] text-center">{cartCount}</span>
                            </div>
                            <span className="text-[19px] font-semibold hidden lg:block">Cart</span>
                        </button>

                    </div>
                </div>
            </div>

            {/* Bottom Row wrapper - Full width background */}
            <div className={`w-full overflow-hidden transition-all duration-300 ${isScrolled ? 'max-h-[60px]' : 'max-h-0'}`} style={{ backgroundColor: '#a7358d' }}>
                <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-2.5">
                    <nav className="flex items-center gap-8 text-[16px] font-bold text-white justify-center">
                        {categories.map((item, index) => (
                            <Link key={index} href={item.link} className="hover:text-gray-200 transition-colors flex items-center gap-1">
                                {item.title}
                                {["Locations", "Lab Tests", "Health Insights"].includes(item.title) && (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 text-white/90">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
