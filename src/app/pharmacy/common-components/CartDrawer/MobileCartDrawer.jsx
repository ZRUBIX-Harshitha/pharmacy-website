"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../../../context/CartContext';
import { FaTrash, FaMinus, FaPlus, FaArrowRight } from 'react-icons/fa';

export default function MobileCartDrawer() {
    const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex flex-col justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                onClick={closeCart}
            ></div>

            {/* Bottom Sheet Drawer */}
            <div className="relative w-full bg-[#f8f9fa] rounded-t-[2rem] shadow-2xl flex flex-col max-h-[85vh] animate-slideUp">

                {/* Handle Bar */}
                <div className="w-full flex justify-center pt-3 pb-1" onClick={closeCart}>
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
                </div>

                {/* Header */}
                <div className="bg-white px-5 py-4 flex items-center justify-between border-b border-gray-100 rounded-t-[2rem]">
                    <h2 className="text-[#30363c] text-lg font-black flex items-center gap-2">
                        My Cart
                        <span className="bg-[#a7358d] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{cartCount} Items</span>
                    </h2>
                    <button
                        onClick={closeCart}
                        className="text-gray-400 font-bold text-xs uppercase hover:text-gray-800"
                    >
                        Close
                    </button>
                </div>

                {/* Cart Items List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f8f9fa]">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center text-center py-12">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-3xl">🛒</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Your Cart is Empty</h3>
                            <button
                                onClick={closeCart}
                                className="mt-4 px-6 py-2.5 bg-[#30363c] text-white rounded-xl text-sm font-bold shadow-md"
                            >
                                Start Shopping
                            </button>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex gap-3">
                                {/* Product Image */}
                                <div className="w-16 h-16 shrink-0 border border-gray-50 rounded-lg overflow-hidden flex items-center justify-center bg-white p-1">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={64}
                                        height={64}
                                        className="object-contain w-full h-full"
                                        unoptimized
                                    />
                                </div>

                                {/* Details */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start gap-2">
                                        <h3 className="text-[#30363c] font-bold text-[13px] line-clamp-2 leading-tight">
                                            {item.title}
                                        </h3>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-300 p-1 -mr-1"
                                        >
                                            <FaTrash className="w-3.5 h-3.5" />
                                        </button>
                                    </div>

                                    <div className="flex justify-between items-end mt-2">
                                        <div>
                                            <p className="text-[#30363c] font-black text-sm">{item.price}</p>
                                        </div>

                                        {/* Mobile Quantity Control */}
                                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-2 py-1 border border-gray-100">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-5 h-5 flex items-center justify-center bg-white rounded shadow-sm text-[#a7358d] text-[10px]"
                                            >
                                                <FaMinus />
                                            </button>
                                            <span className="text-xs font-bold text-gray-700 w-3 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-5 h-5 flex items-center justify-center bg-[#a7358d] rounded shadow-sm text-white text-[10px]"
                                            >
                                                <FaPlus />
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
                    <div className="bg-white border-t border-gray-100 p-4 pb-8 shrink-0 rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-500 text-xs font-bold uppercase">Total Amount</span>
                            <span className="text-[#30363c] font-black text-xl">₹{cartTotal.toFixed(2)}</span>
                        </div>
                        <Link href="/cart" onClick={closeCart} className="w-full bg-[#a7358d] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#a7358d]/20 active:scale-95 transition-transform">
                            Proceed to Checkout
                            <FaArrowRight className="text-xs" />
                        </Link>
                    </div>
                )}
            </div>
            <style jsx>{`
                @keyframes slideUp {
                    from { transform: translateY(100%); }
                    to { transform: translateY(0); }
                }
                .animate-slideUp {
                    animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </div>
    );
}
