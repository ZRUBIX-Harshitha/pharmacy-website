"use client";
import React, { useState } from "react";
import Image from "next/image";

const paymentPartners = [
    { name: "GPay", url: "https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0" },
    { name: "Paytm", url: "https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0" },
    { name: "PhonePe", url: "https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0" },
    { name: "Amazon", url: "https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0" },
    { name: "Mobikwik", url: "https://assets.pharmeasy.in/apothecary/images/mobikwik.png?dim=1440x0" },
    { name: "Ola Money", url: "https://assets.pharmeasy.in/apothecary/images/olamoney.png?dim=1440x0" },
    { name: "Maestro", url: "https://assets.pharmeasy.in/apothecary/images/maestro.png?dim=1440x0" },
    { name: "Mastercard", url: "https://assets.pharmeasy.in/apothecary/images/mastercard.png?dim=1440x0" },
    { name: "Visa", url: "https://assets.pharmeasy.in/apothecary/images/visa.png?dim=1440x0" },
    { name: "RuPay", url: "https://assets.pharmeasy.in/apothecary/images/rupay.png?dim=1440x0" },
];

const socialLinks = [
    { name: "Instagram", url: "https://assets.pharmeasy.in/apothecary/images/Instagram.svg?dim=64x0" },
    { name: "Facebook", url: "https://assets.pharmeasy.in/apothecary/images/facebook.svg?dim=64x0" },
    { name: "Youtube", url: "https://assets.pharmeasy.in/apothecary/images/Youtube.svg?dim=64x0" },
    { name: "Twitter", url: "https://assets.pharmeasy.in/apothecary/images/Twitter.svg?dim=64x0" },
];

const footerSections = [
    {
        title: "Company",
        links: ["About Us", "Careers", "Blog", "Partner with PharmEasy", "Sell at PharmEasy"]
    },
    {
        title: "Our Services",
        links: ["Order Medicine", "Healthcare Products", "Lab Tests", "Find Nearest Collection Centre"]
    },
    {
        title: "Featured Categories",
        links: ["Must Haves", "Winter Store", "Vitamin Store", "Sexual Wellness", "Personal Care", "Health Concerns", "Health Food and Drinks", "Diabetes Essentials", "Heart Care", "Ayurvedic Care", "Mother and Baby Care", "Mobility & Elderly Care", "Sports Nutrition", "Healthcare Devices", "Skin Care", "Explore More"]
    },
    {
        title: "Need Help",
        links: ["Browse All Medicines", "Browse All Molecules", "Browse All Cities", "Browse All Stores", "FAQs"]
    },
    {
        title: "Policy Info",
        links: ["Editorial Policy", "Privacy Policy", "Vulnerability Disclosure Policy", "Terms and Conditions", "Declaration on Dark Pattern", "Customer Support Policy", "Return Policy", "Smartbuy Policy"]
    }
];

export default function MobileFooter() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    return (
        <div className="bg-[#f4f7fb] pt-8 pb-8 font-sans border-t border-gray-100">
            <div className="px-4">
                {/* Accordion Sections */}
                <div className="mb-8">
                    {footerSections.map((section, index) => (
                        <div key={index} className="border-b border-gray-200 last:border-0 pb-1">
                            <button
                                onClick={() => toggleSection(index)}
                                className="w-full flex justify-between items-center py-3 text-left"
                            >
                                <span className="font-bold text-gray-800 text-sm">{section.title}</span>
                                <span className="text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 transition-transform ${openSection === index ? 'rotate-180' : ''}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </button>
                            {openSection === index && (
                                <ul className="space-y-2 pb-3 pl-1 text-[13px] text-[#4f585e] animate-fadeIn">
                                    {section.links.map((link, i) => (
                                        <li key={i}><a href="#" className="block py-0.5 active:text-[#a7358d]">{link}</a></li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                {/* Social Links */}
                <div className="mb-8">
                    <h3 className="text-gray-800 font-bold mb-4 text-sm">Follow us on</h3>
                    <div className="flex gap-4">
                        {socialLinks.map((social, index) => (
                            <a key={index} href="#" className="active:scale-95 transition-transform">
                                <div className="w-[30px] h-[30px] relative">
                                    <Image
                                        src={social.url}
                                        alt={social.name}
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Payment Partners */}
                <div className="mb-6">
                    <h3 className="text-gray-800 font-bold mb-4 text-sm">Our Payment Partners</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-4 items-center">
                        {paymentPartners.map((partner, index) => (
                            <div key={index} className="relative h-5 w-10">
                                <Image
                                    src={partner.url}
                                    alt={partner.name}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-gray-400 text-xs font-medium text-center mt-8 border-t border-gray-200 pt-6">
                    © 2026 PharmEasy. All Rights Reserved
                </div>
            </div>
        </div>
    );
}
