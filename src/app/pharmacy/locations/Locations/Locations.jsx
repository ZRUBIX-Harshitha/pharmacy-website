"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Locations() {
    const [activeTab, setActiveTab] = useState("Photo");
    const [activeFacilityTab, setActiveFacilityTab] = useState("Medical facilities");
    const [mainImage, setMainImage] = useState("https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6808b13bbcb888c4d4db24e2_Mahabalipuram-centre.jpg");

    const thumbs = [
        "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6266c0710ff2828196269cbf_Center-OMR-01.jpg",
        "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6266c071b558335d725ca079_Center-OMR-02.jpg",
        "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6266c071800e594378b1e067_Center-OMR-03.jpg",
        "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6266c07182be7acea678b8b9_Center-OMR-04.jpg",
        "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6266c071fe927190458db363_Center-OMR-05.jpg",
        "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6266c07127542726f4afef0f_Center-OMR-06.jpg",
        "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6266c071c6a6684736d66c51_Center-OMR-07.jpg",
        "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6266c071900de453581285d4_Center-OMR-08.jpg",
    ];

    const facilities = [
        { title: "Level 3 NICU Beds", count: "10", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62a99ee2029d879a602807c7_03-NICU.svg" },
        { title: "Daycare Beds", count: "3", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62a99fe3d02f162d029a1e83_05-Daycare.svg" },
        { title: "SICU Beds", count: "3", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62a99f0f0be452dc34fbb727_04-MICU.svg" },
        { title: "Lamaze Room", count: "1", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62a9a00f214b39fcba41d274_06-Lamaze.svg" },
        { title: "LDR Rooms", count: "2", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62a99ebcc358c25495b02b59_02-LDR.svg" },
        { title: "Operation Theatres", count: "3", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62a99d85aa8e95317d6b756d_01-OT.svg" },
    ];

    const services = [
        { title: "Maternity", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/626529c9cef3790848d59ceb_Maternity.svg" },
        { title: "Gynaecology", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/626529d523fd2105261ab856_Gynaecology.svg" },
        { title: "Fertility", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/626529d523fd2105261ab856_Gynaecology.svg" }, // Duplicate icon provided
        { title: "Paediatric Care", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/626529e10215f60f000ab2a0_Paediatrics.svg" },
        { title: "NICU", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/6899bbe81c91b27e625019af_NICU.svg" },
        { title: "PICU", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/68d918d8d7a0c86eca25794f_PICU.svg" },
        { title: "Radiology", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/690e019b48dfdeda858d944e_Radiology.svg" },
        { title: "Physiotherapy", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62652a25beb21aea4f1f7317_Physiotherapy.svg" },
        { title: "Nutrition and Dietetics", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62652a3323fd21ce0f1abc1c_Nutrition.svg" },
        { title: "Breastfeeding Support", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62652a4ea9da5ba9882ca14d_Breastfeeding.svg" },
        { title: "Allied Services", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62652a4452d56e534ec10fcd_Allied-Services.svg" },
        { title: "Stem Cell Banking", icon: "https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/62652a080f3146114eacf18a_Stem-Cell-Banking.svg" },
    ];

    return (
        <div className="w-full bg-[#f4f6f8] min-h-screen">
            <div className="w-full max-w-[1550px] mx-auto px-4 lg:px-10 py-10 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-10 items-start">

                    {/* Sidebar - Sticky */}
                    <div className="w-full lg:w-[28%] shrink-0 flex flex-col gap-6 sticky top-28 h-fit z-10 text-center">
                        <button className="w-full py-4 px-6 rounded-xl text-white font-bold text-lg text-center transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
                            style={{ background: 'linear-gradient(135deg, #a7358d 0%, #8a2b75 100%)' }}>
                            Book An Appointment
                        </button>
                        <button className="w-full py-4 px-6 rounded-xl border-2 font-bold text-lg text-center transition-all shadow-sm hover:shadow-md hover:bg-white bg-white/50 backdrop-blur-sm"
                            style={{ borderColor: '#a7358d', color: '#a7358d' }}>
                            Request A Callback
                        </button>

                        <div className="w-full rounded-2xl overflow-hidden shadow-2xl mt-4 bg-white border border-gray-100">
                            {/* Using the mobile image which is portrait oriented */}
                            <div className="relative aspect-[3/4] w-full group">
                                <img
                                    src="https://cdn.prod.website-files.com/5ee7039040ea6efb80d7521c/693fef7047f20a07b3834e2a_DrRahulYadav-TNG%26OMRwelcome-Mobile.jpg"
                                    alt="Welcome Dr Rahul Yadav"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 w-full lg:w-[72%]">
                        <h1 className="text-3xl lg:text-4xl font-extrabold mb-8 leading-tight tracking-tight" style={{ color: '#a7358d' }}>
                            Best Pregnancy Hospital in Old Mahabalipuram Road (OMR), Chennai
                        </h1>

                        {/* Tabs */}
                        <div className="flex items-center gap-4 mb-8 border-b border-gray-200">
                            {["Photo", "Video", "360° Video"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 text-base font-bold transition-all relative border-b-2 ${activeTab === tab ? 'text-[#a7358d] border-[#a7358d]' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Gallery Section - Improved Alignment */}
                        <div className="w-full mb-12 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
                            <div className="w-full aspect-video rounded-2xl overflow-hidden mb-4 bg-gray-50 border border-gray-100 relative">
                                <img
                                    src={mainImage}
                                    alt="Main Center View"
                                    className="w-full h-full object-contain bg-gray-50"
                                />
                            </div>
                            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
                                {thumbs.map((thumb, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setMainImage(thumb)}
                                        className={`cursor-pointer rounded-lg overflow-hidden h-16 w-full border-2 transition-all duration-200 ${mainImage === thumb ? 'border-[#a7358d] ring-2 ring-[#a7358d]/20' : 'border-transparent hover:border-gray-300 opacity-90 hover:opacity-100'}`}
                                    >
                                        <img src={thumb} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map Section - Refined */}
                        <div className="w-full rounded-3xl border border-gray-100 p-8 mb-12 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-full h-[300px] bg-gray-50 rounded-2xl mb-6 overflow-hidden relative border border-gray-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7509536034154!2d80.2255!3d12.9225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzIxLjAiTiA4MMKwMTMnMzEuOCJF!5e0!3m2!1sen!2sin!4v1653300000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                                <div>
                                    <h3 className="font-black text-gray-900 text-xl lg:text-2xl mb-3">Cloudnine Hospital - OMR</h3>
                                    <p className="text-gray-500 text-base mb-6 max-w-lg leading-relaxed font-medium">148, Old Mahabalipuram Rd, Mettukuppam, Thoraipakkam, Tamil Nadu 600097</p>
                                    <div className="flex flex-wrap items-center gap-4">
                                        <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-bold transition-all hover:bg-[#a7358d] hover:text-white hover:border-[#a7358d] hover:shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                            Get Direction
                                        </button>
                                        <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-bold transition-all hover:bg-[#a7358d] hover:text-white hover:border-[#a7358d] hover:shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                                            Call Now
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start lg:items-end gap-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6" />
                                        <div className="flex items-baseline gap-1">
                                            <span className="font-black text-gray-900 text-2xl">4.9</span>
                                            <span className="text-gray-400 text-sm">/ 5</span>
                                        </div>
                                    </div>
                                    <div className="flex text-amber-400 text-lg tracking-tight">★★★★★</div>
                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">3,102 Verified Reviews</span>
                                </div>
                            </div>
                        </div>

                        {/* Facilities Section - Neat Grid */}
                        <div className="w-full mb-16">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-extrabold text-[#a7358d]">Our Facilities</h3>
                                <div className="flex bg-gray-100 p-1 rounded-lg">
                                    {["Medical facilities", "Rooms"].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveFacilityTab(tab)}
                                            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${activeFacilityTab === tab ? 'bg-white text-[#a7358d] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                                {facilities.map((fac, idx) => (
                                    <div key={idx} className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#a7358d]/30 transition-all duration-300 group h-full">
                                        <div className="w-16 h-16 p-3 rounded-2xl bg-[#fdf2f8] mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                                            <img src={fac.icon} alt={fac.title} className="w-full h-full object-contain filter group-hover:brightness-110" />
                                        </div>
                                        <h4 className="font-black text-3xl mb-1 text-gray-800 group-hover:text-[#a7358d] transition-colors">{fac.count}</h4>
                                        <p className="text-gray-500 text-sm font-bold uppercase tracking-wide">{fac.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Specialties Section - Clean List */}
                        <div className="w-full">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-[#a7358d]/10 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#a7358d]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </div>
                                <h3 className="text-2xl font-extrabold text-gray-900">Specialities & Services</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {services.map((service, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#a7358d]/30 transition-all cursor-default group">
                                        <div className="w-10 h-10 shrink-0 p-2 rounded-full bg-gray-50 group-hover:bg-[#a7358d] transition-colors flex items-center justify-center">
                                            <img src={service.icon} alt={service.title} className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert transition-all" />
                                        </div>
                                        <span className="text-gray-700 font-bold text-[15px] group-hover:text-[#a7358d] transition-colors">{service.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
