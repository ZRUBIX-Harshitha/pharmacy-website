"use client";
import React, { useRef } from 'react';
import { FaChevronDown, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const articles = [
    {
        id: 1,
        title: "What is the TMT Test?",
        author: "Apollo 24|7",
        date: "04.01.26",
        image: "https://images.apollo247.in/pd-cms/cms/2024-07/intenza-fitness-X3huptykYH0-unsplash%20(1)%20(1).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max"
    },
    {
        id: 2,
        title: "Apollo 24|7's WhatsApp To Order A Boon For Users!",
        author: "Apollo 24|7",
        date: "30.12.25",
        image: "https://images.apollo247.in/pd-cms/cms/2022-12/Banner_WTO.jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max"
    },
    {
        id: 3,
        title: "Top 10 Sources Of Vitamin B12-Rich Foods",
        author: "Apollo 24|7",
        date: "13.12.25",
        image: "https://images.apollo247.in/pd-cms/cms/2023-10/Blog%20B12.png?tr=q-80,f-webp,w-200,dpr-2,c-at_max"
    },
    {
        id: 4,
        title: "Worried About Your Dreadful Morning Breath? Tips...",
        author: "Apollo 24|7",
        date: "30.11.25",
        image: "https://images.apollo247.in/pd-cms/cms/2023-02/Shutterstock_1318611761.jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max"
    },
    {
        id: 5,
        title: "First Aid For Heart Attack",
        author: "Apollo 24|7",
        date: "28.11.25",
        image: "https://images.apollo247.in/pd-cms/cms/2023-07/Shutterstock_695929858.jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max"
    },
    {
        id: 6,
        title: "How to Increase WBC Count: Understanding the Causes...",
        author: "Apollo 24|7",
        date: "24.11.25",
        image: "https://images.apollo247.in/pd-cms/cms/2025-02/How%20to%20Increase%20Wbc%20Count%20(2).jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max"
    },
    {
        id: 7,
        title: "Understanding High Blood Pressure Risks",
        author: "Apollo 24|7",
        date: "20.11.25",
        image: "https://images.apollo247.in/pd-cms/cms/2023-08/Shutterstock_1050601700.jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max"
    },
    {
        id: 8,
        title: "Kidney Health: Signs used to ignore",
        author: "Apollo 24|7",
        date: "15.11.25",
        image: "https://images.apollo247.in/pd-cms/cms/2023-09/Shutterstock_507680212.jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max"
    },
    {
        id: 9,
        title: "Managing Morbid Obesity Effectively",
        author: "Apollo 24|7",
        date: "10.11.25",
        image: "https://images.apollo247.in/pd-cms/cms/2022-10/Morbid-Obesity.jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max"
    },
    {
        id: 10,
        title: "Best Skincare Routine for Oily Skin",
        author: "Apollo 24|7",
        date: "05.11.25",
        image: "https://images.apollo247.in/pd-cms/cms/2022-01/Oilyskin.jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max"
    },
    {
        id: 11,
        title: "Benefits of Regular Eye Checkups",
        author: "Apollo 24|7",
        date: "01.11.25",
        image: "https://images.apollo247.in/pd-cms/cms/2023-01/Shutterstock_1486995563.jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max"
    },
    {
        id: 12,
        title: "Understanding Hair Loss Causes",
        author: "Apollo 24|7",
        date: "28.10.25",
        image: "https://images.apollo247.in/pd-cms/cms/2023-01/Shutterstock_2107440569.jpg?tr=q-80,f-webp,w-200,dpr-2,c-at_max"
    }

];

const cities = [
    "Delhi", "Hyderabad", "Kolkata", "Chennai",
    "Bengaluru", "Noida", "Mumbai", "Pune",
    "Gurgaon", "Vellore", "Ghaziabad", "Guwahati"
];

export default function City() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300; // Adjust scroll distance
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="w-full bg-white pb-16 font-sans">
            <div className="w-full max-w-[1550px] mx-auto px-4 lg:px-8">

                {/* Health Articles Section */}
                <div className="mb-14 relative group/carousel"> {/* Added group for hover visibility if needed */}
                    <div className="flex justify-between items-end mb-6">
                        <h2 className="text-[22px] font-bold text-[#1a1a1a]">Health Articles For You (30)</h2>
                        <button className="text-sm font-bold text-[#0e6f85] hover:text-[#0b5c6e] transition-colors">View All</button>
                    </div>

                    {/* Left Navigation Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 translate-x-[-50%] bg-white border border-gray-100 shadow-md rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[#0e6f85] hover:shadow-lg transition-all opacity-0 group-hover/carousel:opacity-100 lg:translate-x-[-15px]"
                        aria-label="Scroll left"
                    >
                        <FaChevronLeft />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 pb-6 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {articles.map((article) => (
                            <div key={article.id} className="min-w-[280px] w-[280px] flex flex-col gap-3 group cursor-pointer">
                                <div className="rounded-xl overflow-hidden h-[160px] w-full relative">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-[15px] font-bold text-[#1a1a1a] leading-snug line-clamp-2 mb-2 group-hover:text-[#0e6f85] transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-xs text-[#666] font-medium">
                                        By {article.author} - {article.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Navigation Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-[50%] bg-white border border-gray-100 shadow-md rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[#0e6f85] hover:shadow-lg transition-all opacity-0 group-hover/carousel:opacity-100 lg:translate-x-[15px]"
                        aria-label="Scroll right"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                {/* Find Doctors by City Section */}
                <div>
                    <h2 className="text-[18px] font-bold text-[#1a1a1a] mb-6">Find Doctors by City</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
                        {cities.map((city, index) => (
                            <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2 cursor-pointer group">
                                <span className="text-[15px] text-[#4a4a4a] group-hover:text-[#0e6f85] font-medium transition-colors">{city}</span>
                                <FaChevronDown className="text-gray-400 text-xs group-hover:text-[#0e6f85] transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
