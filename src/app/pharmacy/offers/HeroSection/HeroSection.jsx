"use client";
import React, { useState } from "react";
import Image from "next/image";

const offersData = [
    {
        id: 1,
        logo: "https://cms-contents.pharmeasy.in/offer/a02698c5c15-SAVE25_A.jpg?dim=128x128&q=75",
        title: "Get 25% OFF on orders above Rs 1000",
        desc: "on medicine & healthcare",
        code: "MED25NU",
        category: "Medicine"
    },
    {
        id: 2,
        logo: "https://cms-contents.pharmeasy.in/offer/85e2792a20c-karelajamun.jpg?dim=128x128&q=75",
        title: "Get 27% off on medicine with Everherb's Karela Jamun Juice",
        desc: "Get up to 27% off on medicine & healthcare products above Rs.1000",
        code: "FIT27NU",
        category: "Medicine"
    },
    // Subscribe banner insert index placeholder visually, but handled in render
    {
        id: 3,
        logo: "https://cms-contents.pharmeasy.in/offer/fda830212d1-dfcdf.png?dim=128x128&q=75",
        title: "Get FLAT Rs. 2800 OFF on Full Body Health Check Up.",
        desc: "Get FLAT Rs. 2800 OFF on Full Body Health Check Up.",
        code: "NEWDIAMOND1",
        category: "Diagnostic"
    },
    {
        id: 4,
        logo: "https://cms-contents.pharmeasy.in/offer/15c23977694-Mobikwik_optimized_10_1_optimized_10_1_optimized_1.jpeg?dim=128x128&q=75",
        title: "Get up to ₹500 cashback via Mobikwik. Use code PEMKJAN500 on Mobikwik",
        desc: "Use code PEMKJAN500 while paying on PharmEasy using Mobikwik Wallet.",
        code: "PEMKJAN500",
        category: "Payment"
    },
    {
        id: 5,
        logo: "https://cms-contents.pharmeasy.in/offer/ce66fefdeeb-Newpaytmlogopng.png?dim=128x128&q=75",
        title: "Assured ₹10 - ₹100 cashback + Gold Coins using Paytm UPI",
        desc: "Gold coins on every Paytm UPI Payments & Get Assured upto Rs 300 cashback via Paytm UPI",
        code: "JAN25PAYTM",
        category: "Payment"
    },
    {
        id: 6,
        logo: "https://cms-contents.pharmeasy.in/offer/8db5ff2449d-softovac.jpg?dim=128x128&q=75",
        title: "Get extra 10% Off on Softovac products",
        desc: "Buy Softovac products and get additional 10% Off",
        code: "SOFT10",
        category: "Medicine"
    },
    {
        id: 7,
        logo: "https://cms-contents.pharmeasy.in/offer/a8f29affc93-DBSLOGO.png?dim=128x128&q=75",
        title: "Get FLAT ₹250 off on medicines",
        desc: "Valid on a minimum transaction of ₹999 with Debit Card",
        code: "DBSJAN250",
        category: "Payment"
    },
    {
        id: 8,
        logo: "https://cms-contents.pharmeasy.in/offer/f3cc9c634c4-HSBC_MASTERBRAND_LOGO_RGB.png?dim=128x128&q=75",
        title: "Flat ₹250 off on orders above INR 999",
        desc: "Valid on a minimum transaction of ₹999",
        code: "HSBCJAN250",
        category: "Payment"
    },
    {
        id: 9,
        logo: "https://cms-contents.pharmeasy.in/offer/ba8e6369947-canarabnklogo.png?dim=128x128&q=75",
        title: "Get FLAT ₹250 off on minimum transaction of ₹999 through Canara Bank Visa Debit Cards",
        desc: "Valid on a minimum transaction of ₹999 with Debit Card",
        code: "JANCB250",
        category: "Payment"
    },
    {
        id: 10,
        logo: "https://cms-contents.pharmeasy.in/offer/9e8e20d537c-Mobikwik_optimized_10_1_optimized_10_1_optimized_1.jpeg?dim=128x128&q=75",
        title: "Get flat Rs.50 on MOV of Rs.999 with Mobikwik Wallet. Use code PEMKJAN50 on...",
        desc: "Use code PEMKJAN50 while paying on PharmEasy using Mobikwik Wallet.",
        code: "PEMKJAN50",
        category: "Payment"
    },
    {
        id: 11,
        logo: "https://cms-contents.pharmeasy.in/offer/728b443e74e-amazonpaylog.jpeg?dim=128x128&q=75",
        title: "Win up to Rs.100 cashback on order above Rs.699. Min Cashback Rs 20. Valid once per...",
        desc: "Valid on transactions above ₹699.",
        code: "AZPAYJAN25",
        category: "Payment"
    },
    {
        id: 12,
        logo: "https://cms-contents.pharmeasy.in/offer/b398213a53b-easemytripreduced.jpg?dim=128x128&q=75",
        title: "Get vouchers up to INR 3000 from EaseMyTrip",
        desc: "Applicable on orders above Rs.750",
        code: "EMTPE786",
        category: "Payment"
    },
    {
        id: 13,
        logo: "https://cms-contents.pharmeasy.in/offer/20a4ccf609b-Ivorylogo.jpg?dim=128x128&q=75",
        title: "Get FLAT Rs. 500 OFF on Memory Health Assessments.",
        desc: "Offer valid till 31 January 2026 on transaction above Rs 1999",
        code: "PEIVORY",
        category: "Diagnostic"
    },
    {
        id: 14,
        logo: "https://cms-contents.pharmeasy.in/offer/0871820446c-Givalogo.png?dim=128x128&q=75",
        title: "Rs 500 OFF on all orders above Rs 1999. Applicable Sitewide.",
        desc: "Offer valid on transaction above Rs 1999",
        code: "PHARMEASYS00",
        category: "Payment"
    },
    {
        id: 15,
        logo: "https://cms-contents.pharmeasy.in/offer/026f82653e0-Secretalcehmistlogo.png?dim=128x128&q=75",
        title: "Get 35% OFF on Secret Alchemist",
        desc: "Offer valid on transaction above Rs 750",
        code: "PE35OFF",
        category: "Medicine"
    },
    {
        id: 16,
        logo: "https://cms-contents.pharmeasy.in/offer/3dca840f7f2-gush_beauty_logonew.png?dim=128x128&q=75",
        title: "Get 30% off on a minimum purchase of ₹799 on all products range",
        desc: "Offer valid on transaction above Rs 1999",
        code: "GUSH30",
        category: "Medicine"
    }
];

const categories = ["All", "Payment", "Medicine", "Diagnostic", "Healthcare"];

export default function HeroSection() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [copiedId, setCopiedId] = useState(null);

    const handleCopy = (code, id) => {
        navigator.clipboard.writeText(code);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const filteredOffers = activeCategory === "All"
        ? offersData
        : offersData.filter(offer => offer.category === activeCategory);

    return (
        <div className="w-full bg-[#f8f9fa] min-h-screen font-sans pb-24">
            <div className="max-w-[1450px] mx-auto px-6 pt-10">

                {/* Breadcrumb */}
                <div className="text-[14px] text-gray-400 mb-8 flex items-center gap-2 font-medium">
                    <span className="hover:text-[#a7358d] cursor-pointer transition-colors">Home</span>
                    <span className="text-gray-300">/</span>
                    <span className="text-gray-600">PharmEasy Coupon Codes & Offers</span>
                </div>

                {/* Title Section */}
                <div className="mb-12">
                    <h1 className="text-[34px] font-bold text-gray-800 mb-4 tracking-tight">
                        PharmEasy Offers & Coupon Codes
                    </h1>
                    <div className="max-w-4xl space-y-4">
                        <p className="text-[17px] text-gray-600 leading-relaxed">
                            PharmEasy is one of India&apos;s leading online healthcare platforms that allows you to make great savings on your medicines and healthcare needs every day. From finding the prescribed medicine to the wellness product that is best suitable for you...
                            <span className="text-[#a7358d] font-bold cursor-pointer hover:underline ml-1">Read More</span>
                        </p>
                        <p className="text-[16px] font-semibold text-gray-700">
                            Download the PharmEasy app today to buy medicines online with great savings.
                        </p>
                        <div className="inline-block bg-[#fff5fa] border border-[#a7358d]/20 rounded-md px-4 py-2 mt-2">
                            <p className="text-[15px] font-bold text-[#a7358d]">
                                <span className="mr-1">🔥</span> Hurry! Avail these exclusive PharmEasy offers now.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Category Filters */}
                <div className="flex gap-4 mb-10 overflow-x-auto pb-4 scrollbar-hide">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-7 py-3 rounded-full text-[16px] font-bold border transition-all duration-300 whitespace-nowrap shadow-sm
                                ${activeCategory === cat
                                    ? "bg-[#a7358d] text-white border-[#a7358d] shadow-md transform scale-105"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-[#a7358d] hover:text-[#a7358d] hover:shadow-md"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Offers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

                    {filteredOffers.map((offer, index) => (
                        <React.Fragment key={offer.id}>
                            {/* Subscribe Banner */}
                            {activeCategory === "All" && index === 2 && (
                                <div className="bg-gradient-to-br from-[#fffdf5] to-[#fff4d6] rounded-2xl border border-[#ffe099] p-8 flex flex-col justify-center relative overflow-hidden md:col-span-1 shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="relative z-10 max-w-[75%]">
                                        <h3 className="font-bold text-gray-800 text-2xl mb-3 group-hover:text-[#a7358d] transition-colors">
                                            Stay updated!
                                        </h3>
                                        <p className="text-base text-gray-600 mb-8 font-medium">
                                            Get the latest offers & exclusive deals directly in your inbox.
                                        </p>
                                        <div className="flex flex-col gap-4">
                                            <input
                                                type="email"
                                                placeholder="Enter your Email"
                                                className="w-full bg-white border border-gray-300 rounded-lg px-5 py-3 text-base focus:outline-none focus:border-[#a7358d] focus:ring-1 focus:ring-[#a7358d]"
                                            />
                                            <button className="bg-[#10847e] text-white font-bold text-base px-8 py-3 rounded-lg hover:bg-[#0d6e69] transition-all shadow-md active:scale-95 w-fit">
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                    {/* Decorative Elements */}
                                    <div className="absolute right-[-20px] bottom-[-20px] w-56 h-56 opacity-10 rotate-12">
                                        <svg viewBox="0 0 200 200" fill="#fec84e">
                                            <path d="M45,-75C58.3,-69.3,69.2,-58.3,77.9,-46.1C86.6,-33.9,93.1,-20.5,92.6,-7.3C92.1,5.9,84.6,18.9,74.9,29.9C65.2,40.9,53.3,49.9,41.4,56.9C29.5,63.9,17.6,68.9,4.9,71.2C-7.8,73.5,-21.3,73.1,-33.9,67.6C-46.5,62.1,-58.2,51.5,-67.2,38.9C-76.2,26.3,-82.5,11.7,-81.4,-2.4C-80.3,-16.5,-71.8,-30.1,-61.1,-40.8C-50.4,-51.5,-37.5,-59.3,-24.5,-65.2C-11.5,-71.1,1.7,-75.1,15.1,-75.7L45,-75Z" transform="translate(100 100)" />
                                        </svg>
                                    </div>
                                </div>
                            )}

                            {/* Offer Card */}
                            <div className="bg-white border border-gray-100 rounded-2xl p-0 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group h-full overflow-hidden">
                                {/* Top Section with Logo and Content */}
                                <div className="p-7 flex gap-6 items-start">
                                    <div className="w-[80px] h-[80px] relative shrink-0 p-1 border border-gray-100 rounded-lg bg-white shadow-sm flex items-center justify-center">
                                        <Image
                                            src={offer.logo}
                                            alt="Logo"
                                            width={70}
                                            height={70}
                                            className="object-contain max-h-full max-w-full"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0 pr-4">
                                        <h3 className="font-bold text-gray-800 text-[19px] leading-[1.35] mb-2 line-clamp-2 group-hover:text-[#a7358d] transition-colors">
                                            {offer.title}
                                        </h3>
                                        <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-2">
                                            {offer.desc}
                                        </p>
                                    </div>
                                    {/* Arrow Icon */}
                                    <div className="absolute right-5 top-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#a7358d" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Bottom Section with Code and Copy Action */}
                                <div className="mt-auto relative">
                                    {/* Divider Line */}
                                    <div className="border-t-2 border-dashed border-gray-100 w-full relative">
                                        {/* Half-circle cutouts */}
                                        <div className="absolute -left-3 -top-3 w-6 h-6 bg-[#f8f9fa] rounded-full z-10"></div>
                                        <div className="absolute -right-3 -top-3 w-6 h-6 bg-[#f8f9fa] rounded-full z-10"></div>
                                    </div>

                                    <div className="bg-gray-50/50 p-6 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[13px] uppercase tracking-wide text-gray-400 font-bold mb-0.5">Coupon Code</span>
                                            <span className="text-gray-900 font-bold text-[18px] font-mono tracking-wide">{offer.code}</span>
                                        </div>
                                        <button
                                            onClick={() => handleCopy(offer.code, offer.id)}
                                            className={`font-bold text-[15px] px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm
                                                ${copiedId === offer.id
                                                    ? "bg-green-100 text-green-700 border border-green-200"
                                                    : "bg-white text-[#a7358d] border border-[#a7358d]/30 hover:bg-[#a7358d] hover:text-white"}`}
                                        >
                                            {copiedId === offer.id ? (
                                                <span className="flex items-center gap-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                                    </svg>
                                                    Copied
                                                </span>
                                            ) : "Copy Code"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>

            </div>
        </div>
    );
}

// Helper for class names if needed
