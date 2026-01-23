"use client";
import React from 'react';

const packages = [
    { title: "Apartment Suite", image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/67792979201503e26f0936ad_01-TNS.jpg" },
    { title: "Signature Room", image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6509559063fe4ef34e1ab66f_Untitled-1.jpg" },
    { title: "Luxury Room", image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6509557d0c2ba453289d3a8b_1.jpg" }
];

export default function MobilePackages() {
    return (
        <div className="bg-[#f4f6f8] py-8 pb-10">
            <div className="px-5 mb-5">
                <h2 className="text-[#a7358d] font-bold text-xl mb-1">Maternity Packages</h2>
                <p className="text-gray-500 text-xs">Comfortable stays for your journey</p>
            </div>

            <div className="flex overflow-x-auto gap-4 px-5 pb-4 scrollbar-hide snap-x snap-mandatory">
                {packages.map((pkg, index) => (
                    <div key={index} className="min-w-[220px] snap-center bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                        <div className="h-[140px] w-full">
                            <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-3">
                            <h4 className="text-gray-800 font-bold text-sm leading-tight">{pkg.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
