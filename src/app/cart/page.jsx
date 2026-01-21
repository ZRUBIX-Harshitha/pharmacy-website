"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

import Header from '../pharmacy/common-components/Header/Header';
import Footer from '../pharmacy/common-components/Footer/Footer';

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

    // Helper to parse price string to number
    const parsePrice = (priceStr) => {
        if (typeof priceStr === 'number') return priceStr;
        if (!priceStr) return 0;
        return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
    };

    // Calculate Bill Details
    const totalMRP = cartItems.reduce((total, item) => total + (parsePrice(item.mrp) * item.quantity), 0);
    const totalSellingPrice = cartTotal; // Already calculated in context as sum of (price * quantity)
    const totalDiscount = totalMRP - totalSellingPrice;

    const deliveryFee = 0;
    const platformFee = 6.00;
    const finalAmountToPay = totalSellingPrice + platformFee + deliveryFee;

    const [showAddressDrawer, setShowAddressDrawer] = React.useState(false);
    const [savedAddress, setSavedAddress] = React.useState(null);
    const [showPaymentScreen, setShowPaymentScreen] = React.useState(false);
    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
    const [paymentMethod, setPaymentMethod] = React.useState('UPI');
    const [upiId, setUpiId] = React.useState('');

    const [formData, setFormData] = React.useState({
        deliverTo: '',
        mobile: '',
        pincode: '',
        houseNo: '',
        street: '',
        type: 'Home'
    });

    const handleSaveAddress = () => {
        if (formData.mobile && formData.pincode) {
            setSavedAddress(formData);
            setShowAddressDrawer(false);
        }
    };

    const handlePayment = () => {
        if (paymentMethod === 'UPI' && !upiId) {
            alert('Please enter a valid UPI ID');
            return;
        }
        setShowSuccessModal(true);
    };

    if (cartItems.length === 0) {
        return (
            <>
                <Header />
                <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20">
                    <div className="w-64 h-64 relative mb-6">
                        <Image
                            src="https://assets.pharmeasy.in/web-assets/images/cart_empty_state.png?dim=256x0"
                            alt="Empty Cart"
                            fill
                            className="object-contain"
                            unoptimized
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Your Cart is Empty</h1>
                    <p className="text-gray-500 mb-8">Add medicines, health products and more.</p>
                    <Link href="/pharmacy/home" className="bg-[#a7358d] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#8e2d78] transition-colors shadow-md">
                        Start Shopping
                    </Link>
                </div>
                <Footer />
            </>
        );
    }

    // Payment Screen View
    if (showPaymentScreen) {
        return (
            <>
                <Header />
                <div className="min-h-screen bg-[#f1f2f4] py-8 font-sans">
                    <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
                        <h1 className="text-[20px] font-bold text-[#30363c] mb-6">Payment Options</h1>

                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Left Column - Payment Methods */}
                            <div className="flex-1 space-y-6">

                                {/* UPI */}
                                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                    <div className="p-5 border-b border-gray-100 flex items-start gap-4">
                                        <div className="w-6 h-6 mt-0.5">
                                            {/* UPI Icon Placeholder - Using SVG for visual */}
                                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#30363c]" stroke="currentColor" strokeWidth={2}>
                                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-[#30363c] text-[16px]">UPI</h3>
                                            <div className="mt-4">
                                                <p className="text-[12px] font-bold text-gray-500 mb-2">Add New UPI ID</p>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your UPI ID"
                                                    value={upiId}
                                                    onChange={(e) => setUpiId(e.target.value)}
                                                    className="w-full border border-gray-300 rounded-lg h-12 px-4 outline-none focus:border-[#a7358d] focus:ring-1 focus:ring-[#a7358d] transition-all text-sm mb-4"
                                                />
                                                <button
                                                    onClick={() => { setPaymentMethod('UPI'); handlePayment(); }}
                                                    className="w-full bg-[#dfe3e6] text-[#6d7984] hover:bg-[#a7358d] hover:text-white font-bold py-3.5 rounded-lg text-[15px] flex items-center justify-center gap-2 transition-all"
                                                >
                                                    Proceed to Pay ₹{finalAmountToPay.toFixed(2)}
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cash on Delivery */}
                                <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-start gap-4 cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => setPaymentMethod('COD')}>
                                    <div className="w-6 h-6 mt-1 flex items-center justify-center">
                                        <input type="radio" name="payment" checked={paymentMethod === 'COD'} onChange={() => setPaymentMethod('COD')} className="w-5 h-5 text-[#a7358d] focus:ring-[#a7358d]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#30363c] text-[16px]">Cash on Delivery</h3>
                                        <div className="flex items-center gap-3 mt-1">
                                            <div className="w-10 h-10 bg-green-50 rounded flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                                </svg>
                                            </div>
                                            <p className="text-[14px] text-gray-500">₹26 will be charged for Cash on Delivery. Switch to online payments to save on ₹26.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Wallets */}
                                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                    <div className="p-4 bg-white border-b border-gray-100">
                                        <h3 className="font-bold text-[#30363c] text-[16px]">Wallets for you</h3>
                                    </div>
                                    <div className="divide-y divide-gray-100">
                                        {['PayZapp', 'Amazon Pay Balance'].map((wallet) => (
                                            <div key={wallet} className="p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50" onClick={() => setPaymentMethod(wallet)}>
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center p-1">
                                                        {/* Placeholder Icon */}
                                                        <span className="text-[10px] font-bold text-gray-500">{wallet.substring(0, 3)}</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-[#30363c] text-[15px]">{wallet}</h4>
                                                        {wallet === 'Amazon Pay Balance' && (
                                                            <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">Get upto ₹100 cashback on transactions above 699 | Min. assured cashback of ₹20.</p>
                                                        )}
                                                    </div>
                                                </div>
                                                <input type="radio" name="payment" checked={paymentMethod === wallet} onChange={() => setPaymentMethod(wallet)} className="w-5 h-5 text-[#a7358d] focus:ring-[#a7358d]" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Other Options */}
                                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                    <div className="p-4 bg-white border-b border-gray-100">
                                        <h3 className="font-bold text-[#30363c] text-[16px]">Other options</h3>
                                    </div>
                                    <div className="divide-y divide-gray-100">
                                        {['Credit/Debit Card', 'Wallets', 'Net Banking'].map((option) => (
                                            <div key={option} className="p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-green-50/50 rounded flex items-center justify-center p-1 text-[#10847e]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                                        </svg>
                                                    </div>
                                                    <span className="font-bold text-[#30363c] text-[15px]">{option}</span>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400">
                                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Summary */}
                            <div className="w-full lg:w-[380px] space-y-6 sticky top-24 h-fit">
                                {/* Bill Summary */}
                                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden relative">
                                    <div className="p-5 border-b border-gray-100">
                                        <h3 className="text-[#30363c] font-bold text-[16px]">Bill Summary</h3>
                                    </div>
                                    <div className="p-5 space-y-3 text-[14px] text-gray-600">
                                        <div className="flex justify-between">
                                            <span className="text-[#4f585e]">MRP</span>
                                            <span className="text-[#30363c]">₹{totalMRP.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-1">
                                                <span className="text-[#4f585e]">Discount</span>
                                            </div>
                                            <span className="text-[#10847e] font-bold">-₹{totalDiscount.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[#4f585e]">Discounted Value</span>
                                            <span className="text-[#30363c]">₹{totalSellingPrice.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#4f585e]">Delivery Fee</span>
                                            <div className="text-right">
                                                <span className="text-gray-400 line-through text-[12px]">₹40.00</span>
                                                <span className="text-[#10847e] font-bold ml-1">FREE</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[#4f585e]">Platform Fee</span>
                                            <span className="text-[#30363c]">₹{platformFee.toFixed(2)}</span>
                                        </div>

                                        <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-2">
                                            <span className="text-[#30363c] font-bold text-[18px]">Amount to be paid</span>
                                            <span className="text-[#30363c] font-bold text-[18px]">₹{finalAmountToPay.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    {/* Savings Banner */}
                                    <div className="bg-[#10847e] relative overflow-hidden">
                                        {/* Background decoration */}
                                        <div className="absolute right-0 top-0 h-full w-24">
                                            <Image src="https://assets.pharmeasy.in/web-assets/images/ellipseWhite.svg" fill alt="" className="object-cover opacity-20" unoptimized />
                                        </div>

                                        <div className="p-3 flex justify-between items-center text-[#fff] relative z-10 px-5">
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src="https://assets.pharmeasy.in/web-assets/images/icon_rupeeCircle.svg?dim=48x48&q=75"
                                                    width={18}
                                                    height={18}
                                                    alt="savings"
                                                    className="brightness-0 invert"
                                                    unoptimized
                                                />
                                                <span className="text-[14px] font-bold">₹{totalDiscount.toFixed(0)} Saved on this order</span>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Success Modal */}
                {showSuccessModal && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                        <div className="bg-white rounded-2xl p-8 w-full max-w-md relative z-10 text-center shadow-2xl animate-in zoom-in duration-300">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-green-600">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-[#30363c] mb-2">Order Placed Successfully!</h2>
                            <p className="text-gray-500 mb-8">Thank you for your order. We will deliver your items soon.</p>

                            <Link
                                href="/pharmacy/home"
                                className="block w-full bg-[#a7358d] text-white font-bold py-3.5 rounded-lg hover:bg-[#8e2d78] transition-colors shadow-lg active:scale-95"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                )}
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-[#f1f2f4] py-8 font-sans relative">
                <div className="max-w-[1400px] mx-auto px-4 lg:px-6">

                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-[26px] font-bold text-[#30363c]">{cartCount} Items in your Cart</h1>
                        <button className="flex items-center gap-2 text-[#a7358d] font-bold text-[14px] hover:bg-[#a7358d]/5 px-3 py-2 rounded-md transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            Saved for Later
                        </button>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left Column - Cart Items */}
                        <div className="flex-1 space-y-4">

                            {/* Offer Banner */}
                            <div className="bg-[#fdf2f8] border border-[#a7358d]/20 rounded-lg p-4 flex items-center justify-between shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#fae8f5] flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#a7358d]">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-[#30363c] font-medium text-[14px]">Add items worth <span className="font-bold">₹1208</span> & unlock <span className="text-[#a7358d] font-bold">Extra 15%* Off</span></span>
                                </div>
                            </div>

                            {/* Cart Product List */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden divide-y divide-gray-100">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="p-5 flex flex-col sm:flex-row gap-5 transition-colors hover:bg-gray-50/30">
                                        {/* Image */}
                                        <div className="w-24 h-24 shrink-0 border border-gray-100 rounded-lg p-2 bg-white flex items-center justify-center">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={80}
                                                height={80}
                                                className="object-contain max-h-full max-w-full"
                                                unoptimized
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div className="flex justify-between items-start gap-3">
                                                <div>
                                                    <h3 className="text-[#30363c] font-semibold text-[16px] leading-snug line-clamp-2">{item.title}</h3>
                                                    <p className="text-[12px] text-gray-500 mt-1">By Pharmeasy</p>
                                                    <p className="text-[12px] text-gray-500 mt-0.5">Strip of 10 Tablets</p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                                    title="Remove item"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-4">
                                                <div className="flex items-center gap-3">
                                                    {/* Qty Dropdown Mock */}
                                                    <div className="flex items-center border border-[#a7358d]/30 rounded-md h-8 overflow-hidden shadow-sm">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="w-8 h-full flex items-center justify-center text-[#a7358d] hover:bg-[#a7358d]/5 transition-colors font-bold text-lg"
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            -
                                                        </button>
                                                        <div className="w-8 h-full flex items-center justify-center text-[#30363c] font-semibold text-sm bg-gray-50 border-x border-[#a7358d]/10">
                                                            {item.quantity}
                                                        </div>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="w-8 h-full flex items-center justify-center text-[#a7358d] hover:bg-[#a7358d]/5 transition-colors font-bold text-lg"
                                                        >
                                                            +
                                                        </button>
                                                    </div>

                                                    <div className="flex items-center gap-2 mb-0.5">
                                                        <span className="text-[#30363c] font-bold text-[18px]">{item.price}</span>
                                                        <span className="text-gray-400 line-through text-xs font-medium">{item.mrp}</span>
                                                        <span className="text-red-500 text-xs font-bold">20% OFF</span>
                                                    </div>
                                                </div>

                                                <div className="text-[12px] text-gray-500 bg-gray-50 px-2 py-1 rounded inline-block self-start sm:self-auto">
                                                    Delivery by <span className="text-[#30363c] font-bold">Tomorrow, before 10 pm</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Summary */}
                        <div className="w-full lg:w-[420px] space-y-6 sticky top-24 h-fit">

                            {/* Cart Total & Proceed Box */}
                            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                                <div className="flex items-center gap-2 mb-5">
                                    <span className="text-[#30363c] font-semibold text-[18px]">Cart total:</span>
                                    <span className="text-[#30363c] font-bold text-[22px]">₹{finalAmountToPay.toFixed(2)}</span>
                                </div>
                                <button
                                    onClick={() => !savedAddress ? setShowAddressDrawer(true) : setShowPaymentScreen(true)}
                                    className="w-full bg-[#a7358d] hover:bg-[#8e2d78] text-white font-bold py-4 rounded-lg text-[18px] flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
                                >
                                    {savedAddress ? "Proceed to Pay" : "Add Delivery Address"}
                                    {savedAddress ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    )}
                                </button>

                                {savedAddress && (
                                    <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Delivering To</span>
                                                <h4 className="font-bold text-[#30363c] text-sm">{savedAddress.type}</h4>
                                                <p className="text-xs text-gray-600 mt-0.5 line-clamp-1">{savedAddress.houseNo}, {savedAddress.street}, {savedAddress.pincode}</p>
                                            </div>
                                            <button onClick={() => setShowAddressDrawer(true)} className="text-[#a7358d] text-xs font-bold underline">Change</button>
                                        </div>
                                    </div>
                                )}

                                {/* Coupons Divider */}
                                <div className="relative mt-8 mb-6 text-center">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-200"></div>
                                    </div>
                                    <span className="relative bg-white px-3 text-[11px] font-bold text-gray-500 uppercase tracking-widest">Coupons & Offers</span>
                                </div>

                                {/* Mock Coupon Applied */}
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50/50 hover:bg-white transition-colors cursor-pointer">
                                    <div className="flex justify-between items-start">
                                        <div className="flex gap-3">
                                            <Image
                                                src="https://assets.pharmeasy.in/web-assets/images/cartCouponValid.svg?dim=64x64&q=75"
                                                width={28}
                                                height={28}
                                                alt="Coupon"
                                                className="mt-1"
                                                unoptimized
                                            />
                                            <div>
                                                <div className="font-bold text-[#30363c] text-[15px]">MED25NU applied</div>
                                                <div className="text-[13px] text-gray-500 mt-1 leading-snug text-pretty">
                                                    Save 25% on orders above ₹1250, 20% OFF above ₹1000.
                                                </div>
                                            </div>
                                        </div>
                                        <button className="text-[13px] font-bold text-[#a7358d] underline hover:no-underline whitespace-nowrap ml-2">Remove</button>
                                    </div>
                                </div>
                            </div>

                            {/* Bill Summary */}
                            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden relative">
                                <div className="p-5 border-b border-gray-100">
                                    <h3 className="text-[#30363c] font-bold text-[18px]">Bill Summary</h3>
                                </div>
                                <div className="p-5 space-y-4 text-[15px] text-gray-600">
                                    <div className="flex justify-between">
                                        <span className="text-[#4f585e]">MRP</span>
                                        <span className="text-[#30363c]">₹{totalMRP.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-1">
                                            <span className="text-[#4f585e]">Discount</span>
                                        </div>
                                        <span className="text-[#a7358d] font-bold">-₹{totalDiscount.toFixed(2)}</span>
                                    </div>

                                    <div className="border-t border-gray-100 my-2 pt-3 space-y-4">
                                        <div className="flex justify-between">
                                            <span className="text-[#4f585e]">Cart Value</span>
                                            <span className="text-[#30363c] font-medium">₹{totalSellingPrice.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <div className="flex flex-col">
                                                <span className="text-[#4f585e]">Delivery Fee</span>
                                                <div className="flex items-center gap-1.5 mt-1.5">
                                                    <Image
                                                        src="https://assets.pharmeasy.in/web-assets/images/smart-free-delivery/delivery-scooter.png?dim=96x96&q=75"
                                                        width={28}
                                                        height={20}
                                                        alt="scooter"
                                                        className="object-contain"
                                                        unoptimized
                                                    />
                                                    <span className="text-[12px] text-[#30363c]">Free delivery above ₹700 MRP</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-gray-400 line-through text-[13px] block">₹40.00</span>
                                                <span className="text-[#a7358d] font-bold block">FREE</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[#4f585e]">Platform Fee</span>
                                            <span className="text-[#30363c]">₹{platformFee.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center pt-4 border-t border-dashed border-gray-300">
                                        <span className="text-[#30363c] font-bold text-[18px]">Amount to be paid</span>
                                        <span className="text-[#30363c] font-bold text-[18px]">₹{finalAmountToPay.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Savings Banner */}
                                <div className="bg-[#a7358d] relative overflow-hidden">
                                    {/* Background decoration */}
                                    <div className="absolute right-0 top-0 h-full w-24">
                                        <Image src="https://assets.pharmeasy.in/web-assets/images/ellipseWhite.svg" fill alt="" className="object-cover opacity-20" unoptimized />
                                    </div>

                                    <div className="p-4 flex justify-between items-center text-[#fff] relative z-10 px-5">
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src="https://assets.pharmeasy.in/web-assets/images/icon_rupeeCircle.svg?dim=48x48&q=75"
                                                width={20}
                                                height={20}
                                                alt="savings"
                                                className="brightness-0 invert"
                                                unoptimized
                                            />
                                            <span className="text-[15px] font-bold">₹{totalDiscount.toFixed(0)} Saved on this order</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Plus Membership Upsell */}
                            <div className="bg-[#f2f4ff] border border-[#dbe0ff] rounded-xl p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-[#ffc600] rounded text-white flex items-center justify-center font-bold text-xs shadow-sm">+</div>
                                        <span className="text-[#3e4785] font-bold text-[15px] underline cursor-pointer hover:no-underline">PLUS Membership</span>
                                    </div>
                                    <button className="bg-[#6f7fd6] text-white text-[11px] font-bold px-4 py-1.5 rounded-md shadow-sm hover:bg-[#5a6ac0] transition-colors">ADD</button>
                                </div>
                                <div className="pl-8">
                                    <p className="text-[12px] text-[#4f585e] leading-snug">Save upto <span className="font-bold">₹500/month</span> with PLUS membership</p>
                                    <p className="text-[11px] text-[#4f585e] mt-2 flex items-center gap-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#6f7fd6]">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                        </svg>
                                        Get Free delivery for all order above ₹499
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Address Drawer */}
                {showAddressDrawer && (
                    <div className="fixed inset-0 z-50 flex justify-end">
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setShowAddressDrawer(false)}></div>
                        <div className="relative w-full max-w-[420px] bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
                            {/* Background Image decoration */}
                            <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none opacity-20">
                                <Image
                                    src="https://assets.pharmeasy.in/web-assets/images/loginv2.svg?dim=1440x1440&q=75"
                                    fill
                                    alt="decoration"
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>

                            {/* Header */}
                            <div className="p-4 border-b border-gray-100 flex items-center gap-3 relative z-10 bg-white/90 backdrop-blur-sm">
                                <button onClick={() => setShowAddressDrawer(false)} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#30363c]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                    </svg>
                                </button>
                                <h2 className="text-[18px] font-bold text-[#30363c]">Select Address</h2>
                            </div>

                            {/* Form */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-5 relative z-10">
                                <div>
                                    <label className="block text-[12px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Deliver To</label>
                                    <input
                                        type="text"
                                        placeholder="Deliver to"
                                        value={formData.deliverTo}
                                        onChange={(e) => setFormData({ ...formData, deliverTo: e.target.value })}
                                        className="w-full border border-gray-300 rounded-lg h-12 px-4 outline-none focus:border-[#a7358d] focus:ring-1 focus:ring-[#a7358d] transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[12px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Mobile Number</label>
                                    <input
                                        type="text"
                                        placeholder="Mobile Number"
                                        value={formData.mobile}
                                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                        className="w-full border border-gray-300 rounded-lg h-12 px-4 outline-none focus:border-[#a7358d] focus:ring-1 focus:ring-[#a7358d] transition-all"
                                    />
                                    <p className="text-xs text-gray-400 mt-1">For all delivery related communication</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[12px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Pincode</label>
                                        <input
                                            type="text"
                                            placeholder="Pincode"
                                            value={formData.pincode}
                                            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                                            className="w-full border border-gray-300 rounded-lg h-12 px-4 outline-none focus:border-[#a7358d] focus:ring-1 focus:ring-[#a7358d] transition-all"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[12px] font-bold text-gray-500 mb-1 uppercase tracking-wider">House No & Building</label>
                                    <input
                                        type="text"
                                        placeholder="House number and building"
                                        value={formData.houseNo}
                                        onChange={(e) => setFormData({ ...formData, houseNo: e.target.value })}
                                        className="w-full border border-gray-300 rounded-lg h-12 px-4 outline-none focus:border-[#a7358d] focus:ring-1 focus:ring-[#a7358d] transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[12px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Street Name</label>
                                    <input
                                        type="text"
                                        placeholder="Street Name"
                                        value={formData.street}
                                        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                                        className="w-full border border-gray-300 rounded-lg h-12 px-4 outline-none focus:border-[#a7358d] focus:ring-1 focus:ring-[#a7358d] transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[12px] font-bold text-gray-500 mb-3 uppercase tracking-wider">Address Type<span className="text-red-500">*</span></label>
                                    <div className="flex gap-3">
                                        {['Home', 'Work', 'Others'].map((type) => (
                                            <button
                                                key={type}
                                                onClick={() => setFormData({ ...formData, type })}
                                                className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${formData.type === type ? 'border-[#a7358d] bg-[#fdf2f8] text-[#a7358d]' : 'border-gray-300 text-gray-600 hover:border-gray-400'}`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-4 border-t border-gray-100 bg-white">
                                <button
                                    onClick={handleSaveAddress}
                                    className="w-full bg-[#a7358d] hover:bg-[#8e2d78] text-white font-bold py-3.5 rounded-lg text-[16px] shadow-lg transition-transform active:scale-[0.98]"
                                >
                                    Save and Continue
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}
