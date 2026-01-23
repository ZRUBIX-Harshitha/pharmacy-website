"use client";
import React from 'react';
import { FaGraduationCap, FaStar } from 'react-icons/fa';

const doctors = [
    {
        name: "Dr. Naseem Pervin",
        role: "Senior Obstetrician",
        exp: "18+ Years",
        qual: "MBBS, MD",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/61b9e03e1bc8e49308fa6d9a_Dr.%20Naseem%20Pervin%20%20-%20Obstetrics%20%26%20Gynecology%20-%20OMR%20-%20Cloudnine%20Hospitals.JPG"
    },
    {
        name: "Dr. Rijaphin R",
        role: "Gynecologist & Fertility",
        exp: "12+ Years",
        qual: "MS, DNB",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/61b9e1402cea69790fe9af3e_Dr.%20Rijaphin%20-%20Obstetrics%20%26%20Gynecology%20-%20OMR%20-%20Chennai%20-%20Cloudnine%20Hospitals.JPG"
    },
    {
        name: "Dr. Kavitha D",
        role: "Obstetrician",
        exp: "15+ Years",
        qual: "MBBS, DGO",
        image: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62a87f2e4340f64a80b148de_Dr.%20Kavitha%20D%20-%20Obstetrician%20%26%20Gynecologist%20-%20OMR-%20Chennai%20-%20Cloudnine%20Hospitals.jpg"
    },
];

export default function MobileOurStarDoctors() {
    return (
        <div className="w-full bg-[#f8f9fa] py-8 px-5">
            <div className="flex items-end justify-between mb-6">
                <div>
                    <span className="text-[#a7358d] text-[10px] font-bold uppercase tracking-wider block mb-1">Expert Care</span>
                    <h2 className="text-[20px] font-black text-[#30363c] leading-none">Meet Our Doctors</h2>
                </div>
                <button className="text-[#a7358d] text-[11px] font-bold border-b border-[#a7358d] border-dashed pb-0.5">View All Doctors</button>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide -mx-5 px-5">
                {doctors.map((doc, idx) => (
                    <div key={idx} className="shrink-0 w-[240px] snap-center bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col group border border-gray-100">
                        <div className="h-[220px] w-full bg-gray-100 relative overflow-hidden">
                            <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                <FaStar className="text-amber-400 text-[10px]" />
                                <span className="text-[10px] font-bold text-gray-800">4.9</span>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-1 relative">
                            {/* Floating exp badge */}
                            <div className="absolute -top-3 left-4 bg-[#30363c] text-white text-[9px] font-bold px-2 py-1 rounded-md shadow-sm">
                                {doc.exp} Exp
                            </div>

                            <h3 className="font-bold text-gray-900 text-[16px] mb-1 leading-tight mt-1">{doc.name}</h3>
                            <p className="text-[#a7358d] text-[11px] font-bold mb-3">{doc.role}</p>

                            <div className="flex items-center gap-2 text-gray-500 text-[11px] mb-4 bg-gray-50 p-2 rounded-lg">
                                <FaGraduationCap className="text-gray-400" />
                                <span className="font-medium">{doc.qual}</span>
                            </div>

                            <button className="mt-auto w-full py-2.5 rounded-xl bg-[#fcebf5] text-[#a7358d] text-[12px] font-bold hover:bg-[#a7358d] hover:text-white transition-all active:scale-95">
                                Book Appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
