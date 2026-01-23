"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function MobileLocations() {
    const images = [
        "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6808b13bbcb888c4d4db24e2_Mahabalipuram-centre.jpg",
        "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6266c0710ff2828196269cbf_Center-OMR-01.jpg",
        "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6266c071b558335d725ca079_Center-OMR-02.jpg",
    ];

    const facilities = [
        { title: "NICU Beds", count: "10", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62a99ee2029d879a602807c7_03-NICU.svg" },
        { title: "Daycare", count: "3", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62a99fe3d02f162d029a1e83_05-Daycare.svg" },
        { title: "SICU Beds", count: "3", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62a99f0f0be452dc34fbb727_04-MICU.svg" },
        { title: "Lamaze", count: "1", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62a9a00f214b39fcba41d274_06-Lamaze.svg" },
        { title: "LDR", count: "2", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62a99ebcc358c25495b02b59_02-LDR.svg" },
        { title: "OT", count: "3", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62a99d85aa8e95317d6b756d_01-OT.svg" },
    ];

    const services = [
        { title: "Maternity", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/626529c9cef3790848d59ceb_Maternity.svg" },
        { title: "Gynaecology", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/626529d523fd2105261ab856_Gynaecology.svg" },
        { title: "Paediatrics", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/626529e10215f60f000ab2a0_Paediatrics.svg" },
        { title: "Radiology", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/690e019b48dfdeda858d944e_Radiology.svg" },
    ];

    return (
        <div className="w-full bg-[#f8f9fa] ">
            {/* Center Info Card */}
            <div className="bg-white rounded-b-3xl shadow-sm border-b border-gray-100 p-5 mb-4">
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-[20px] font-black text-[#30363c] leading-tight max-w-[80%]">Cloudnine Hospital - OMR</h2>
                    <div className="flex bg-green-50 px-2 py-1 rounded-lg items-center gap-1">
                        <span className="text-xs font-bold text-green-700">4.9</span>
                        <span className="text-green-700 text-[10px]">★</span>
                    </div>
                </div>
                <p className="text-gray-500 text-xs mb-6 leading-relaxed">
                    148, Old Mahabalipuram Rd, Mettukuppam, Thoraipakkam, Tamil Nadu 600097
                </p>

                {/* Primary Actions */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#fcebf5] text-[#a7358d] border border-[#fcebf5]">
                        <span className="font-bold text-sm">Book Appt</span>
                        <span className="text-[10px] opacity-80">Instant Confirm</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-white text-gray-700 border border-gray-200">
                        <span className="font-bold text-sm">Callback</span>
                        <span className="text-[10px] opacity-80">Request Call</span>
                    </button>
                </div>

                {/* Visual Directions */}
                <div className="rounded-xl overflow-hidden h-32 relative bg-gray-100 border border-gray-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7509536034154!2d80.2255!3d12.9225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzIxLjAiTiA4MMKwMTMnMzEuOCJF!5e0!3m2!1sen!2sin!4v1653300000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, opacity: 0.8 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                    <button className="absolute bottom-3 right-3 bg-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md text-gray-800 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        Directions
                    </button>
                </div>
            </div>

            {/* Gallery Slider */}
            <div className="pl-5 pb-6">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Center Gallery</h3>
                <div className="flex overflow-x-auto gap-3 pb-2 snap-x snap-mandatory scrollbar-hide pr-5">
                    {images.map((img, idx) => (
                        <div key={idx} className="shrink-0 w-[240px] snap-center rounded-xl overflow-hidden aspect-video relative shadow-sm border border-gray-100 bg-gray-50">
                            <Image src={img} alt="Center" fill className="object-contain" unoptimized />
                        </div>
                    ))}
                </div>
            </div>

            {/* Facilities Grid */}
            <div className="px-5 mb-8">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Our Facilities</h3>
                <div className="grid grid-cols-3 gap-3">
                    {facilities.map((fac, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-3 flex flex-col items-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100">
                            <div className="w-8 h-8 p-1.5 rounded-full bg-[#f8f9fa] mb-2 flex items-center justify-center">
                                <Image src={fac.icon} alt={fac.title} width={20} height={20} className="object-contain" unoptimized />
                            </div>
                            <span className="text-[#a7358d] font-black text-lg leading-none mb-1">{fac.count}</span>
                            <span className="text-gray-400 text-[9px] font-bold uppercase">{fac.title}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Services List */}
            <div className="px-5 mb-8">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Services</h3>
                <div className="grid grid-cols-2 gap-3">
                    {services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100">
                            <div className="w-8 h-8 rounded-full bg-[#fcebf5] flex items-center justify-center shrink-0">
                                <Image src={service.icon} alt={service.title} width={16} height={16} className="object-contain" unoptimized />
                            </div>
                            <span className="text-xs font-bold text-gray-700">{service.title}</span>
                        </div>
                    ))}
                </div>
                <button className="w-full py-3 mt-4 text-xs font-bold text-[#a7358d] bg-white border border-[#a7358d] rounded-xl border-dashed">
                    View All Services
                </button>
            </div>


            {/* Floating Bottom CTA */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-3 px-5 z-40 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                <button className="flex-1 py-3.5 rounded-xl border border-[#a7358d] text-[#a7358d] font-bold text-sm bg-white">
                    Call Center
                </button>
                <button className="flex-1 py-3.5 rounded-xl bg-[#a7358d] text-white font-bold text-sm shadow-md shadow-[#a7358d]/20">
                    Book Now
                </button>
            </div>
        </div>
    );
}
