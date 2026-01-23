"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
    { title: "Must haves", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png?f=png?dim=360x0" },
    { title: "Winter store", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b862c2d54aa633c19765eb6cf2bd6660.png?f=png?dim=360x0" },
    { title: "Vitamin store", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/71ab5b001d2c3ef699d6661a1c583998.jpg?f=jpg?dim=360x0" },
    { title: "Sexual wellness", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/23bec394cf943a83a0e946ded843a2a9.png?f=png?dim=360x0" },
    { title: "Personal care", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6cbaa600864b3bd491d96834bfb0547e.png?f=png?dim=360x0" },
    { title: "Health concerns", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/5a4fa9318fbb3b7daa2cfa6d293bea87.png?f=png?dim=360x0" },
    { title: "Health food and drinks", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6517ad5aaeca38e69936298d3e677a3a.png?f=png?dim=360x0" },
    { title: "Beauty", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b3b7e50dd83a31e8b86dbbf1b5c3aab2.jpg?f=jpg?dim=360x0" },
    { title: "Skin Care", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b17f1b5866723c1e9dc37970b7f43324.png?f=png?dim=360x0" },
    { title: "Home Care", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/27db727f1d5c3fd9b45b124ece3d7876.png?f=png?dim=360x0" },
    { title: "Ayurvedic Care", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b3b7e50dd83a31e8b86dbbf1b5c3aab2.jpg?f=jpg?dim=360x0" },
    { title: "Orthopaedics", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b17f1b5866723c1e9dc37970b7f43324.png?f=png?dim=360x0" },
];

export default function MobileFeaturedBrands() {
    return (
        <div className="py-6 px-4 font-sans bg-white border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-4 leading-tight">Featured Brands</h2>

            <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide -mx-4 px-4 no-scrollbar">
                {categories.map((item, index) => (
                    <Link key={index} href={`/category/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex-shrink-0 group flex flex-col items-center">
                        <div className="w-[110px] h-[110px] border border-gray-100 rounded-xl flex items-center justify-center p-2 bg-white mb-2 shadow-sm">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={90}
                                height={90}
                                className="object-contain w-full h-full"
                                unoptimized
                            />
                        </div>
                        <h3 className="text-gray-700 text-xs font-medium text-center leading-snug w-[110px]">
                            {item.title}
                        </h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}
