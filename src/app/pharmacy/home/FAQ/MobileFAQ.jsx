"use client";
import React, { useState } from "react";

const seoData = [
    {
        title: "Top-Tests we cover:",
        items: [
            "Creatinine Test", "HbA1c Test", "ESR Test", "Widal Test", "VDRL Test", "RBS Test", "RFT Test", "Thyroid Profile Test", "Liver Function Test", "SGPT Test", "PSA Test", "Lipid Profile Test", "CBC Test", "HbsAg Test", "CRP Test", "HIV Test", "D Dimer Test"
        ]
    },
    {
        title: "Top-Selling Healthcare Products:",
        items: [
            "Buscogast 10mg", "Prohance Nutrition Drink", "Digene Acidity & Gas Relief Tablets", "Supradyn Daily Multivitamin", "Evion 400 mg", "Unwanted 72", "I Pill Contraceptive Pill", "Himalaya Liv.52 Ds", "Dulcoflex 5mg", "Himalaya Himcolin Gel", "Cremaffin Syrup", "Depura Vitamin D3", "Bold Care Extend Delay Spray", "Gaviscon Liquid Instant Relief", "Zincovit", "Shelcal 500mg", "Himalaya Confido Tablets"
        ]
    },
    {
        title: "Top-Selling Medicines:",
        items: [
            "Lipikind F", "Megalis 20", "OROFER XT", "Montas L", "LEVIPIL 500", "Omee D", "Telma 40", "MONTAIR LC", "Rabesec Dsr", "Mala D Tablet", "MONTEK LC", "Amoxyclav 625", "Meftal Forte", "NUROKIND LC", "Betnovate C", "CILACAR 10"
        ]
    },
    {
        title: "Top-Searched Medicines:",
        items: [
            "Dolo 650", "Allegra 120mg", "Sinarest", "Duphaston 10mg", "Udiliv 300mg", "Ganaton 50mg", "Becosules", "Zerodol Sp", "Meftal Spas", "Karvol Plus", "Primolut N", "Ecosprin 75mg", "Omee 20mg", "Pan D", "Ondem Syrup", "Budecort 0.5mg"
        ]
    },
    {
        title: "Top Searched Vaccines:",
        items: [
            "Pneumovax 23 Vaccine", "Gardasil 9 Pre Injection", "Fluarix Tetra Vaccine", "Menactra Injection", "Hexaxim Injection", "Vaxigrip NH 2025/2026 Vaccine", "Rotasil Vaccine", "Nukovax 13 Vaccine", "Havrix 720 Junior Vaccine", "Biovac A Vaccine", "Influvac Tetra Vaccine", "Prevenar 13 Injection", "Vaxiflu 2025-2026 Vaccine", "Tetanus Vaccine", "Typbar TCV Injection", "Fluquadri Sh Vaccine", "Pneumovax 23 Injection"
        ]
    }
];

export default function MobileFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full font-sans bg-white py-8 px-4 border-b border-gray-100">
            {/* Collapsible SEO Sections */}
            <div className="flex flex-col gap-3 mb-8">
                {seoData.map((section, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0 pb-2">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between items-center py-2 text-left"
                        >
                            <span className="font-bold text-gray-800 text-sm">
                                {section.title}
                            </span>
                            <span className="text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>

                        {openIndex === index && (
                            <div className="text-xs text-gray-600 leading-relaxed mt-1 mb-2 animate-fadeIn">
                                {section.items.map((item, i) => (
                                    <React.Fragment key={i}>
                                        <span className="hover:text-[#a7358d] inline-block">
                                            {item}
                                        </span>
                                        {i < section.items.length - 1 && (
                                            <span className="mx-1.5 text-gray-300">|</span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Static Content */}
            <div className="flex flex-col gap-6 text-gray-700">
                <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">Your One-Stop Online Pharmacy - PharmEasy</h3>
                    <h4 className="text-sm font-bold text-gray-800 mb-1">We've got India Covered!</h4>
                    <p className="text-xs leading-relaxed text-[#4f585e]">
                        We now deliver in 1200+ cities and towns across 19000+ pin codes. We thereby cover every nook and corner of the country! The major cities in which we deliver include Mumbai, Kolkata, Delhi, Bengaluru, Ahmedabad, Hyderabad, Chennai, Thane, Howrah, Pune, Gurgaon, Navi Mumbai, Jaipur, Noida, Lucknow, Ghaziabad & Vadodara.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-bold text-gray-800 mb-1">Say Goodbye to All Your Healthcare Worries With PharmEasy!</h4>
                    <p className="text-xs leading-relaxed text-[#4f585e]">
                        PharmEasy is here to help you take it easy! We are amongst one of India's top online pharmacy and medical care platforms. It enables you to order pharmaceutical and healthcare products online by connecting you to registered retail pharmacies and get them delivered to your home. We are an online medical store, making your purchase easy, simple, and affordable!
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-bold text-gray-800 mb-1">How Are We Making Lives Simpler With Our Online Medical Store?</h4>
                    <p className="text-xs leading-relaxed text-[#4f585e]">
                        Our doorstep delivery service is available in PAN-India across top cities like Bangalore, Delhi, Mumbai, Kolkata, Hyderabad, Gurgaon, Noida, Pune, etc. Our online medical store also allows you to choose from 1 lakh+ products including OTC products and medical equipment. PharmEasy is a one-stop online medical platform where you can also book diagnostic tests including blood tests, full-body checkups, and other preventive health check-ups at an affordable cost, right from the comfort of your home. We have partnered with trusted & certified labs that arrange for a sample pick-up from the convenience of your home. They also provide you with timely reports.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-bold text-gray-800 mb-1">Why Are We The Most Preferred Online Pharmacy?</h4>
                    <p className="text-xs leading-relaxed text-[#4f585e]">
                        Lucrative offers on our platform allow you to make payment online and via various payment wallets at a discounted price. Alternatively, you can also choose to pay cash on delivery as we deliver the products at your doorstep. We cater to all your pharmaceutical needs and also make ordering medicines online a hassle-free experience for you. We connect you only with registered retail pharmacies & certified diagnostic labs. We ensure that healthcare is affordable to all and make the process of ordering online simple.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-bold text-gray-800 mb-1">Sit Back & Relax While You Get Your Essentials Delivered Every Month!</h4>
                    <p className="text-xs leading-relaxed text-[#4f585e]">
                        It's tough to remember to refill every month, especially in the case of chronic diseases. PharmEasy's subscription service not only ensures that you are reminded of your refills but also makes sure that you are never out on your medical essentials. You will get a reminder every month and your order will be delivered at your convenience!
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-bold text-gray-800 mb-1">Access medical and health information:</h4>
                    <p className="text-xs leading-relaxed text-[#4f585e]">
                        PharmEasy delivers reliable and accurate medical information that has been carefully written, vetted and validated by our health experts. Our specialists curate high-quality and most reliable literature about medicines, illnesses, lab tests, Ayurvedic and over the counter health products.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-bold text-gray-800 mb-1">We Believe in 'Simplifying Healthcare, Impacting Lives!'</h4>
                </div>
            </div>
        </div>
    );
}
