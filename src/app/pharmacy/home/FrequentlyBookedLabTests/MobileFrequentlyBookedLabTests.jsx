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

export default function MobileFrequentlyBookedLabTests() {
    return (
        <div className="py-6 px-4 font-sans border-b border-gray-100 bg-white">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-800 leading-tight">Frequently Booked Lab Tests</h2>
                <Link href="/lab-tests" className="text-[#a7358d] font-bold text-sm">
                    View All
                </Link>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide -mx-4 px-4 no-scrollbar">
                {labTests.map((test, index) => (
                    <Link key={index} href={test.link} className={`flex-shrink-0 w-[260px] rounded-xl overflow-hidden ${test.bgColor} p-4 relative group block`}>
                        {/* Discount Tag */}
                        <div className="inline-block bg-[#f47779] text-white text-[10px] font-bold px-1.5 py-0.5 rounded mb-2">
                            {test.discount}
                        </div>

                        {/* Title */}
                        <h3 className="text-gray-800 font-bold text-sm leading-tight mb-1 min-h-[34px] line-clamp-2">
                            {test.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-500 text-xs leading-relaxed mb-8 line-clamp-2">
                            {test.description}
                        </p>

                        <div className="flex items-end justify-between mt-auto relative z-10 w-[60%]">
                            {/* Price Section */}
                            <div className="flex flex-col">
                                <span className="text-gray-400 text-xs line-through font-medium leading-none mb-0.5">
                                    {test.mrp}
                                </span>
                                <span className="text-gray-800 text-lg font-bold leading-none">
                                    {test.price}
                                </span>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="absolute bottom-0 right-0 w-[90px] h-[90px]">
                            <Image
                                src={test.image}
                                alt={test.title}
                                width={90}
                                height={90}
                                className="object-contain w-full h-full"
                                unoptimized
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
