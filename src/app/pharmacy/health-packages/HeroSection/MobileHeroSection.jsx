"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const packagesData = [
    {
        id: 1,
        title: "Comprehensive Full Body Checkup",
        tests: "89 Tests",
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
        tests: "45 Tests",
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
        tests: "62 Tests",
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
        tests: "35 Tests",
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
        tests: "74 Tests",
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
        tests: "12 Tests",
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

const trustIndicators = [
    { title: "100% Verified Labs", icon: "shield" },
    { title: "Free Sample Pickup", icon: "user" },
    { title: "Reports in 24 hrs", icon: "clock" }
];

const whyChoose = [
    { title: "NABL Certified", text: "Verified top-tier labs" },
    { title: "On-Time Reports", text: "Guaranteed 24h delivery" },
    { title: "Expert Doctors", text: "Free report consultation" },
    { title: "Best Prices", text: "Up to 70% off" }
];

export default function MobileHeroSection() {
    const [activeTab, setActiveTab] = useState("All");
    const [openFaq, setOpenFaq] = useState(null);

    const filteredPackages = packagesData.filter(pkg => activeTab === "All" || pkg.category === activeTab);

    return (
        <div className="w-full bg-[#f8f9fa] pb-10 font-sans">

            {/* 1. HERO BANNER */}
            <div className="bg-gradient-to-r from-[#eef4ff] to-[#fff0f5] pt-6 pb-12 px-5 rounded-b-[2rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#a7358d] opacity-[0.05] rounded-full blur-3xl pointer-events-none"></div>

                <span className="inline-block px-3 py-1 rounded-full bg-[#a7358d]/10 text-[#a7358d] font-bold text-[10px] tracking-wide mb-4 border border-[#a7358d]/20">
                    TRUSTED BY 2M+ FAMILIES
                </span>

                <h1 className="text-[#30363c] text-[28px] font-black leading-tight mb-3">
                    Smart Healthcare <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a7358d] to-[#70245e]">
                        for a Better You
                    </span>
                </h1>

                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    Premium full body checkups & health packages from NABL certified labs.
                </p>

                {/* Search Bar */}
                <div className="bg-white rounded-xl p-2.5 shadow-lg shadow-[#a7358d]/5 flex items-center gap-3 border border-gray-100 mb-8">
                    <div className="w-8 h-8 rounded-full bg-[#fcebf5] flex items-center justify-center text-[#a7358d] shrink-0">
                        <FaSearch className="text-xs" />
                    </div>
                    <input type="text" placeholder="Search 'Full Body Checkup'..." className="flex-1 outline-none text-[13px] font-medium text-gray-700 placeholder:text-gray-400" />
                </div>

                {/* Trust Indicators Scroll */}
                <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide -mx-5 px-5">
                    {trustIndicators.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100 min-w-[200px]">
                            <div className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center text-[#a7358d] shrink-0">
                                {item.icon === 'shield' && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>}
                                {item.icon === 'user' && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>}
                                {item.icon === 'clock' && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 2. PACKAGES & FILTERS */}
            <div className="px-5 mt-8">
                <h2 className="text-[#30363c] text-lg font-bold mb-4">Popular Packages</h2>

                {/* Category Filters */}
                <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-hide -mx-5 px-5 mb-2">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(cat)}
                            className={`px-4 py-1.5 rounded-full text-[13px] font-bold border whitespace-nowrap transition-colors
                                ${activeTab === cat
                                    ? "bg-[#a7358d] text-white border-[#a7358d]"
                                    : "bg-white text-gray-600 border-gray-200"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Packages List */}
                <div className="space-y-4">
                    {filteredPackages.map((pkg, index) => (
                        <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 relative overflow-hidden">
                            {pkg.popular && (
                                <div className="absolute top-0 right-0 bg-[#a7358d] text-white text-[9px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide">
                                    Best Seller
                                </div>
                            )}

                            <h3 className="font-bold text-gray-900 text-lg mb-1 pr-16 leading-tight">{pkg.title}</h3>
                            <p className="text-[#a7358d] text-xs font-bold mb-3 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#a7358d]"></span>
                                {pkg.tests}
                            </p>
                            <p className="text-gray-500 text-xs mb-4 leading-relaxed line-clamp-2">{pkg.desc}</p>

                            {/* Features Mini-list */}
                            <div className="bg-gray-50 rounded-lg p-3 mb-4 space-y-2">
                                {pkg.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-2.5 h-2.5 text-green-600">
                                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-[11px] text-gray-700 font-medium">{feature}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-between border-t border-gray-50 pt-3">
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-xl font-black text-gray-900 leading-none">₹{pkg.price}</span>
                                        <span className="text-gray-400 text-xs line-through">₹{pkg.originalPrice}</span>
                                    </div>
                                    <p className="text-green-600 text-[10px] font-bold mt-0.5">{pkg.discount}</p>
                                </div>
                                <button className="bg-white border border-[#a7358d] text-[#a7358d] px-5 py-2 rounded-lg text-xs font-bold uppercase hover:bg-[#a7358d] hover:text-white transition-colors active:scale-95">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. HOW IT WORKS */}
            <div className="mt-12 px-5 py-8 bg-white border-t border-gray-50">
                <h2 className="text-[#30363c] text-lg font-bold mb-6 text-center">How It Works</h2>
                <div className="relative pl-4 border-l-2 border-gray-100 space-y-8">
                    <div className="relative">
                        <div className="absolute -left-[23px] top-0 w-4 h-4 rounded-full bg-[#fcebf5] border-2 border-[#a7358d]"></div>
                        <h4 className="text-sm font-bold text-gray-900">1. Book a Test</h4>
                        <p className="text-xs text-gray-500 mt-1">Select package & schedule time.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[23px] top-0 w-4 h-4 rounded-full bg-[#fcebf5] border-2 border-[#a7358d]"></div>
                        <h4 className="text-sm font-bold text-gray-900">2. Sample Collection</h4>
                        <p className="text-xs text-gray-500 mt-1">Hygienic pickup from your home.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[23px] top-0 w-4 h-4 rounded-full bg-[#fcebf5] border-2 border-[#a7358d]"></div>
                        <h4 className="text-sm font-bold text-gray-900">3. Get Report</h4>
                        <p className="text-xs text-gray-500 mt-1">Digital report within 24 hours.</p>
                    </div>
                </div>
            </div>

            {/* 4. WHY CHOOSE US */}
            <div className="mt-2 px-5 py-8 bg-[#fff5fa]">
                <h2 className="text-[#30363c] text-lg font-bold mb-6 text-center">Why Choose Us?</h2>
                <div className="grid grid-cols-2 gap-3">
                    {whyChoose.map((item, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-[#a7358d] font-bold text-[13px] mb-1">{item.title}</h4>
                            <p className="text-[10px] text-gray-500 leading-tight">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 5. FAQs */}
            <div className="px-5 py-8">
                <h2 className="text-[#30363c] text-lg font-bold mb-5">Frequently Asked Questions</h2>
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full p-4 flex justify-between items-center text-left bg-gray-50/50"
                            >
                                <span className="font-bold text-gray-800 text-[13px] pr-4">{faq.question}</span>
                                {openFaq === index ? <FaChevronUp className="text-[#a7358d] text-xs shrink-0" /> : <FaChevronDown className="text-gray-400 text-xs shrink-0" />}
                            </button>
                            {openFaq === index && (
                                <div className="p-4 text-xs text-gray-600 border-t border-gray-100 leading-relaxed bg-white">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
