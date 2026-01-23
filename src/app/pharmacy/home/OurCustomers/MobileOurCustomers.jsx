"use client";
import React from 'react';

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

export default function MobileOurCustomers() {
    return (
        <div className="py-8 px-4 font-sans bg-white border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-6 leading-tight">What Our Customers have to Say</h2>

            <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide -mx-4 px-4 no-scrollbar">
                {testimonials.map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-[280px] flex flex-col">
                        <div className="mb-3 pl-1">
                            <h3 className="font-bold text-[#4f585e] text-base mb-0.5">{item.name}</h3>
                            <p className="text-[#8e9ca7] text-xs">{item.date}</p>
                        </div>

                        <div className="p-5 bg-[#fcebf5] rounded-xl relative flex-grow min-h-[180px] border border-transparent">
                            {/* Quote Icon */}
                            <div className="text-[#a7358d] text-4xl leading-none font-serif absolute top-4 left-4 opacity-40">
                                “
                            </div>

                            <p className="text-[#4f585e] text-sm leading-relaxed relative z-10 mt-6 font-medium">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
