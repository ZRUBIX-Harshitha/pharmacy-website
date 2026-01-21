"use client";
import React from 'react';

const stories = [
    {
        type: "testimonial",
        name: "Mrs. Janki Bavle",
        baby: "Dr. Rijaphin R",
        location: "Old Mahabalipuram Road",
        quote: "We had a seamless experience at Cloudnine Hospital, Old Mahabalipuram Road. From day one, we consulted Dr. Rijaphin R, who took the time to answer all our questions. Our delivery experience was smooth and we never had to worry about anything. Thank you so much!",
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

export default function OurMomsBabies() {
    return (
        <div className="w-full pb-16">
            <div className="w-full max-w-[1550px] mx-auto px-4 lg:px-10">

                <div className="text-center mb-12 pt-10">
                    <h2 className="text-lg md:text-xl text-[#d14da1] mb-2 font-medium">Real Stories from</h2>
                    <h3 className="text-3xl md:text-4xl font-bold" style={{ color: '#a7358d' }}>Our Moms & Babies</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {stories.map((story, index) => (
                        <div key={index} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 relative overflow-hidden h-full min-h-[320px] flex flex-col justify-between hover:shadow-md transition-shadow">

                            {story.type === 'testimonial' ? (
                                <div className="h-full flex flex-col">
                                    {/* Image Thumbnail */}
                                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 group cursor-pointer bg-gray-100">
                                        <img src={story.image} alt={story.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex flex-col">
                                    {/* Video Thumbnail */}
                                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 group cursor-pointer bg-gray-100">
                                        <img src={story.image} alt={story.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a7358d" className="w-8 h-8">
                                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}

                            {/* Card Footer Info */}
                            <div className="mt-auto pt-4 border-t border-gray-50 flex items-end justify-between">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">{story.name}</h4>
                                    <p className="text-gray-500 text-sm">{story.doctor || story.baby}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-gray-500 text-sm">{story.location}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center w-full">

                    {/* Dots */}
                    <div className="flex gap-2">
                        <button className="w-2.5 h-2.5 rounded-full bg-[#a7358d]"></button>
                        <button className="w-2.5 h-2.5 rounded-full border border-[#a7358d]"></button>
                    </div>

                    {/* View All Button */}
                    <button className="px-8 py-3 rounded-full border border-[#a7358d] text-[#a7358d] font-bold hover:bg-[#a7358d] hover:text-white transition-all shadow-sm">
                        View all testimonials
                    </button>

                    {/* Arrow (Visual balance) */}
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#a7358d] hover:text-[#a7358d] cursor-pointer transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>

                </div>

            </div>
        </div>
    );
}
