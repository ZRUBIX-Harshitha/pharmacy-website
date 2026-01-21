"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const labTests = [
    {
        title: "Healthy 2026 Full Body Checkup",
        description: "Diagnostic tool for screening and monitoring of your health",
        price: "₹1449",
        mrp: "₹3599",
        discount: "60% OFF",
        bgColor: "bg-[#f2fcfc]", // Light cyan/blue
        image: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/4ff607383fad35e4af5639c3e7709734.png?dim=256x0",
        link: "/lab-tests/healthy-2026"
    },
    {
        title: "Diabetes Care",
        description: "Specially designed package to cover the preventive care aspects for diabetics",
        price: "₹799",
        mrp: "₹1399",
        discount: "43% OFF",
        bgColor: "bg-[#fffbf0]", // Light beige/yellow
        image: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/7e6ed82a2c373d1db2ea81a09e2fbb4c.png?dim=256x0",
        link: "/lab-tests/diabetes-care"
    },
    {
        title: "Basic Health Checkup",
        description: "Assesses health of 47 essential body parameters",
        price: "₹1049",
        mrp: "₹2249",
        discount: "53% OFF",
        bgColor: "bg-[#f2fcfc]",
        image: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/7e6ed82a2c373d1db2ea81a09e2fbb4c.png?dim=256x0",
        link: "/lab-tests/basic-health"
    },
    {
        title: "Aarogyam Full Body Checkup with Vitamins",
        description: "Comprehensive health checkup including Vitamin profile for overall wellness",
        price: "₹2499",
        mrp: "₹4599",
        discount: "46% OFF",
        bgColor: "bg-[#fffbf0]",
        image: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/f39e65011d9439e28c6500a1e444735e.png?dim=256x0",
        link: "/lab-tests/aarogyam-full-body"
    }
];

export default function FrequentlyBookedLabTests() {
    return (
        <div className="py-8 px-6 lg:px-10 max-w-[1600px] mx-auto font-sans">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-[26px] font-bold text-gray-800">Frequently Booked Lab Tests</h2>
                <Link href="/lab-tests" className="text-[#a7358d] font-bold text-[16px] hover:underline">
                    View All
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {labTests.map((test, index) => (
                    <Link key={index} href={test.link} className={`block rounded-xl overflow-hidden ${test.bgColor} hover:shadow-lg transition-shadow duration-300 relative min-h-[220px] p-5 group`}>
                        {/* Discount Tag */}
                        <div className="inline-block bg-[#f47779] text-white text-[11px] font-bold px-2 py-1 rounded mb-3">
                            {test.discount}
                        </div>

                        {/* Title */}
                        <h3 className="text-gray-800 font-bold text-[16px] leading-tight mb-2 min-h-[40px] line-clamp-2">
                            {test.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-500 text-[13px] leading-relaxed mb-4 line-clamp-3 min-h-[60px]">
                            {test.description}
                        </p>

                        <div className="flex items-end justify-between mt-auto">
                            {/* Price Section */}
                            <div className="flex flex-col mb-1 relative z-10">
                                <span className="text-gray-400 text-[14px] line-through font-medium leading-none mb-1">
                                    {test.mrp}
                                </span>
                                <span className="text-gray-800 text-[20px] font-bold leading-none">
                                    {test.price}
                                </span>
                            </div>

                            {/* Image */}
                            <div className="absolute bottom-0 right-0 w-[100px] h-[100px]">
                                <Image
                                    src={test.image}
                                    alt={test.title}
                                    width={100}
                                    height={100}
                                    className="object-contain w-full h-full"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
