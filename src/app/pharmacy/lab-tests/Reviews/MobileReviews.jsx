"use client";
import React from 'react';

const reviewData = [
    { name: "Manali", date: "19 Jun", text: "Report ready within an hour. Fast service!" },
    { name: "Sana", date: "06 Jan", text: "Best service pharmacy. Highly recommended." },
    { name: "Rahul", date: "12 Aug", text: "Excellent timely reports." },
    { name: "Arjun", date: "03 Dec", text: "Home testing happened calmly at home." }
];

export default function MobileReviews() {
    return (
        <div className="bg-[#fcebf5] py-8 pb-10">
            <div className="px-5 mb-5">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#a7358d] font-bold text-lg">4.6</span>
                    <div className="flex">
                        {[1, 2, 3, 4].map(i => <span key={i} className="text-yellow-400 text-lg">★</span>)}
                        <span className="text-gray-300 text-lg">★</span>
                    </div>
                </div>
                <h2 className="text-gray-900 font-bold text-xl leading-tight">10M+ Happy Users</h2>
            </div>

            <div className="flex overflow-x-auto gap-4 px-5 pb-4 scrollbar-hide snap-x snap-mandatory">
                {reviewData.map((review, i) => (
                    <div key={i} className="min-w-[260px] snap-center bg-white rounded-xl p-5 shadow-sm border border-pink-100 flex flex-col justify-between h-[150px]">
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">"{review.text}"</p>
                        <div className="flex justify-between items-center mt-3 border-t border-gray-50 pt-3">
                            <span className="font-bold text-gray-800 text-sm">{review.name}</span>
                            <span className="text-xs text-gray-400">{review.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
