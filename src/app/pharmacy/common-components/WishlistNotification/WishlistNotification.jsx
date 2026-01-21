"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useWishlist } from '../../../../context/WishlistContext';

export default function WishlistNotification() {
    const { notification, closeNotification } = useWishlist();
    const [visible, setVisible] = useState(false);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (notification) {
            setVisible(true);
            setIsTyping(true);
            // Simulate typing for a split second for realism (only for add)
            if (notification.type === 'add') {
                const typeTimer = setTimeout(() => setIsTyping(false), 800);
                return () => clearTimeout(typeTimer);
            } else {
                setIsTyping(false);
            }
        } else {
            const timer = setTimeout(() => setVisible(false), 500);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    if (!notification && !visible) return null;

    // RENDER 1: SIMPLE TOAST FOR REMOVAL
    if (notification?.type === 'remove') {
        return (
            <div
                className={`fixed bottom-8 right-4 lg:right-8 z-[100] transition-all duration-300 transform ${notification ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
                <div className="bg-[#30363c] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    <span className="font-medium text-[14px]">Removed from Wishlist</span>
                </div>
            </div>
        );
    }

    // RENDER 2: FULL BOT UI FOR ADD
    return (
        <div
            className={`fixed bottom-8 right-4 lg:right-8 z-[100] transition-all duration-500 transform ${notification ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
            <div className="flex flex-col items-end">

                {/* 1. Bot Mascot Container */}
                <div className={`relative z-20 mr-4 transition-transform duration-500 ${notification ? 'translate-y-0' : 'translate-y-5'}`}>
                    <div className="w-16 h-16 bg-white rounded-full p-1 shadow-2xl border-2 border-[#a7358d] flex items-center justify-center animate-bounce-slow">
                        <div className="w-full h-full bg-[#fdf2fa] rounded-full flex items-center justify-center overflow-hidden relative">
                            {/* Cute Bot SVG Face */}
                            <svg viewBox="0 0 200 200" className="w-12 h-12">
                                <circle cx="100" cy="100" r="90" fill="#fdf2fa" />
                                <circle cx="65" cy="85" r="12" fill="#a7358d" className="animate-blink" />
                                <circle cx="135" cy="85" r="12" fill="#a7358d" className="animate-blink" />
                                <path d="M70 130 Q100 160 130 130" fill="none" stroke="#a7358d" strokeWidth="8" strokeLinecap="round" />
                                <rect x="90" y="40" width="20" height="30" rx="10" fill="#a7358d" />
                                <circle cx="100" cy="35" r="8" fill="#d946ef" className="animate-ping-slow" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* 2. Chat Bubble */}
                <div className={`
                    bg-white border-2 border-[#a7358d]/20 shadow-xl rounded-2xl p-5 
                    max-w-[360px] min-w-[300px] relative -mt-4 mr-2 origin-bottom-right transition-all duration-500
                    ${notification ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
                `}>
                    {/* Callout Arrow */}
                    <div className="absolute -top-2.5 right-8 w-5 h-5 bg-white border-t-2 border-l-2 border-[#a7358d]/20 transform rotate-45 z-10"></div>

                    {isTyping ? (
                        <div className="flex items-center gap-1.5 h-10 px-2 justify-center">
                            <div className="w-2 h-2 bg-[#a7358d] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-[#a7358d] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-[#a7358d] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                    ) : (
                        <div className="animate-fadeIn">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-[#a7358d] font-bold text-[15px]">
                                    Wishlist Updated! 💖
                                </h4>
                                <button onClick={closeNotification} className="text-gray-400 hover:text-[#a7358d] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <p className="text-gray-600 text-[14px] leading-relaxed mb-3">
                                Added <span className="font-bold text-gray-800">{notification?.item?.title}</span> to your collection.
                            </p>

                            {notification?.item && (
                                <div className="flex gap-3 bg-[#fdf2fa] p-2 rounded-xl border border-[#a7358d]/20">
                                    <div className="w-12 h-12 bg-white rounded-lg p-1 shadow-sm shrink-0 flex items-center justify-center border border-[#a7358d]/10">
                                        <Image
                                            src={notification.item.image}
                                            width={40}
                                            height={40}
                                            alt=""
                                            className="max-w-full max-h-full object-contain"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center min-w-0">
                                        <span className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">Price</span>
                                        <span className="text-[14px] font-bold text-[#a7358d]">{notification.item.price}</span>
                                    </div>
                                </div>
                            )}

                            <div className="mt-3">
                                <button className="w-full bg-[#a7358d] hover:bg-[#8e2d78] text-white text-[13px] font-bold py-2 rounded-lg transition-colors shadow-md shadow-[#a7358d]/20">
                                    View Wishlist
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes blink {
                    0%, 90%, 100% { transform: scaleY(1); }
                    95% { transform: scaleY(0.1); }
                }
                .animate-blink {
                    animation: blink 3s infinite;
                    transform-origin: center;
                }
                .animate-bounce-slow {
                    animation: bounce 3s infinite;
                }
            `}</style>
        </div>
    );
}
