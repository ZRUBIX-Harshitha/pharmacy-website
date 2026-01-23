"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

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

export default function MobileHeroSection() {
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
        <div className="w-full bg-[#f4f6f8] min-h-screen pb-10 font-sans">
            {/* Header Area */}
            <div className="bg-white p-5 pb-2">
                <h1 className="text-xl font-bold text-gray-900 mb-1 leading-tight">Offers & Coupons</h1>
                <p className="text-sm text-gray-500 mb-4">Save big on your healthcare needs.</p>

                {/* Categories Horizontal Scroll */}
                <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-5 px-5">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-[13px] font-bold border transition-all whitespace-nowrap active:scale-95
                            ${activeCategory === cat ? "bg-[#a7358d] text-white border-[#a7358d] shadow-md" : "bg-white text-gray-600 border-gray-200"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Offers List */}
            <div className="px-4 pt-6 space-y-5">
                {filteredOffers.map((offer, index) => (
                    <React.Fragment key={offer.id}>
                        {/* Subscribe Banner (Inserted at dynamic position for mobile) */}
                        {activeCategory === "All" && index === 2 && (
                            <div className="bg-gradient-to-br from-[#fffdf5] to-[#fff4d6] rounded-2xl border border-[#ffe099] p-5 flex flex-col relative overflow-hidden shadow-sm mb-5">
                                <div className="relative z-10">
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">Stay updated!</h3>
                                    <p className="text-sm text-gray-600 mb-4 font-medium leading-relaxed">
                                        Get exclusive deals directly in your email.
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        <input
                                            type="email"
                                            placeholder="Enter your Email"
                                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#a7358d]"
                                        />
                                        <button className="bg-[#10847e] text-white font-bold text-sm px-6 py-2.5 rounded-lg shadow-md active:scale-95">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                                {/* Decor */}
                                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#fec84e] opacity-10 rounded-full blur-2xl"></div>
                            </div>
                        )}

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group relative">
                            {/* Top Content */}
                            <div className="p-5 pb-4 flex gap-4">
                                <div className="w-14 h-14 rounded-lg bg-white outline outline-1 outline-gray-100 flex-shrink-0 flex items-center justify-center p-1 shadow-sm">
                                    <Image src={offer.logo} alt="Brand" width={48} height={48} className="object-contain max-h-full max-w-full" unoptimized />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 text-[15px] mb-1.5 leading-snug">{offer.title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{offer.desc}</p>
                                </div>
                            </div>

                            {/* Coupon Section (Ticket Style) */}
                            <div className="mt-auto relative">
                                {/* Dashed Divider */}
                                <div className="border-t-2 border-dashed border-gray-100 w-full relative">
                                    <div className="absolute -left-2.5 -top-2.5 w-5 h-5 bg-[#f4f6f8] rounded-full z-10"></div>
                                    <div className="absolute -right-2.5 -top-2.5 w-5 h-5 bg-[#f4f6f8] rounded-full z-10"></div>
                                </div>

                                <div className="bg-gray-50/50 p-4 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">Code</span>
                                        <span className="text-gray-800 font-bold text-sm font-mono bg-white px-2 py-0.5 rounded border border-gray-200 shadow-sm">{offer.code}</span>
                                    </div>
                                    <button
                                        onClick={() => handleCopy(offer.code, offer.id)}
                                        className={`font-bold text-xs px-4 py-2 rounded-lg transition-all active:scale-95 flex items-center gap-1.5
                                            ${copiedId === offer.id
                                                ? "bg-green-100 text-green-700 border border-green-200"
                                                : "bg-[#fcebf5] text-[#a7358d] border border-[#fcebf5]"}`}
                                    >
                                        {copiedId === offer.id ? (
                                            <>
                                                <FaCheck className="text-[10px]" /> Copied
                                            </>
                                        ) : "Copy Code"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
