"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../../../context/CartContext';


export default function CartDrawer() {
    const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                onClick={closeCart}
            ></div>

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-[#f7f8fa] h-full shadow-2xl flex flex-col transform transition-transform duration-300 animate-slideInRight">

                {/* Header */}
                <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-100 shrink-0">
                    <h2 className="text-[#30363c] text-xl font-bold flex items-center gap-2">
                        My Cart
                        <span className="bg-[#a7358d] text-white text-xs px-2 py-0.5 rounded-full">{cartCount} Items</span>
                    </h2>
                    <button
                        onClick={closeCart}
                        className="text-gray-500 hover:text-gray-800 transition-colors p-1 rounded-md hover:bg-gray-100"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Cart Items List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {cartItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-fadeIn">

                            <div className="w-16 h-1 bg-gray-100 rounded-full mb-8"></div>

                            <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">Your Cart is Empty</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-[240px] mb-10">
                                Looks like you haven't made your choice yet.
                            </p>

                            <button
                                onClick={closeCart}
                                className="w-full max-w-[200px] bg-[#30363c] hover:bg-black text-white py-3.5 rounded-xl font-bold text-[15px] shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] transition-all transform hover:-translate-y-0.5 active:scale-95"
                            >
                                Start Shopping
                            </button>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4">
                                {/* Product Image */}
                                <div className="w-20 h-20 shrink-0 relative border border-gray-100 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                        className="object-contain w-full h-full"
                                        unoptimized
                                    />
                                </div>

                                {/* Details */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start gap-2">
                                        <h3 className="text-[#30363c] font-semibold text-sm line-clamp-2 leading-snug">
                                            {item.title}
                                        </h3>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors shrink-0"
                                            title="Remove Item"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="flex justify-between items-end mt-2">
                                        <div className="text-xs text-gray-500">
                                            <p className="line-through">{item.mrp}</p>
                                            <p className="text-[#30363c] font-bold text-base">{item.price}</p>
                                        </div>

                                        {/* Quantity Control */}
                                        <div className="flex border border-[#a7358d] rounded overflow-hidden h-8">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-8 flex items-center justify-center text-[#a7358d] hover:bg-[#eaf8f8] font-bold transition-colors"
                                            >
                                                -
                                            </button>
                                            <div className="w-8 flex items-center justify-center text-[#a7358d] font-bold text-sm bg-white cursor-default">
                                                {item.quantity}
                                            </div>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 flex items-center justify-center text-[#a7358d] hover:bg-[#eaf8f8] font-bold transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="bg-white border-t border-gray-200 p-4 shrink-0 shadow-upper">
                        <div className="mb-4 space-y-2">
                            <div className="flex justify-between text-gray-500 text-sm">
                                <span>Cart Total</span>
                                <span>₹{cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-[#30363c] font-bold text-lg">
                                <span>To Pay</span>
                                <span>₹{cartTotal.toFixed(2)}</span>
                            </div>
                        </div>
                        <Link href="/cart" onClick={closeCart} className="w-full bg-[#a7358d] hover:bg-[#8e2d78] text-white font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg">
                            Proceed to Buy
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                )}
            </div>
            <style jsx>{`
                @keyframes slideInRight {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
                .animate-slideInRight {
                    animation: slideInRight 0.3s ease-out forwards;
                }
                .shadow-upper {
                    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06);
                }
            `}</style>
        </div>
    );
}
