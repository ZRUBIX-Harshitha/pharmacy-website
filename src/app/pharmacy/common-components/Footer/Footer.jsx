"use client";
import React from "react";
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

export default function Footer() {
    return (
        <div className="bg-[#f4f7fb] pt-16 pb-10 font-sans">
            <div className="max-w-[1700px] mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {/* Column 1 */}
                    <div>
                        <div className="mb-10">
                            <h3 className="text-gray-800 font-bold mb-6 text-[18px]">Company</h3>
                            <ul className="space-y-3 text-[#4f585e] text-[16px]">
                                <li><a href="#" className="hover:text-gray-900 transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Partner with PharmEasy</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Sell at PharmEasy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gray-800 font-bold mb-6 text-[18px]">Our Services</h3>
                            <ul className="space-y-3 text-[#4f585e] text-[16px]">
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Order Medicine</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Healthcare Products</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Lab Tests</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Find Nearest Collection Centre</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-gray-800 font-bold mb-6 text-[18px]">Featured Categories</h3>
                        <ul className="space-y-3 text-[#4f585e] text-[16px]">
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Must Haves</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Winter Store</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Vitamin Store</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Sexual Wellness</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Personal Care</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Health Concerns</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Health Food and Drinks</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Diabetes Essentials</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Heart Care</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Ayurvedic Care</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Mother and Baby Care</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Mobility & Elderly Care</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Sports Nutrition</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Healthcare Devices</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Skin Care</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Explore More</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <div className="mb-10">
                            <h3 className="text-gray-800 font-bold mb-6 text-[18px]">Need Help</h3>
                            <ul className="space-y-3 text-[#4f585e] text-[16px]">
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Browse All Medicines</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Browse All Molecules</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Browse All Cities</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Browse All Stores</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">FAQs</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gray-800 font-bold mb-6 text-[18px]">Policy Info</h3>
                            <ul className="space-y-3 text-[#4f585e] text-[16px]">
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Editorial Policy</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Vulnerability Disclosure Policy</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Terms and Conditions</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Declaration on Dark Pattern</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Customer Support Policy</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Return Policy</a></li>
                                <li><a href="#" className="hover:text-gray-900 transition-colors">Smartbuy Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 4 - Social Links */}
                    <div>
                        <h3 className="text-gray-800 font-bold mb-6 text-[18px]">Follow us on</h3>
                        <div className="flex gap-5">
                            {socialLinks.map((social, index) => (
                                <a key={index} href="#" className="hover:scale-110 transition-transform">
                                    <div className="w-[35px] h-[35px] relative">
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
                </div>

                {/* Payment Partners & Copyright */}
                <div className="mb-10">
                    <h3 className="text-gray-800 font-bold mb-6 text-[18px]">Our Payment Partners</h3>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <div className="flex flex-wrap gap-x-10 gap-y-6 items-center">
                            {paymentPartners.map((partner, index) => (
                                <div key={index} className="relative h-7 w-14 sm:w-[70px]">
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

                        {/* Copyright */}
                        <div className="text-gray-500 text-[15px] font-medium whitespace-nowrap">
                            © 2026 PharmEasy. All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
