"use client";
import React, { useRef } from "react";

const testimonials = [
    {
        name: "Niti Rohan",
        date: "December 11, 2024",
        text: "I ordered my dad’s heart medication through the app late in the evening and to my surprise, it was delivered the next morning. The process was really smooth, and I even got a good discount. Making repeat orders is even more convenient.",
    },
    {
        name: "Yogesh Shukla",
        date: "January 10, 2025",
        text: "I had mistakenly ordered the wrong strip of tablets and thought I’d have to go through a lot of hassle to return it, but the customer support made it super easy. They arranged a return pickup and my refund was processed in just 2 days.",
    },
    {
        name: "Anuj Kumar",
        date: "March 12, 2025",
        text: "PharmEasy is the best application for ordering medicines and lab tests. I have been using it for the last 5 years. The customer support is also good.",
    },
    {
        name: "Mehabub",
        date: "April 3, 2025",
        text: "Excellent service and timely delivery. The app is very user friendly and the discounts are great. Highly recommended for all your medical needs.",
    },
    {
        name: "Rajesh Singh",
        date: "April 15, 2025",
        text: "Very reliable app for medicine delivery. I truly appreciate the efforts made by the team to ensure medicines reach on time.",
    }
];

export default function OurCustomers() {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 400;
            if (direction === "left") {
                current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <div className="py-12 px-6 lg:px-10 max-w-[1600px] mx-auto font-sans">
            <h2 className="text-[26px] font-bold text-gray-800 mb-8">What Our Customers have to Say</h2>

            <div className="relative group/carousel">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth no-scrollbar"
                    style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
                >
                    {testimonials.map((item, index) => (
                        <div key={index} className="flex-shrink-0 w-[350px] md:w-[400px] flex flex-col">
                            <div className="mb-5 pl-1">
                                <h3 className="font-bold text-[#4f585e] text-[18px] mb-1">{item.name}</h3>
                                <p className="text-[#8e9ca7] text-[14px]">{item.date}</p>
                            </div>

                            <div className="p-8 bg-[#fcebf5] rounded-[20px] relative flex-grow min-h-[290px] border border-transparent hover:border-[#f8d7e9] transition-colors duration-300">
                                {/* Quote Icon */}
                                <div className="text-[#a7358d] text-[50px] leading-none font-serif absolute top-7 left-7 opacity-40">
                                    “
                                </div>

                                <p className="text-[#4f585e] text-[16px] leading-[1.6] relative z-10 mt-8 font-medium">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#30363c] hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover/carousel:opacity-100 z-20 disabled:opacity-0"
                    aria-label="Previous testimonials"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#30363c] hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover/carousel:opacity-100 z-20"
                    aria-label="Next testimonials"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
