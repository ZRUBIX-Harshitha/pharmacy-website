"use client";
import React from 'react';

const stories = [
    {
        type: "testimonial",
        name: "Mrs. Janki Bavle",
        baby: "Dr. Rijaphin R",
        location: "Old Mahabalipuram Road",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6933bd919ed2950471ac2298_Mrs.%20Janki%20Bavle.webp"
    },
    {
        type: "video",
        name: "Mrs. Madhumati",
        doctor: "Dr. Naseem Pervin",
        location: "Old Mahabalipuram Road",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/684973f3d19074808e2295dd_Mrs.%20Madhumati.webp"
    }
];

export default function MobileOurMomsBabies() {
    return (
        <div className="bg-white py-8 pb-12">
            <div className="px-5 mb-6 text-center">
                <h2 className="text-[#a7358d] font-bold text-xl mb-1">Our Moms & Babies</h2>
                <p className="text-gray-500 text-xs">Real stories from our happy customers</p>
            </div>

            <div className="flex overflow-x-auto gap-4 px-5 pb-4 scrollbar-hide snap-x snap-mandatory">
                {stories.map((story, index) => (
                    <div key={index} className="min-w-[280px] snap-center bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                        <div className="relative h-[180px]">
                            <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                            {story.type === 'video' && (
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a7358d" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold text-gray-900 text-base mb-1">{story.name}</h4>
                            <p className="text-[#a7358d] text-xs font-bold mb-2">{story.doctor || story.baby}</p>
                            <p className="text-gray-400 text-[10px]">{story.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
