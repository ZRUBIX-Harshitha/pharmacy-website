"use client";
import React, { useState } from "react";
import Image from "next/image";

const packagesData = [
    {
        id: 1,
        title: "Comprehensive Full Body Checkup",
        tests: "Includes 89 Tests",
        desc: "Liver, Kidney, Thyroid, Lipid Profile & more",
        price: 1499,
        originalPrice: 2999,
        discount: "50% OFF",
        category: "Full Body",
        popular: true,
        features: ["Free Home Sample Collection", "E-Report in 24 Hours"]
    },
    {
        id: 2,
        title: "Advanced Heart Health Package",
        tests: "Includes 45 Tests",
        desc: "Cholesterol, ECG, Cardiac Risk Markers",
        price: 1999,
        originalPrice: 3500,
        discount: "42% OFF",
        category: "Heart",
        popular: false,
        features: ["Cardiologist Consultation", "Same Day Reporting"]
    },
    {
        id: 3,
        title: "Women's Wellness Premium",
        tests: "Includes 62 Tests",
        desc: "Hormonal, Vitamin D, Iron, Thyroid",
        price: 2199,
        originalPrice: 4000,
        discount: "45% OFF",
        category: "Women",
        popular: true,
        features: ["Women Health Specialist", "Private & Confidential"]
    },
    {
        id: 4,
        title: "Diabetes Care Basic",
        tests: "Includes 35 Tests",
        desc: "HbA1c, Fasting Blood Sugar, Kidney Screen",
        price: 799,
        originalPrice: 1599,
        discount: "50% OFF",
        category: "Diabetes",
        popular: false,
        features: ["Diabetic Diet Chart", "Glucose Monitoring"]
    },
    {
        id: 5,
        title: "Senior Citizen Active Health",
        tests: "Includes 74 Tests",
        desc: "Bone Health, Arthritis, Diabetes, Cardiac",
        price: 2499,
        originalPrice: 4999,
        discount: "50% OFF",
        category: "Senior",
        popular: true,
        features: ["Easy Sample Collection", "Doctor Call Back"]
    },
    {
        id: 6,
        title: "Vitamin & Deficiency Check",
        tests: "Includes 12 Tests",
        desc: "Vitamin D, B12, Iron, Calcium",
        price: 999,
        originalPrice: 1999,
        discount: "50% OFF",
        category: "Vitamins",
        popular: false,
        features: ["Nutritional Consultation", "Immunity Check"]
    }
];

const faqs = [
    {
        question: "Do I need to fast before the test?",
        answer: "Yes, for most health packages like Full Body Checkup or Diabetes screen, 10-12 hours of fasting is required for accurate results."
    },
    {
        question: "When will I get my reports?",
        answer: "Most reports are generated within 24 hours of sample collection. You will receive a digital copy via email and on the app."
    },
    {
        question: "Is home sample collection safe?",
        answer: "Absolutely. Our phlebotomists follow strict hygiene protocols, including wearing PPE kits and using sterile, single-use needle kits."
    },
    {
        question: "Can I consult a doctor after the report?",
        answer: "Yes, all our comprehensive packages include a free consultation with a verified doctor to help you understand your reports."
    }
];

const categories = ["All", "Full Body", "Diabetes", "Women", "Senior", "Heart"];

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [openFaq, setOpenFaq] = useState(null);

    const filteredPackages = packagesData.filter(pkg => {
        const matchesCategory = activeTab === "All" || pkg.category === activeTab;
        const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="w-full font-sans bg-[#f9fbfd] min-h-screen">
            {/* Hero Banner Area */}
            <div className="w-full bg-gradient-to-r from-[#eef4ff] via-[#f7f0fa] to-[#fff0f5] pb-24 pt-16 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#a7358d] opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="max-w-[1450px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left pt-8">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#a7358d]/10 text-[#a7358d] font-bold text-sm tracking-wide mb-6 uppercase border border-[#a7358d]/20">
                            Trusted by 2 Million+ Families
                        </span>
                        <h1 className="text-[44px] md:text-[56px] font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
                            Smart Healthcare <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a7358d] to-[#70245e]">
                                for a Better You
                            </span>
                        </h1>
                        <p className="text-[19px] text-gray-600 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
                            Premium full body checkups & comprehensive health screening packages from verified labs.
                        </p>

                        {/* Search Bar */}
                        <div className="bg-white p-2 rounded-2xl shadow-xl shadow-gray-200/50 max-w-lg mx-auto md:mx-0 flex items-center border border-gray-100 transition-transform focus-within:scale-105 relative z-20">
                            <div className="pl-4 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search 'Heart Checkup'..."
                                className="flex-1 h-14 px-4 text-gray-700 font-medium placeholder:text-gray-400 focus:outline-none text-lg bg-transparent"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="bg-[#a7358d] text-white h-14 px-10 rounded-xl font-bold text-[17px] hover:bg-[#8e2d78] transition-all shadow-md active:scale-95">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Right 3D Visual - Mobile App Mockup */}
                    {/* Changed justify-end to justify-center to bring it leftwards away from the edge */}
                    <div className="flex-1 flex justify-center relative h-[600px] items-center">
                        <div className="relative w-[320px] md:w-[350px] perspective-1000 flex items-center justify-center">

                            {/* Decorative Background Circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a7358d]/5 rounded-full blur-3xl -z-10 "></div>

                            {/* Phone Frame */}
                            <div className="relative w-[280px] h-[560px] bg-white rounded-[3rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-[8px] border-gray-900 z-10 overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
                                {/* Notch */}
                                <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-xl z-20 w-32 mx-auto"></div>

                                {/* Screen Content */}
                                <div className="w-full h-full bg-[#f8f9fa] pt-8 overflow-hidden flex flex-col">
                                    {/* App Header */}
                                    <div className="px-5 mb-6 flex justify-between items-center">
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium">Good Morning,</p>
                                            <h4 className="text-lg font-bold text-gray-800">Harshitha</h4>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
                                            <svg className="w-full h-full text-gray-400 p-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                        </div>
                                    </div>

                                    {/* Health Score Card */}
                                    <div className="mx-4 bg-gradient-to-br from-[#a7358d] to-[#d11243] rounded-2xl p-5 text-white shadow-lg shadow-pink-200 mb-6 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                        <div className="relative z-10">
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <p className="text-xs font-medium text-pink-100 uppercase tracking-wider">Overall Score</p>
                                                    <h3 className="text-3xl font-bold">98<span className="text-lg opacity-80">%</span></h3>
                                                </div>
                                                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                                </div>
                                            </div>
                                            <p className="text-xs text-pink-50 bg-white/10 inline-block px-2 py-1 rounded">Excellent Condition</p>
                                        </div>
                                    </div>

                                    {/* Recent Reports List */}
                                    <div className="px-5 flex-1 bg-white rounded-t-[2rem] shadow-sm pt-6">
                                        <h5 className="font-bold text-gray-800 mb-4 text-sm">Recent Reports</h5>

                                        <div className="space-y-4">
                                            {/* Report Item 1 */}
                                            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 cursor-default">
                                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-bold text-gray-800">Full Body Check</p>
                                                    <p className="text-[10px] text-gray-500">Today, 10:00 AM</p>
                                                </div>
                                                <div className="text-green-500 font-bold text-xs bg-green-50 px-2 py-1 rounded">Ready</div>
                                            </div>

                                            {/* Report Item 2 */}
                                            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 cursor-default">
                                                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-bold text-gray-800">Thyroid Profile</p>
                                                    <p className="text-[10px] text-gray-500">Yesterday</p>
                                                </div>
                                                <div className="text-gray-400 font-medium text-xs">View</div>
                                            </div>

                                            {/* Report Item 3 */}
                                            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 cursor-default">
                                                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-bold text-gray-800">Heart Health</p>
                                                    <p className="text-[10px] text-gray-500">2 days ago</p>
                                                </div>
                                                <div className="text-gray-400 font-medium text-xs">View</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Nav Mockup */}
                                    <div className="border-t border-gray-100 p-4 pb-6 flex justify-around items-center bg-white text-gray-400">
                                        <div className="text-[#a7358d] flex flex-col items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                                            <span className="text-[9px] font-bold">Home</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                                        </div>
                                        <div className="flex flex-col items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating "Verified" Badge */}
                            <div className="absolute top-[20%] -right-8 md:-right-4 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float border border-green-100 z-30">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Status</p>
                                    <p className="text-xs font-bold text-gray-800">Verified by Dr. Aditi</p>
                                </div>
                            </div>

                            {/* Floating "24h" Badge */}
                            <div className="absolute bottom-[20%] -left-6 md:-left-8 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float-delayed border border-gray-100 z-30">
                                <div className="w-8 h-8 rounded-full bg-[#f0f9ff] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0ea5e9]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Time</p>
                                    <p className="text-xs font-bold text-gray-800">Results in 24h</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Indicators - Upgraded Icons */}
            <div className="bg-white border-b border-gray-100 py-8 relative -mt-8 z-20 mx-6 rounded-2xl shadow-lg max-w-[1450px] lg:mx-auto">
                <div className="flex flex-wrap justify-between items-center px-8 md:px-16 gap-6 md:gap-0">
                    <div className="flex items-center gap-5 group cursor-default">
                        <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            {/* Shield Check Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-xl">100% Verified Labs</h4>
                            <p className="text-gray-500 text-sm">NABL & CAP Certified Partners</p>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-gray-100 md:w-[1px] md:h-12 hidden md:block"></div>
                    <div className="flex items-center gap-5 group cursor-default">
                        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                            {/* Home/User Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-xl">Free Home Sample Pickup</h4>
                            <p className="text-gray-500 text-sm">Safe & Hygienic Collection</p>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-gray-100 md:w-[1px] md:h-12 hidden md:block"></div>
                    <div className="flex items-center gap-5 group cursor-default">
                        <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                            {/* Clock Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-xl">Smart Reports in 24 hrs</h4>
                            <p className="text-gray-500 text-sm">Doctor Verified Digital Reports</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-[1450px] mx-auto px-6 py-20">

                {/* 1. HEALTH PACKAGES GRID */}
                <div className="mb-24">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                        <h2 className="text-[32px] font-bold text-gray-900">Popular Health Packages</h2>
                        {/* Filters */}
                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                            {categories.map((cat, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(cat)}
                                    className={`px-6 py-2.5 rounded-full text-[15px] font-bold border transition-all duration-300 whitespace-nowrap
                                        ${activeTab === cat
                                            ? "bg-[#a7358d] text-white border-[#a7358d] shadow-md"
                                            : "bg-white text-gray-600 border-gray-200 hover:border-[#a7358d] hover:text-[#a7358d]"}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Packages Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPackages.map((pkg) => (
                            <div key={pkg.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col group h-full">
                                {pkg.popular && (
                                    <div className="bg-[#a7358d] text-white text-xs font-bold py-1.5 px-5 self-start rounded-br-lg uppercase tracking-wider relative z-10 shadow-sm">
                                        Best Seller
                                    </div>
                                )}

                                <div className="p-8 flex-1">
                                    <h3 className="text-[22px] font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#a7358d] transition-colors">{pkg.title}</h3>
                                    <p className="text-[#a7358d] font-bold text-[15px] mb-5 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                        </svg>
                                        {pkg.tests}
                                    </p>
                                    <p className="text-gray-500 text-[16px] mb-6 line-clamp-2 leading-relaxed h-[48px]">
                                        {pkg.desc}
                                    </p>

                                    {/* Feature List */}
                                    <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-xl">
                                        {pkg.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-green-600">
                                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6 border-t border-gray-100 flex items-center justify-between bg-white mt-auto">
                                    <div>
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="text-2xl font-black text-gray-900">₹{pkg.price}</span>
                                            <span className="text-gray-400 text-sm line-through font-medium">₹{pkg.originalPrice}</span>
                                        </div>
                                        <span className="text-green-700 text-[11px] font-bold uppercase tracking-wide">
                                            Save {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}%
                                        </span>
                                    </div>
                                    <button className="bg-white border-2 border-[#a7358d] text-[#a7358d] font-bold px-6 py-2.5 rounded-xl hover:bg-[#a7358d] hover:text-white transition-all shadow-sm hover:shadow-md active:scale-95">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. HOW IT WORKS SECTION */}
                <div className="mb-24 text-center">
                    <h2 className="text-[32px] font-bold text-gray-900 mb-4">How It Works</h2>
                    <p className="text-gray-500 text-lg mb-16 max-w-2xl mx-auto">Get your health checkups done in 3 simple steps from the comfort of your home.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
                        {/* Connecting Line (Mobile Hidden) */}
                        <div className="hidden md:block absolute top-[45px] left-[20%] right-[20%] h-[2px] bg-gray-200 -z-10"></div>

                        {/* Step 1 */}
                        <div className="flex flex-col items-center group">
                            <div className="w-[90px] h-[90px] bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center mb-6 relative z-10 group-hover:bg-[#a7358d] transition-colors duration-300">
                                <span className="text-3xl group-hover:text-white transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Book a Test</h3>
                            <p className="text-gray-500 leading-relaxed max-w-xs">Select your package and schedule a convenient time for sample collection.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center group">
                            <div className="w-[90px] h-[90px] bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center mb-6 relative z-10 group-hover:bg-[#a7358d] transition-colors duration-300">
                                <span className="text-3xl group-hover:text-white transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                    </svg>
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Sample Collection</h3>
                            <p className="text-gray-500 leading-relaxed max-w-xs">Our qualified professional will arrive at your doorstep for a hygienic sample pickup.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center group">
                            <div className="w-[90px] h-[90px] bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center mb-6 relative z-10 group-hover:bg-[#a7358d] transition-colors duration-300">
                                <span className="text-3xl group-hover:text-white transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Get Report</h3>
                            <p className="text-gray-500 leading-relaxed max-w-xs">Receive your NABL-certified smart report within 24 hours via email/app.</p>
                        </div>
                    </div>
                </div>

                {/* 3. WHY CHOOSE US */}
                <div className="mb-24 bg-[#fff5fa] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-[32px] font-bold text-gray-900 mb-6">Why Choose PharmEasy?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="text-[#a7358d] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h4 className="font-bold text-lg mb-1">NABL Certified</h4>
                                <p className="text-sm text-gray-500">Partnered with top-tier verified labs.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="text-[#a7358d] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h4 className="font-bold text-lg mb-1">On-Time Reports</h4>
                                <p className="text-sm text-gray-500">Guaranteed delivery within 24 hours.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="text-[#a7358d] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                </div>
                                <h4 className="font-bold text-lg mb-1">Expert Doctors</h4>
                                <p className="text-sm text-gray-500">Free consultation on report analysis.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="text-[#a7358d] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h4 className="font-bold text-lg mb-1">Best Prices</h4>
                                <p className="text-sm text-gray-500">Up to 70% off on packages.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. FAQ SECTION */}
                <div className="max-w-8xl mx-auto">
                    <h2 className="text-[32px] font-bold text-[#a7358d] text-center mb-10">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer" onClick={() => toggleFaq(index)}>
                                <div className="p-5 flex justify-between items-center bg-gray-50/50 hover:bg-gray-50 transition-colors">
                                    <h3 className="font-bold text-gray-900 text-lg">{faq.question}</h3>
                                    <span className={`text-[#a7358d] font-bold text-xl transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </div>
                                <div className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-5 text-gray-600 border-t border-gray-100 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Styles for glassmorphism animations */}
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float 6s ease-in-out infinite;
                    animation-delay: 3s;
                }
                .animate-spin-slow {
                    animation: spin 20s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>
        </div>
    );
}

