"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
    { title: "Must haves", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png?f=png?dim=360x0" },
    { title: "Winter store", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b862c2d54aa633c19765eb6cf2bd6660.png?f=png?dim=360x0" },
    { title: "Vitamin store", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/71ab5b001d2c3ef699d6661a1c583998.jpg?f=jpg?dim=360x0" },
    { title: "Personal care", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6cbaa600864b3bd491d96834bfb0547e.png?f=png?dim=360x0" },
    { title: "Health concerns", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/5a4fa9318fbb3b7daa2cfa6d293bea87.png?f=png?dim=360x0" },
    { title: "Health food and drinks", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6517ad5aaeca38e69936298d3e677a3a.png?f=png?dim=360x0" },
    { title: "Beauty", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b3b7e50dd83a31e8b86dbbf1b5c3aab2.jpg?f=jpg?dim=360x0" },
    { title: "Skin Care", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b17f1b5866723c1e9dc37970b7f43324.png?f=png?dim=360x0" },
    { title: "Home Care", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/27db727f1d5c3fd9b45b124ece3d7876.png?f=png?dim=360x0" },
    { title: "Ayurvedic Care", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b3b7e50dd83a31e8b86dbbf1b5c3aab2.jpg?f=jpg?dim=360x0" },
    { title: "Orthopaedics", image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b17f1b5866723c1e9dc37970b7f43324.png?f=png?dim=360x0" },
];

export default function MobileShopbyCategories() {
    return (
        <div className="py-6 px-4 bg-white border-t border-b border-gray-100 font-sans">
            <h2 className="text-lg font-bold text-gray-800 mb-4 leading-tight">Shop by Categories</h2>

            <div className="grid grid-cols-3 gap-x-3 gap-y-6">
                {categories.map((item, index) => (
                    <Link key={index} href={`/category/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex flex-col items-center group">
                        <div className="w-full aspect-square border border-gray-200 rounded-xl flex items-center justify-center p-2 bg-white shadow-sm mb-2 transition-transform active:scale-95">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={100}
                                height={100}
                                className="object-contain w-full h-full"
                                unoptimized
                            />
                        </div>
                        <h3 className="text-gray-700 text-xs font-medium text-center leading-snug line-clamp-2 min-h-[2.5em]">
                            {item.title}
                        </h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}
