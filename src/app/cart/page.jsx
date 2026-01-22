"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';
import Header from '../pharmacy/common-components/Header/Header';
import Footer from '../pharmacy/common-components/Footer/Footer';

// --- Components ---

// Recommended Product Card
const RecommendedCard = ({ product, addToCart }) => (
    <div
        className="group bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 cursor-pointer flex flex-col h-full"
        onClick={() => addToCart(product)}
    >
        <div className="relative h-40 w-full mb-4 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-4">
            <Image
                src={product.image}
                alt={product.title}
                width={120}
                height={120}
                className="object-contain w-auto h-full mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                unoptimized
            />
            <button className="absolute bottom-3 right-3 bg-white text-[#a7358d] w-8 h-8 rounded-full flex items-center justify-center shadow-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#a7358d] hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
        <div className="flex-1 flex flex-col">
            <h4 className="text-[14px] font-semibold text-gray-800 leading-snug line-clamp-2 mb-2 group-hover:text-[#a7358d] transition-colors">{product.title}</h4>
            <div className="mt-auto">
                <div className="flex items-baseline gap-2">
                    <span className="text-[16px] font-bold text-gray-900">{product.price}</span>
                    <span className="text-[12px] text-gray-400 line-through">{product.mrp}</span>
                </div>
                <span className="text-[10px] font-bold text-[#a7358d] bg-[#fdf2f8] px-2 py-0.5 rounded-full mt-1 inline-block border border-[#a7358d]/20">
                    {product.discount} OFF
                </span>
            </div>
        </div>
    </div>
);

// Quantity Selector
const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => (
    <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1 h-9 shadow-sm">
        <button
            onClick={onDecrease}
            disabled={quantity <= 1}
            className="w-7 h-full flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-md transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
        </button>
        <span className="w-8 text-center font-bold text-sm text-gray-800">{quantity}</span>
        <button
            onClick={onIncrease}
            className="w-7 h-full flex items-center justify-center text-[#a7358d] hover:bg-[#a7358d]/10 rounded-md transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
);

// --- Data ---
const recommendedProducts = [
    {
        id: "rec-1",
        title: "Novegrow Nutri Strip Of 10 Tablets",
        mrp: "₹311.00",
        price: "₹220.81",
        discount: "29%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/R54546/novegrow-nutri-strip-of-10-tablets-6.1-1763039292.jpg?dim=1440x0"
    },
    {
        id: "rec-2",
        title: "Durex Extra Time Ultra Thin 10 Condoms",
        mrp: "₹420.00",
        price: "₹247.80",
        discount: "41%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/A64587/durex-extra-time-ultra-thin-10-condoms-6.01-1739429637.jpg?dim=1440x0"
    },
    {
        id: "rec-3",
        title: "Venusia Cleanser Hydration & Barrier Protect",
        mrp: "₹440.00",
        price: "₹356.40",
        discount: "19%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/L05023/venusia-cleanser-hydration-barrier-protect-125-ml-6.01-1764134722.jpg?dim=1440x0"
    },
    {
        id: "rec-4",
        title: "Nestle Cerelac Baby Cereal Multigrain & Fruits",
        mrp: "₹295.00",
        price: "₹250.75",
        discount: "15%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/B33907/nestle-cerelac-baby-cereal-no-refined-sugar-multigrain-fruits-for-12-24-months-baby-300-gm-2-1755589638.jpg?dim=1440x0"
    }
];

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount, addToCart, clearCart } = useCart();
    const [viewState, setViewState] = useState('CART'); // CART, ADDRESS, PAYMENT, SUCCESS
    const [savedAddress, setSavedAddress] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState('UPI');
    const [upiId, setUpiId] = useState('');
    const [loadingCity, setLoadingCity] = useState(false);

    const [addressForm, setAddressForm] = useState({
        deliverTo: '',
        mobile: '',
        pincode: '',
        city: '',
        houseNo: '',
        street: '',
        type: 'Home'
    });

    // Pincode Lookup Effect
    useEffect(() => {
        if (addressForm.pincode.length === 6) {
            lookupPincode(addressForm.pincode);
        } else {
            setAddressForm(prev => ({ ...prev, city: '' }));
        }
    }, [addressForm.pincode]);

    const lookupPincode = async (pincode) => {
        setLoadingCity(true);
        try {
            const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
            const data = await response.json();
            if (data[0].Status === 'Success') {
                const city = data[0].PostOffice[0].District;
                const state = data[0].PostOffice[0].State;
                setAddressForm(prev => ({ ...prev, city: `${city}, ${state}` }));
            }
        } catch (error) {
            console.error("Failed to fetch city", error);
        } finally {
            setLoadingCity(false);
        }
    };

    // Helper to parse price string
    const parsePrice = (priceStr) => {
        if (typeof priceStr === 'number') return priceStr;
        if (!priceStr) return 0;
        return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
    };

    // Calculations
    const totalMRP = cartItems.reduce((total, item) => total + (parsePrice(item.mrp) * item.quantity), 0);
    const totalSellingPrice = cartTotal;
    const totalDiscount = totalMRP - totalSellingPrice;
    const deliveryFee = totalSellingPrice > 700 ? 0 : 40;
    const platformFee = 6.00;
    const finalAmountToPay = totalSellingPrice + platformFee + deliveryFee;

    const handleSaveAddress = () => {
        if (!addressForm.mobile || !addressForm.pincode || !addressForm.city || !addressForm.houseNo || !addressForm.street || !addressForm.deliverTo) {
            alert("Please fill in all required fields.");
            return;
        }
        setSavedAddress(addressForm);
        setViewState('CART');
    };

    const handleProceed = () => {
        if (!savedAddress) {
            setViewState('ADDRESS');
        } else {
            setViewState('PAYMENT');
        }
    };

    const handlePayment = () => {
        if (paymentMethod === 'UPI' && !upiId.includes('@')) {
            alert('Please enter a valid UPI ID');
            return;
        }

        // Simulating Payment Processing
        setTimeout(() => {
            clearCart(); // Clear the cart on successful order
            setViewState('SUCCESS');
        }, 1500);
    };

    if (cartItems.length === 0) {
        return (
            <>
                <Header />
                <div className="min-h-[80vh] bg-[#f8f9fa] flex flex-col items-center justify-center p-4">

                    <h2 className="text-3xl font-bold text-gray-800 mb-3 tracking-tight">Your Cart is Empty</h2>
                    <p className="text-gray-500 mb-10 text-center max-w-md text-lg">Looks like you haven't added anything to your cart yet.</p>
                    <Link href="/pharmacy/home" className="bg-[#a7358d] text-white px-12 py-4 rounded-xl font-bold hover:bg-[#852a71] transition-all shadow-xl hover:shadow-[#a7358d]/30 hover:-translate-y-1">
                        Start Shopping
                    </Link>
                </div>
                <Footer />
            </>
        );
    }

    if (viewState === 'SUCCESS') {
        return (
            <>
                <Header />
                <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4">
                    <div className="bg-white rounded-[32px] p-12 w-full max-w-lg text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#a7358d] to-[#8e2d78]"></div>
                        <div className="w-28 h-28 bg-[#fdf2f8] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner ring-8 ring-[#fdf2f8]/50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-[#a7358d]">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Order Placed!</h2>
                        <p className="text-gray-500 mb-10 text-lg">We have received your order. You will receive a confirmation email shortly.</p>
                        <Link href="/pharmacy/home" className="block w-full bg-[#30363c] text-white font-bold py-5 rounded-2xl hover:bg-black transition-all shadow-xl">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    // Main Cart Layout
    return (
        <div className="min-h-screen bg-[#f8f9fa] font-sans">
            <Header />

            <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {viewState === 'CART' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
                            <div>
                                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Shopping Cart</h1>
                                <p className="text-gray-500 text-sm font-medium">{cartCount} items selected</p>
                            </div>
                            {totalDiscount > 0 && (
                                <span className="text-xs font-bold px-3 py-1 bg-[#fdf2f8] text-[#a7358d] rounded-full border border-[#a7358d]/20 flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                    </svg>
                                    Savings Applied: ₹{totalDiscount.toFixed(2)}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col lg:flex-row gap-10">
                            {/* Left Section: Cart Items */}
                            <div className="flex-1 space-y-8">
                                {/* Offer Strip */}
                                <div className="bg-gradient-to-r from-[#8e2d78] to-[#a7358d] rounded-2xl p-0.5 shadow-lg group">
                                    <div className="bg-white rounded-[14px] px-6 py-4 flex items-center gap-4 relative overflow-hidden">
                                        <div className="absolute right-0 top-0 w-32 h-32 bg-[#a7358d]/5 rounded-full -translate-y-1/2 translate-x-10"></div>
                                        <div className="w-10 h-10 rounded-full bg-[#fdf2f8] flex items-center justify-center shrink-0 text-[#a7358d]">
                                            <span className="text-xl">🎁</span>
                                        </div>
                                        <div>
                                            <p className="text-gray-900 font-bold text-sm">Unlock Extra 15% Off</p>
                                            <p className="text-xs text-gray-500">Add items worth ₹1208 more to avail this offer.</p>
                                        </div>
                                        <button className="ml-auto text-[#a7358d] font-bold text-sm hover:underline">View Offers</button>
                                    </div>
                                </div>

                                {/* Items List */}
                                <div className="space-y-4">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-6 group">
                                            <div className="w-32 h-32 bg-gray-50 rounded-xl flex items-center justify-center p-2 border border-gray-100 shrink-0">
                                                <Image src={item.image} alt={item.title} width={100} height={100} className="object-contain h-full w-full mix-blend-multiply" unoptimized />
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="font-bold text-lg text-gray-800 line-clamp-1 group-hover:text-[#a7358d] transition-colors">{item.title}</h3>
                                                        <p className="text-xs text-gray-400 mt-1">Pack of 1 • By Pharmeasy</p>
                                                    </div>
                                                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors p-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </div>

                                                <div className="flex items-end justify-between mt-4">
                                                    <div className="flex items-center gap-4">
                                                        <QuantitySelector
                                                            quantity={item.quantity}
                                                            onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                                                            onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                                                        />
                                                        <div>
                                                            <div className="flex items-center gap-2">
                                                                <span className="font-bold text-xl text-gray-900">{item.price}</span>
                                                                <span className="text-xs text-[#a7358d] bg-[#fdf2f8] px-1.5 py-0.5 rounded font-bold border border-[#a7358d]/20">20% OFF</span>
                                                            </div>
                                                            <span className="text-xs text-gray-400 line-through">MRP {item.mrp}</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-xs font-semibold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                                                        Delivery by <span className="text-gray-800">Tomorrow</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Personalized Recommendations */}
                                <div className="mt-12">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-xl font-bold text-gray-900">Recommended for You</h2>
                                        <a href="#" className="text-sm font-bold text-[#a7358d] hover:text-[#8e2d78]">View All</a>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                        {recommendedProducts.map(prod => (
                                            <RecommendedCard key={prod.id} product={prod} addToCart={addToCart} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Section: Summary & Checkout - FIXED STICKY */}
                            <div className="w-full lg:w-[400px] shrink-0 h-fit sticky top-24 space-y-6">
                                {/* Bill Panel */}
                                <div className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
                                    <div className="p-6 border-b border-gray-50">
                                        <h3 className="font-bold text-lg text-gray-900">Order Summary</h3>
                                    </div>

                                    <div className="p-6 space-y-3">
                                        <div className="flex justify-between text-sm text-gray-500">
                                            <span>Cart Value</span>
                                            <span className="font-medium text-gray-900">₹{totalMRP.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-[#a7358d]">
                                            <span>Product Discount</span>
                                            <span className="font-bold">- ₹{totalDiscount.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-500">
                                            <span>Delivery Charges</span>
                                            <span className="font-medium text-[#a7358d]">
                                                {deliveryFee === 0 ? <span className="line-through text-gray-300 mr-2">₹40</span> : null}
                                                {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-500">
                                            <span>Platform Fee</span>
                                            <span className="font-medium text-gray-900">₹{platformFee.toFixed(2)}</span>
                                        </div>

                                        <div className="border-t border-dashed border-gray-200 my-4"></div>

                                        <div className="flex justify-between items-center mb-6">
                                            <span className="font-bold text-lg text-gray-900">Total Amount</span>
                                            <span className="font-bold text-xl text-gray-900">₹{finalAmountToPay.toFixed(2)}</span>
                                        </div>

                                        <button
                                            onClick={handleProceed}
                                            className="w-full bg-[#30363c] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-black transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                                        >
                                            {savedAddress ? 'Proceed to Pay' : 'Select Address'}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Savings Banner - Violet */}
                                    <div className="bg-[#fdf2f8] p-4 flex items-center justify-center gap-2 border-t border-[#fce7f3]">
                                        <span className="text-xl">✨</span>
                                        <span className="text-[#a7358d] text-sm font-bold">You saved ₹{totalDiscount.toFixed(0)} on this order!</span>
                                    </div>
                                </div>

                                {/* Address Preview Card - Sticky with Bill Panel */}
                                {savedAddress && (
                                    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex justify-between group cursor-pointer hover:border-[#a7358d] transition-colors" onClick={() => setViewState('ADDRESS')}>
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-[#fdf2f8] group-hover:text-[#a7358d] transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 text-sm">{savedAddress.type}</h4>
                                                <p className="text-xs text-gray-500 mt-1 line-clamp-1">{savedAddress.houseNo}, {savedAddress.street}, {savedAddress.city}</p>
                                            </div>
                                        </div>
                                        <span className="text-xs font-bold text-[#a7358d] self-center">CHANGE</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* --- NEW: Ultra-Pro Trust & Feature Section --- */}
                        <div className="mt-24 border-t border-gray-100  animate-in slide-in-from-bottom-8 duration-700">
                            <div className="text-center mb-12">
                                <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">Why Over 1 Million Customers Trust Us</h3>
                                <div className="w-16 h-1 bg-[#a7358d] mx-auto rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {[
                                    {
                                        title: "Super Fast Delivery",
                                        desc: "Get your medicines delivered by tomorrow.",
                                        icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#a7358d]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "100% Genuine",
                                        desc: "Sourced directly from authorized distributors.",
                                        icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#a7358d]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Sanitized Packaging",
                                        desc: "Safe and hygienic packaging for every order.",
                                        icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#a7358d]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Secure Payments",
                                        desc: "100% safe & encrypted transactions.",
                                        icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#a7358d]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                            </svg>
                                        )
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                                        <div className="w-20 h-20 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-lg shadow-gray-100 mb-6 group-hover:scale-110 group-hover:shadow-[0_15px_30px_rgba(167,53,141,0.15)] transition-all duration-300 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-[#fdf2f8] to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <div className="relative z-10">{item.icon}</div>
                                        </div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Help Banner */}
                            <div className="mt-16 bg-white rounded-2xl border border-gray-100 p-8 flex flex-col md:flex-row items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden">
                                <div className="absolute left-0 top-0 h-full w-2 bg-[#a7358d]"></div>
                                <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-[#fdf2f8] to-transparent opacity-50"></div>

                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="w-14 h-14 rounded-full bg-[#fdf2f8] flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#a7358d]">
                                            <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">Need Help with your Order?</h4>
                                        <p className="text-gray-500 text-sm mt-1">Our support team is available 24/7 to assist you.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-6 md:mt-0 relative z-10">
                                    <button className="px-6 py-3 rounded-xl border border-gray-200 font-bold text-gray-700 hover:border-[#a7358d] hover:text-[#a7358d] hover:bg-[#fdf2f8] transition-all text-sm">Chat Support</button>
                                    <button className="px-6 py-3 rounded-xl bg-[#30363c] text-white font-bold hover:bg-black transition-all shadow-lg text-sm">Call Us Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- ADDRESS DRAWER --- */}
                {viewState === 'ADDRESS' && (
                    <div className="fixed inset-0 z-50 flex justify-end">
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setViewState('CART')}></div>
                        <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
                            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                                <h2 className="text-xl font-extrabold text-gray-900">Add Delivery Address</h2>
                                <button onClick={() => setViewState('CART')} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 bg-[#fafafa]">
                                <form className="space-y-6">
                                    <div className="bg-white p-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] space-y-5">
                                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Contact Details</h3>
                                        <div className="space-y-4">
                                            <div className="relative group">
                                                <input
                                                    type="text"
                                                    className="block w-full px-4 py-3 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#a7358d] peer transition-colors"
                                                    placeholder=" "
                                                    value={addressForm.deliverTo}
                                                    onChange={(e) => setAddressForm({ ...addressForm, deliverTo: e.target.value })}
                                                />
                                                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#a7358d] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                                                    Full Name
                                                </label>
                                            </div>
                                            <div className="relative group">
                                                <input
                                                    type="number"
                                                    className="block w-full px-4 py-3 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#a7358d] peer transition-colors"
                                                    placeholder=" "
                                                    value={addressForm.mobile}
                                                    onChange={(e) => setAddressForm({ ...addressForm, mobile: e.target.value })}
                                                />
                                                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#a7358d] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                                                    Mobile Number
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] space-y-5">
                                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Address Details</h3>

                                        <div className="flex gap-4">
                                            <div className="relative group flex-1">
                                                <input
                                                    type="text"
                                                    className="block w-full px-4 py-3 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#a7358d] peer transition-colors"
                                                    placeholder=" "
                                                    maxLength={6}
                                                    value={addressForm.pincode}
                                                    onChange={(e) => setAddressForm({ ...addressForm, pincode: e.target.value })}
                                                />
                                                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#a7358d] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                                                    Pincode
                                                </label>
                                                {loadingCity && <div className="absolute right-3 top-3"><div className="w-5 h-5 border-2 border-[#a7358d] border-t-transparent rounded-full animate-spin"></div></div>}
                                            </div>
                                            <div className="relative group flex-1">
                                                <input
                                                    type="text"
                                                    className="block w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none cursor-not-allowed"
                                                    placeholder="City/State"
                                                    value={addressForm.city}
                                                    readOnly
                                                />
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <input
                                                type="text"
                                                className="block w-full px-4 py-3 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#a7358d] peer transition-colors"
                                                placeholder=" "
                                                value={addressForm.houseNo}
                                                onChange={(e) => setAddressForm({ ...addressForm, houseNo: e.target.value })}
                                            />
                                            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#a7358d] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                                                House No, Building
                                            </label>
                                        </div>

                                        <div className="relative group">
                                            <input
                                                type="text"
                                                className="block w-full px-4 py-3 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#a7358d] peer transition-colors"
                                                placeholder=" "
                                                value={addressForm.street}
                                                onChange={(e) => setAddressForm({ ...addressForm, street: e.target.value })}
                                            />
                                            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#a7358d] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                                                Street Name, Area
                                            </label>
                                        </div>

                                        <div className="pt-2">
                                            <label className="block text-xs font-bold text-gray-500 mb-3 uppercase">Address Type</label>
                                            <div className="flex gap-3">
                                                {['Home', 'Work', 'Others'].map(type => (
                                                    <button
                                                        key={type}
                                                        type="button"
                                                        onClick={() => setAddressForm({ ...addressForm, type })}
                                                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all border ${addressForm.type === type ? 'border-[#a7358d] bg-[#fdf2f8] text-[#a7358d]' : 'border-gray-200 text-gray-500 hover:border-gray-300 bg-white'}`}
                                                    >
                                                        {type}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="p-5 border-t border-gray-100 bg-white z-10">
                                <button onClick={handleSaveAddress} className="w-full bg-[#30363c] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-black transition-all active:scale-[0.98]">
                                    Save Address & Continue
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- PAYMENT SCREEN (Refined International UI) --- */}
                {viewState === 'PAYMENT' && (
                    <div className="animate-in fade-in duration-500 max-w-7xl mx-auto pt-4">
                        <div className="flex items-center gap-6 mb-12">
                            <button onClick={() => setViewState('CART')} className="w-12 h-12 rounded-full bg-white hover:bg-gray-50 shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex items-center justify-center transition-all hover:-translate-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                            </button>
                            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Select Payment Method</h1>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-12 items-start">
                            {/* Left: Payment Options */}
                            <div className="flex-1 space-y-5">
                                <div className="space-y-5">
                                    {/* UPI Option */}
                                    <div
                                        className={`group bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 border ${paymentMethod === 'UPI' ? 'border-[#a7358d] shadow-[0_4px_20px_rgba(167,53,141,0.15)] ring-1 ring-[#a7358d]' : 'border-gray-100 hover:border-gray-200 hover:shadow-md'}`}
                                        onClick={() => setPaymentMethod('UPI')}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-5">
                                                <div className="w-16 h-16 bg-[#f8f9fa] rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-10 h-10">
                                                        <path fill="#e0e0e0" d="M12 4h24v40H12z" />
                                                        <path fill="#212121" d="M14 6h20v28H14z" />
                                                        <path fill="#e0e0e0" d="M22 38h4v2h-4z" />
                                                        <path fill="#4caf50" d="M20 16l4 4 4-4-4-4z" />
                                                        <path fill="#fff" d="M24 12l-4 4 4 4 4-4z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className={`font-bold text-lg transition-colors ${paymentMethod === 'UPI' ? 'text-[#a7358d]' : 'text-gray-900'}`}>UPI / QR Code</h3>
                                                    <p className="text-sm text-gray-500 mt-1 font-medium">Pay via UPI Apps</p>
                                                    <div className="flex gap-2 mt-2 opacity-60">
                                                        <img src="https://cdn-icons-png.flaticon.com/128/300/300222.png" alt="GPay" className="h-4 object-contain" />
                                                        <img src="https://cdn-icons-png.flaticon.com/128/825/825454.png" alt="PhonePe" className="h-4 object-contain" />
                                                        <img src="https://raw.githubusercontent.com/yurijserrano/Assets/master/Payment-Methods/paytm.svg" alt="Paytm" className="h-4 object-contain" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === 'UPI' ? 'border-[#a7358d]' : 'border-gray-300 group-hover:border-gray-400'}`}>
                                                {paymentMethod === 'UPI' && <div className="w-3 h-3 rounded-full bg-[#a7358d]"></div>}
                                            </div>
                                        </div>
                                        {paymentMethod === 'UPI' && (
                                            <div className="mt-6 pt-6 border-t border-dashed border-gray-200 animate-in slide-in-from-top-2">
                                                <label className="block text-xs font-bold text-gray-500 uppercase mb-3 tracking-wide">Enter UPI ID</label>
                                                <div className="flex gap-4">
                                                    <input
                                                        type="text"
                                                        placeholder="e.g. 9876543210@upi"
                                                        value={upiId}
                                                        onChange={(e) => setUpiId(e.target.value)}
                                                        className="flex-1 bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 font-medium outline-none focus:bg-white focus:border-[#a7358d] transition-all placeholder:text-gray-400"
                                                    />
                                                    <button onClick={handlePayment} className="bg-[#a7358d] text-white px-8 rounded-xl font-bold hover:bg-[#8e2d78] shadow-lg shadow-[#a7358d]/20 transition-all active:scale-95">
                                                        Verify
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Card Option */}
                                    <div
                                        className={`group bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 border ${paymentMethod === 'Card' ? 'border-[#a7358d] shadow-[0_4px_20px_rgba(167,53,141,0.15)] ring-1 ring-[#a7358d]' : 'border-gray-100 hover:border-gray-200 hover:shadow-md'}`}
                                        onClick={() => setPaymentMethod('Card')}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-5">
                                                <div className="w-16 h-16 bg-[#f8f9fa] rounded-xl flex items-center justify-center shrink-0 border border-gray-100 p-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-gray-700">
                                                        <rect x="2" y="5" width="20" height="14" rx="2" />
                                                        <line x1="2" y1="10" x2="22" y2="10" />
                                                        <line x1="6" y1="15" x2="10" y2="15" />
                                                        <path d="M16 15h.01" strokeWidth="2.5" className="text-[#a7358d]" stroke="#a7358d" />
                                                        <path d="M19 15h.01" strokeWidth="2.5" className="text-[#a7358d]" stroke="#a7358d" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className={`font-bold text-lg transition-colors ${paymentMethod === 'Card' ? 'text-[#a7358d]' : 'text-gray-900'}`}>Credit / Debit Card</h3>
                                                    <div className="flex gap-2 mt-2 opacity-70">
                                                        <div className="h-5 w-8 bg-blue-600 rounded"></div>
                                                        <div className="h-5 w-8 bg-red-500 rounded relative overflow-hidden"><div className="absolute top-0 right-0 w-4 h-5 bg-orange-400 rounded-l-full opacity-80"></div></div>
                                                        <div className="h-5 w-8 bg-cyan-600 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === 'Card' ? 'border-[#a7358d]' : 'border-gray-300 group-hover:border-gray-400'}`}>
                                                {paymentMethod === 'Card' && <div className="w-3 h-3 rounded-full bg-[#a7358d]"></div>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* COD Option */}
                                    <div
                                        className={`group bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 border ${paymentMethod === 'COD' ? 'border-[#a7358d] shadow-[0_4px_20px_rgba(167,53,141,0.15)] ring-1 ring-[#a7358d]' : 'border-gray-100 hover:border-gray-200 hover:shadow-md'}`}
                                        onClick={() => setPaymentMethod('COD')}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-5">
                                                <div className="w-16 h-16 bg-[#f8f9fa] rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-green-600">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className={`font-bold text-lg transition-colors ${paymentMethod === 'COD' ? 'text-[#a7358d]' : 'text-gray-900'}`}>Cash on Delivery</h3>
                                                    <p className="text-sm text-gray-500 mt-1 font-medium">Pay via Cash/UPI on delivery</p>
                                                </div>
                                            </div>
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === 'COD' ? 'border-[#a7358d]' : 'border-gray-300 group-hover:border-gray-400'}`}>
                                                {paymentMethod === 'COD' && <div className="w-3 h-3 rounded-full bg-[#a7358d]"></div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Payment Summary */}
                            <div className="w-full lg:w-[420px] shrink-0 sticky top-24 h-fit">
                                <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]">
                                    <h3 className="font-extrabold text-xl text-gray-900 mb-8 pb-4 border-b border-gray-100">Payment Breakdown</h3>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex justify-between text-gray-500 font-medium">
                                            <span>Cart Total</span>
                                            <span className="text-gray-900">₹{totalSellingPrice.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-500 font-medium">
                                            <span>Delivery Fee</span>
                                            <span className="text-green-600 font-bold tracking-wide">{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-500 font-medium">
                                            <span>Taxes & Fees</span>
                                            <span className="text-gray-900">₹{platformFee.toFixed(2)}</span>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-xl flex justify-between items-center mt-6 border border-gray-100">
                                            <span className="font-bold text-gray-900 text-lg">Total Payable</span>
                                            <span className="font-extrabold text-2xl text-[#a7358d]">₹{finalAmountToPay.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    {paymentMethod !== 'UPI' && (
                                        <button onClick={handlePayment} className="group w-full bg-[#30363c] text-white py-4 rounded-xl font-bold text-lg shadow-[0_10px_20px_-5px_rgba(48,54,60,0.3)] hover:bg-black hover:shadow-black/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                                            <span>Pay Securely</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>
                                        </button>
                                    )}

                                    <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-gray-400 font-bold uppercase tracking-widest bg-gray-50 py-3 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#a7358d]">
                                            <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 8.836a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                        SSL Secure Payment
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
