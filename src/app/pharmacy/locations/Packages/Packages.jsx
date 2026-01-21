"use client";
import React from 'react';

const packages = [
    {
        title: "Apartment Suite Package - OMR",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/67792979201503e26f0936ad_01-TNS.jpg"
    },
    {
        title: "Signature Pregnancy Package/Room - OMR",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6509559063fe4ef34e1ab66f_Untitled-1.jpg"
    },
    {
        title: "Luxury Pregnancy Package/Room - OMR",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6509557d0c2ba453289d3a8b_1.jpg"
    }
];

export default function Packages() {
    return (
        <div className="w-full bg-[#f4f6f8] pb-16">
            <div className="w-full max-w-[1550px] mx-auto px-4 lg:px-10">

                <div className="text-center mb-10 pt-10">
                    <h2 className="text-lg md:text-xl text-[#d14da1] mb-2  font-medium">For a joyful birthing experience select your</h2>
                    <h3 className="text-3xl md:text-4xl font-bold" style={{ color: '#a7358d' }}>Packages</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div key={index} className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col group">
                            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="px-2 pb-4">
                                <h4 className="text-[#002f5b] font-bold text-xl leading-tight">
                                    {pkg.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
