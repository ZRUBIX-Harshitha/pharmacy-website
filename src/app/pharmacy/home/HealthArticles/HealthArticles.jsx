"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

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
        image: "https://pharmeasy.in/blog/wp-content/uploads/2025/11/baby.webp?dim=1440x0", // Swapped to match screenshot order likely
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
        image: "https://pharmeasy.in/blog/wp-content/uploads/2025/12/glp-1-receptor-agonist.webp?dim=1440x0", // Duplicate image
        link: "/blog/glp-1-understanding"
    }
];

export default function HealthArticles() {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 320; // Card width + gap
            if (direction === "left") {
                current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <div className="py-10 px-6 lg:px-10 max-w-[1600px] mx-auto font-sans">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h2 className="text-[26px] font-bold text-gray-800 leading-tight mb-2">Health Articles</h2>
                    <p className="text-gray-500 text-[16px]">Get up-to-date on our latest health updates</p>
                </div>
                <Link href="/blog" className="text-[#a7358d] font-bold text-[16px] hover:text-[#8e2d78] transition-colors mb-1">
                    View All
                </Link>
            </div>

            <div className="relative group/carousel">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth no-scrollbar"
                    style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
                >
                    {articles.map((item, index) => (
                        <Link key={index} href={item.link} className="flex-shrink-0 w-[280px] lg:w-[290px] flex flex-col group cursor-pointer">
                            <div className="w-full h-[230px] rounded-lg overflow-hidden relative mb-4 border border-gray-200">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    unoptimized
                                />
                                {/* PharmEasy Logo Overlay */}
                                <div className="absolute top-3 right-3 z-10">
                                    <div className="bg-black/30 backdrop-blur-[2px] px-2 py-1 rounded text-white text-xs font-bold flex items-center gap-1">
                                        <span className="w-3 h-3 bg-white rounded-full flex items-center justify-center text-[8px] text-[#a7358d] font-bold">P</span>
                                        PharmEasy
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-gray-700 font-medium text-[16px] leading-snug line-clamp-3 group-hover:text-[#a7358d] transition-colors">
                                {item.title}
                            </h3>
                        </Link>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute -left-4 top-[40%] -translate-y-1/2 w-10 h-10 bg-[#30363c] hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover/carousel:opacity-100 z-10 disabled:opacity-0"
                    aria-label="Previous articles"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="absolute -right-4 top-[40%] -translate-y-1/2 w-10 h-10 bg-[#30363c] hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover/carousel:opacity-100 z-10"
                    aria-label="Next articles"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

            </div>
        </div>
    );
}
