"use client";
import React, { useState } from 'react';

const detailedItems = [
    {
        title: "Lab Test Booking Made Simple",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
        ),
        content: (
            <div className="text-sm text-[#4f5869] leading-6 space-y-4">
                <p>
                    One of the most popular services PharmEasy offers is diagnostic testing. People need to book pathological tests for many reasons. But before booking, they wonder if the diagnostic centre can be trusted to produce accurate results and how long they might have to wait in line to get tested.
                </p>
                <p>
                    To bypass these hassles, PharmEasy has partnered with Thyrocare, one of India's most reputed and NABL-accredited diagnostic laboratories. Through this partnership, we offer access to high-quality diagnostics and home sample collection services across a wide range of pin codes. Say goodbye to the stress of finding reliable lab tests, book with PharmEasy and experience convenience, accuracy, and care.
                </p>
            </div>
        )
    },
    {
        title: "How to Book a Diagnostic Test Online?",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg>
        ),
        content: "You can easily book a test through our website or app by selecting the test and scheduling a home collection."
    },
    {
        title: "How PharmEasy Makes Lab Test Experience Easy?",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
        ),
        content: "Expanding access to diagnostics with home collection and digital reports makes the process seamless."
    },
    {
        title: "Why Choose PharmEasy for Lab Tests?",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
        ),
        content: "Trusted NABL labs, affordable prices, and convenient home collection."
    },
    {
        title: "Lab Tests at Your Doorstep",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
        ),
        content: "Our certified phlebotomists collect samples right from your home at your scheduled time."
    },
    {
        title: "Accurate, Affordable & Accessible Testing with NABL-Certified Labs",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg>
        ),
        content: "Partnership with NABL certified labs ensures 100% accurate results."
    }
];

const faqs = [
    {
        question: "Are PharmEasy phlebotomists trained and certified?",
        answer: "Yes, PharmEasy has a highly trained in-house fleet of over 500 certified phlebotomists, serving 2500+ pincodes across India. We have a dedicated training team for the technicians, which constantly tracks their performance on parameters like on-time arrival, comfortable sample collection, adherence to NABL guidelines for sample storage & transport and customer support. We have a very strict hiring process that ensures every sample collection experience is of the best quality."
    },
    {
        question: "How efficient is the sample collection and analysis process?",
        answer: "Our sample collection process is streamlined for efficiency and hygiene, ensuring quick analysis."
    },
    {
        question: "Does PharmEasy offer radiology services?",
        answer: "Yes, we facilitate radiology services through our partner labs."
    },
    {
        question: "Why are Lab tests essential?",
        answer: "Lab tests help in early diagnosis, monitoring medical conditions, and maintaining good health."
    },
    {
        question: "How long does it take for the report to be delivered?",
        answer: "Most reports are delivered within 24-48 hours via email and app."
    }
];

const AccordionItem = ({ title, icon, content, isOpen, onClick, isFaq = false }) => {
    return (
        <div className={`border-b border-gray-100 ${isOpen ? 'bg-transparent' : 'bg-white'}`}>
            <button
                className={`w-full text-left py-4 flex items-center justify-between group ${isFaq ? '' : 'px-0'}`}
                onClick={onClick}
            >
                <div className="flex items-center gap-3">
                    {icon && <span>{icon}</span>}
                    <span className={`text-[#4f5869] font-bold ${isFaq ? 'text-[15px]' : 'text-[14px]'} ${isOpen && !isFaq ? 'text-[#30363c]' : ''}`}>
                        {title}
                    </span>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#e5fcf3]' : 'bg-[#f3f4f9] group-hover:bg-[#ebedf0]'}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className={`w-4 h-4 text-[#4f5869] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className={isFaq ? "text-sm text-[#4f5869] leading-6 py-2" : ""}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default function FAQ() {
    const [openDetailedIndex, setOpenDetailedIndex] = useState(0);
    const [openFaqIndex, setOpenFaqIndex] = useState(0);

    return (
        <div className="w-full bg-white py-10 font-sans">
            <div className="max-w-[1550px] mx-auto px-5">

                {/* First Section: Detailed Items */}
                <div className="border border-gray-200 rounded-lg p-5 mb-8 shadow-sm">
                    {detailedItems.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            icon={item.icon}
                            content={item.content}
                            isOpen={openDetailedIndex === index}
                            onClick={() => setOpenDetailedIndex(openDetailedIndex === index ? -1 : index)}
                        />
                    ))}
                </div>

                {/* Second Section: People Also Ask */}
                <div className="border border-gray-200 rounded-lg p-5 shadow-sm">
                    <h3 className="text-[#30363c] text-[18px] font-bold mb-4">
                        People Also Ask
                    </h3>

                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            title={faq.question}
                            content={faq.answer}
                            isOpen={openFaqIndex === index}
                            onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                            isFaq={true}
                        />
                    ))}

                    {/* View More Button */}
                    <div className="mt-4 pt-2">
                        <button className="w-full text-[#30363c] font-bold text-sm py-3 border border-gray-200 rounded md hover:bg-gray-50 flex items-center justify-center gap-1 transition-colors">
                            View more questions <span className="text-lg leading-none">&gt;</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
