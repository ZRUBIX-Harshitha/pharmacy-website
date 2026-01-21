"use client";
import React, { useState } from 'react';

const faqData = [
    {
        question: "How can I increase my chances of a safe delivery?",
        answer: "Regular antenatal checkups, following a healthy diet, staying active, and taking prescribed supplements can support a safe delivery. If you live in Chennai, you can get access to the best gynaecologist in OMR at Cloudnine, who ensures expert care throughout pregnancy."
    },
    {
        question: "When should a newborn have their first checkup?",
        answer: "A newborn should typically have their first checkup within 3 to 5 days after birth, or as advised by your pediatrician. Early checkups are crucial to monitor weight gain, feeding, and overall health."
    },
    {
        question: "Can a gynaecologist treat infertility?",
        answer: "Yes, gynaecologists can diagnose and treat many causes of infertility. They may prescribe medications, lifestyle changes, or refer you to a fertility specialist for advanced treatments like IVF if needed."
    },
    {
        question: "Is the NICU safe for babies?",
        answer: "Yes, the NICU (Neonatal Intensive Care Unit) is a highly specialized and safe environment designed to provide round-the-clock care for premature or ill newborns, utilizing advanced technology and expert medical staff."
    },
    {
        question: "Which is the best maternity hospital in Chennai, OMR, for delivery?",
        answer: "Cloudnine Hospitals is widely considered one of the best maternity hospitals in OMR, Chennai, known for its world-class facilities, experienced doctors, and comprehensive maternity care packages."
    },
    {
        question: "Where can I find a gynaecologist near me in OMR, Chennai?",
        answer: "You can find highly rated gynaecologists at Cloudnine Hospital on OMR, Chennai. It's recommended to check patient reviews and doctor credentials on our website to find the best match for your needs."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0); // Default first one open as per screenshot roughly? Or closed. Screenshot shows first one open.

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="w-full bg-[#f4f6f8] pb-16">
            <div className="w-full max-w-[1550px] mx-auto px-4 lg:px-10">

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#a7358d] mb-8">Frequently Asked Questions</h2>

                    <div className="space-y-0">
                        {faqData.map((item, index) => (
                            <div key={index} className="border-b border-gray-100 last:border-0">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between items-center py-6 text-left group focus:outline-none"
                                >
                                    <h3 className={`text-lg md:text-xl font-medium transition-colors ${openIndex === index ? 'text-[#a7358d]' : 'text-gray-700 group-hover:text-[#a7358d]'}`}>
                                        {item.question}
                                    </h3>
                                    <span className={`ml-4 flex-shrink-0 text-2xl font-light transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#a7358d]' : 'text-gray-400'}`}>
                                        {openIndex === index ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                        )}
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-gray-600 leading-relaxed text-[15px]">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
