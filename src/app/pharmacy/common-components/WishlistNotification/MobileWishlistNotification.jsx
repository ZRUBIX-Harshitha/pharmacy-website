"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useWishlist } from '../../../../context/WishlistContext';

export default function MobileWishlistNotification() {
    const { notification, closeNotification } = useWishlist();
    const [visible, setVisible] = useState(false);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (notification) {
            setVisible(true);
            setIsTyping(true);
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

    // RENDER 1: SIMPLE TOAST FOR REMOVAL (Same as desktop logic)
    if (notification?.type === 'remove') {
        return (
            <div className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 transform ${notification ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="bg-[#30363c] text-white px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap">
                    <span className="font-bold text-xs">Removed from Wishlist</span>
                </div>
            </div>
        );
    }

    // RENDER 2: BOT MASCOT FOR ADDS (Mobile Optimized)
    return (
        <div className={`fixed bottom-20 right-4 z-[100] transition-all duration-500 transform ${notification ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex flex-col items-end">

                {/* 1. Bot Mascot (Floating above) */}
                <div className={`relative z-20 mr-2 transition-transform duration-500 ${notification ? 'translate-y-0' : 'translate-y-5'}`}>
                    <div className="w-12 h-12 bg-white rounded-full p-0.5 shadow-xl border-2 border-[#a7358d] flex items-center justify-center animate-bounce-slow">
                        <div className="w-full h-full bg-[#fdf2fa] rounded-full flex items-center justify-center overflow-hidden relative">
                            {/* Mini Bot SVG Face */}
                            <svg viewBox="0 0 200 200" className="w-8 h-8">
                                <circle cx="100" cy="100" r="90" fill="#fdf2fa" />
                                <circle cx="65" cy="85" r="12" fill="#a7358d" className="animate-blink" />
                                <circle cx="135" cy="85" r="12" fill="#a7358d" className="animate-blink" />
                                <path d="M70 130 Q100 160 130 130" fill="none" stroke="#a7358d" strokeWidth="8" strokeLinecap="round" />
                                <circle cx="100" cy="35" r="8" fill="#d946ef" className="animate-ping-slow" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* 2. Chat Bubble (The Notification) */}
                <div className={`
                    bg-white border-2 border-[#a7358d]/20 shadow-2xl rounded-2xl rounded-tr-sm p-3 
                    max-w-[280px] w-auto relative -mt-3 mr-1 origin-bottom-right transition-all duration-500 
                    ${notification ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
                `}>
                    {/* Callout Arrow */}
                    <div className="absolute -top-1.5 right-4 w-3 h-3 bg-white border-t border-l border-[#a7358d]/20 transform rotate-45 z-10"></div>

                    {isTyping ? (
                        <div className="flex items-center gap-1 h-6 px-2 justify-center">
                            <div className="w-1.5 h-1.5 bg-[#a7358d] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-1.5 h-1.5 bg-[#a7358d] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-1.5 h-1.5 bg-[#a7358d] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                    ) : (
                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <h4 className="text-[#a7358d] font-bold text-xs">Saved to Wishlist! 💖</h4>
                                <button onClick={closeNotification} className="pl-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {notification?.item && (
                                <div className="flex gap-2 items-center bg-[#fdf2fa] p-1.5 rounded-lg border border-[#a7358d]/10 mb-2">
                                    <div className="w-8 h-8 bg-white rounded p-0.5 shrink-0 flex items-center justify-center border border-gray-100">
                                        <Image
                                            src={notification.item.image}
                                            width={24}
                                            height={24}
                                            alt=""
                                            className="max-w-full max-h-full object-contain"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] text-gray-700 font-bold truncate max-w-[140px] leading-tight">
                                            {notification.item.title}
                                        </p>
                                    </div>
                                </div>
                            )}

                            <button className="w-full bg-[#a7358d] text-white text-[10px] font-bold py-1.5 rounded-md shadow-sm active:scale-95 transition-transform">
                                View Collection
                            </button>
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
