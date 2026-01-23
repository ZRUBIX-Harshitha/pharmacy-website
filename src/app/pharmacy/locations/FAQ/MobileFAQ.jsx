"use client";
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
    { q: "Is 24/7 emergency service available at OMR center?", a: "Yes, our OMR center is fully equipped to handle maternity and pediatric emergencies round the clock with dedicated specialists on call." },
    { q: "Do you have parking facilities?", a: "Yes, we have ample parking space available for patients and visitors within the hospital premises." },
    { q: "What are the visiting hours?", a: "General visiting hours are from 4 PM to 7 PM. However, for NICU and specific wards, please check with the reception for restricted timings." },
    { q: "Is insurance cashless facility available?", a: "Yes, we have tie-ups with all major insurance providers and TPAs for cashless hospitalization. Please contact our insurance desk for more details." }
];

export default function MobileFAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="w-full bg-white py-10 -mt-10 px-5">
            <div className="text-center mb-8">
                <span className="text-[#a7358d] text-[10px] font-bold uppercase tracking-wider block mb-1">Got Questions?</span>
                <h2 className="text-[20px] font-black text-[#30363c]">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
                {faqs.map((item, index) => (
                    <div key={index} className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-[#a7358d]/30 shadow-[0_4px_20px_rgba(167,53,141,0.05)] bg-white' : 'border-gray-100 bg-[#fbfbfb]'}`}>
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex justify-between items-center p-4 text-left"
                        >
                            <span className={`font-bold text-[13px] leading-snug w-[90%] ${openIndex === index ? 'text-[#a7358d]' : 'text-gray-700'}`}>
                                {item.q}
                            </span>
                            <span className={`transition-transform duration-300 text-[#a7358d] ${openIndex === index ? 'rotate-180' : ''}`}>
                                <FaChevronDown className="text-xs" />
                            </span>
                        </button>
                        <div className={`transition-[max-height,opacity] duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="px-4 pb-4 text-[12px] text-gray-500 leading-relaxed border-t border-gray-50 pt-2">
                                {item.a}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
