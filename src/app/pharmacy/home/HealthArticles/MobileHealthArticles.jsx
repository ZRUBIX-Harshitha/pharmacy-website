"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
    {
        title: "Smog: What Is It, Causes and Ways To Protect Yourself From It",
        image: "https://pharmeasy.in/blog/wp-content/uploads/2025/12/smog.webp?dim=1440x0",
        link: "/blog/smog-causes-protection"
    },
    {
        title: "Everything to Know About GLP-1 Receptor Agonist and Its Role in Weight...",
        image: "https://pharmeasy.in/blog/wp-content/uploads/2025/12/glp-1-receptor-agonist.webp?dim=1440x0",
        link: "/blog/glp-1-receptor-agonist"
    },
    {
        title: "Caring for a Baby with Blocked Nose: Simple Tips for Parents",
        image: "https://pharmeasy.in/blog/wp-content/uploads/2025/11/baby.webp?dim=1440x0",
        link: "/blog/baby-blocked-nose"
    },
    {
        title: "Vomiting in Kids: Causes, Home Remedies & Treatment Options",
        image: "https://pharmeasy.in/blog/wp-content/uploads/2025/11/Vomiting-in-kids.webp?dim=1440x0",
        link: "/blog/vomiting-in-kids"
    },
    {
        title: "Rickets in Children: Causes, Symptoms, Types & Treatment",
        image: "https://pharmeasy.in/blog/wp-content/uploads/2025/11/rickets.webp?dim=1440x0",
        link: "/blog/rickets-in-children"
    },
    {
        title: "Loose Motion in Babies: Causes, Symptoms & Home Remedies",
        image: "https://pharmeasy.in/blog/wp-content/uploads/2025/11/loose-motion-in-babies.webp?dim=1440x0",
        link: "/blog/loose-motion-in-babies"
    },
    {
        title: "Oral Thrush in Babies: Causes, Symptoms & Treatment",
        image: "https://pharmeasy.in/blog/wp-content/uploads/2025/11/oral-thrush-in-babies.webp?dim=1440x0",
        link: "/blog/oral-thrush-babies"
    },
    {
        title: "Colic in Babies: Signs, Causes & Soothing Tips",
        image: "https://pharmeasy.in/blog/wp-content/uploads/2025/11/Colic-in-babies.webp?dim=1440x0",
        link: "/blog/colic-in-babies"
    },
    {
        title: "Essential Baby Care Tips for New Parents",
        image: "https://pharmeasy.in/blog/wp-content/uploads/2025/11/baby.webp?dim=1440x0",
        link: "/blog/baby-care-tips"
    },
    {
        title: "Understanding GLP-1 Receptor Agonists",
        image: "https://pharmeasy.in/blog/wp-content/uploads/2025/12/glp-1-receptor-agonist.webp?dim=1440x0",
        link: "/blog/glp-1-understanding"
    }
];

export default function MobileHealthArticles() {
    return (
        <div className="py-6 px-4 font-sans border-b border-gray-100 bg-white">
            <div className="flex justify-between items-end mb-4">
                <div>
                    <h2 className="text-lg font-bold text-gray-800 leading-tight mb-1">Health Articles</h2>
                    <p className="text-gray-500 text-xs">Get up-to-date on our latest health updates</p>
                </div>
                <Link href="/blog" className="text-[#a7358d] font-bold text-sm">
                    View All
                </Link>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide -mx-4 px-4 no-scrollbar">
                {articles.map((item, index) => (
                    <Link key={index} href={item.link} className="flex-shrink-0 w-[240px] flex flex-col group relative">
                        <div className="w-full h-[160px] rounded-lg overflow-hidden relative mb-3 border border-gray-200">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            {/* PharmEasy Logo Overlay */}
                            <div className="absolute top-2 right-2 z-10">
                                <div className="bg-black/30 backdrop-blur-[2px] px-1.5 py-0.5 rounded text-white text-[10px] font-bold flex items-center gap-1">
                                    <span className="w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center text-[7px] text-[#a7358d] font-bold">P</span>
                                    PharmEasy
                                </div>
                            </div>
                        </div>
                        <h3 className="text-gray-700 font-medium text-sm leading-snug line-clamp-2">
                            {item.title}
                        </h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}
