"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full overflow-hidden">

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 hover:scale-110 transition-transform bg-white/50 hover:bg-white/80 rounded-full p-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 lg:w-8 lg:h-8" style={{ color: '#a7358d' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 hover:scale-110 transition-transform bg-white/50 hover:bg-white/80 rounded-full p-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 lg:w-8 lg:h-8" style={{ color: '#a7358d' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>


            {/* Content Wrapper - Image Only Full Width */}
            <div className="w-full relative bg-[#f4f6f8]">
                <div className="w-full relative">
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].alt}
                        className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
                    />
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8' : ''}`}
                        style={{ backgroundColor: currentSlide === index ? '#a7358d' : 'rgba(167, 53, 141, 0.4)' }}
                    />
                ))}
            </div>
        </section>
    );
}
