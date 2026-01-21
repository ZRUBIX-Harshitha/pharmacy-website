"use client";
import React, { useRef } from 'react';
import Image from 'next/image';

const testimonials = [
    {
        highlight: "(Saved ₹2,200 every month with generic medicine online)",
        feedback: "Earlier I was spending ₹3,000/month on medicines. After switching to Medkart's generics, it's down to ₹800. Same effect, much less stress!",
        name: "Ramesh P.",
        location: "Ahmedabad"
    },
    {
        highlight: "(Found a safe substitute medicine & got an app-only discount)",
        feedback: "Bina app ke mujhe samajh hi nahi aata tha kaunsi medicine sahi hogi. Medkart app ne sab simplify kar diya—substitute bhi mil gaya aur discount bhi.",
        name: "Kavita S.",
        location: "Jaipur"
    },
    {
        highlight: "(Used the app for fast delivery while traveling)",
        feedback: "I travel often, and Medkart has been a lifesaver. I needed my medicines urgently during my last trip. Just 1 tap and it was delivered!",
        name: "Suresh K.",
        location: "Mumbai"
    },
    {
        highlight: "(Best prices for chronic medication)",
        feedback: "The discounts on long-term medicines are unbeatable. I've recommended Medkart to all my friends and family members.",
        name: "Anjali M.",
        location: "Delhi"
    }
];

export default function OurCustomers() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.clientWidth / 3; // Scroll by one card width
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="w-full bg-white py-20 px-4 -mt-20">
            <div className="max-w-[1400px] mx-auto relative group">
                <h2 className="text-center text-[#091e42] font-bold text-2xl md:text-3xl mb-16">
                    What Our Customers Say About Medkart?
                </h2>

                <div className="relative px-4 md:px-12">
                    {/* Left Button */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 text-[#a7358d] w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-50"
                        aria-label="Previous slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    {/* Carousel Container */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-8 pb-4 hide-scrollbar snap-x snap-mandatory scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[100%] md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-22px)] snap-center flex"
                            >
                                <div className="w-full bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 h-full">
                                    <p className="text-[#a7358d] text-[15px] font-medium italic mb-6">
                                        {item.highlight}
                                    </p>
                                    <p className="text-[#42526e] text-[15px] leading-relaxed mb-8 flex-grow">
                                        {item.feedback}
                                    </p>

                                    <div className="w-12 h-[1px] bg-gray-100 mb-6"></div>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#fbbf24]">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                            </svg>
                                        ))}
                                    </div>

                                    <h4 className="text-[#091e42] font-bold text-base mb-1.5">
                                        {item.name}
                                    </h4>
                                    <div className="flex items-center gap-1.5 text-[#5e6c84] text-xs font-medium uppercase tracking-wide">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-gray-400">
                                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                        </svg>
                                        {item.location}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 text-[#a7358d] w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Next slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8 mb-20">
                    {[0, 1].map((dot, index) => (
                        <div key={index} className={`w-2.5 h-2.5 rounded-full transition-colors ${index === 0 ? 'bg-[#a7358d]' : 'bg-gray-200'}`}></div>
                    ))}
                </div>

                {/* Why Wait CTA Section */}
                <div className="text-center max-w-4xl mx-auto">
                    <h3 className="text-[#091e42] font-bold text-xl md:text-2xl mb-3 leading-tight">
                        Why Wait? Join 12+ Lac smart buyers across India using Medkart to save on essential medicines.
                    </h3>
                    <p className="text-[#a7358d] font-medium italic mb-10 text-sm md:text-base">
                        No spam. No delays. Just genuine, affordable, and fast.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Find Store Card */}
                        <div className="border border-[#a7358d] rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition-shadow bg-white">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 relative flex-shrink-0">
                                    <Image
                                        src="https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/medkart_store.svg"
                                        alt="Medkart Store"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-[#091e42] font-bold text-left text-sm md:text-[15px]">
                                    Find Nearest Medkart Store!
                                </span>
                            </div>
                            <button className="bg-[#a7358d] hover:bg-[#8e2d78] text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors whitespace-nowrap">
                                Search Store
                            </button>
                        </div>

                        {/* Get App Card */}
                        <div className="border border-[#a7358d] rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition-shadow bg-white">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-16 relative flex-shrink-0">
                                    <Image
                                        src="https://d1s24u4ln0wd0i.cloudfront.net/website/new_ecom_asset/icons/mobile_app_screen_icon_web.webp"
                                        alt="Medkart App"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="text-left">
                                    <span className="text-[#091e42] font-bold block text-sm md:text-[15px]">
                                        Track Every Order,
                                    </span>
                                    <span className="text-[#a7358d] font-bold block text-sm md:text-[15px]">
                                        Right From Medkart App.
                                    </span>
                                </div>
                            </div>
                            <button className="bg-[#a7358d] hover:bg-[#8e2d78] text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors whitespace-nowrap">
                                Get App
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-20 max-w-7xl mx-auto">
                <h3 className="text-[#091e42] font-bold text-2xl md:text-3xl mb-10 text-left">
                    Frequently Asked Questions - Online Medicine Order at Medkart
                </h3>

                <div className="space-y-4">
                    {[
                        {
                            question: "Are Medkart medicines genuine and safe?",
                            answer: "Absolutely. Whether you're buying branded or generic medicines, all products at Medkart come from verified pharma companies. Every order is checked by a certified expert before delivery, ensuring your online medicine purchase is 100% safe."
                        },
                        {
                            question: "Can I upload my doctor’s prescription online to buy medicine from Medkart?",
                            answer: "Yes, you can easily upload your doctor's prescription on our website or app to order medicines."
                        },
                        {
                            question: "Can I buy multivitamins and health supplements online from Medkart?",
                            answer: "Yes, we offer a wide range of multivitamins and health supplements from trusted brands."
                        },
                        {
                            question: "Does Medkart sell homoeopathic medicines online?",
                            answer: "Currently, we focus on allopathic and ayurvedic medicines. Please check our app for the latest updates."
                        },
                        {
                            question: "Is cash on delivery available for online medicine orders?",
                            answer: "Yes, Cash on Delivery (COD) is available for most locations."
                        },
                        {
                            question: "Can I order Ayurvedic medicines online on Medkart?",
                            answer: "Yes, we have a selection of Ayurvedic medicines available for online order."
                        },
                        {
                            question: "What makes Medkart different from other online pharmacies?",
                            answer: "We prioritize generic medicines to save you money, ensure expert verification for safety, and provide a seamless ordering experience."
                        }
                    ].map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} isOpen={index === 0} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function FAQItem({ question, answer, isOpen: initialOpen }) {
    const [isOpen, setIsOpen] = React.useState(initialOpen);

    return (
        <div className="border-b border-gray-100 pb-5">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between text-left group"
            >
                <span className="text-[#42526e] text-[20px] font-medium group-hover:text-[#a7358d] transition-colors">
                    {question}
                </span>
                <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#42526e]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-[#5e6c84] text-[17px] leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
}
