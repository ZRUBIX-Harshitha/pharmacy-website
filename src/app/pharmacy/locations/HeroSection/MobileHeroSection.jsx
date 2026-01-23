"use client";
import React, { useState, useEffect } from "react";

const slides = [
    {
        id: 1,
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/695b9416fa2216acb65e2d58_CHN-LD-DEC-Web.jpg",
        alt: "CHN LD Dec Web"
    },
    {
        id: 2,
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/693fef6c837efad671d9e132_DrRahulYadav-TNG%26OMRwelcome-Web.jpg",
        alt: "Dr Rahul Yadav Welcome"
    },
    {
        id: 3,
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/68c59cbf94d4d9cb1e6828b8_Dr-Aravind-Ravichandran-welcome-Web.jpg",
        alt: "Dr Aravind Ravichandran Welcome"
    }
];

export default function MobileHeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full relative bg-white pb-4">
            {/* Header Text */}
            <div className="px-5 pt-6 pb-4">
                <h1 className="text-[22px] font-black text-[#a7358d] leading-tight mb-1">
                    Our Centers
                </h1>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                    World-class healthcare near you
                </p>
            </div>

            {/* Slider */}
            <div className="w-full relative overflow-hidden bg-gray-50 border-b border-gray-100">
                <div key={currentSlide} className="relative w-full">
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].alt}
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/20 px-2.5 py-1.5 rounded-full backdrop-blur-sm">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-5 bg-white' : 'w-1.5 bg-white/60'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
