"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';
import { FaArrowLeft, FaMapMarkerAlt, FaCheck, FaWallet, FaCreditCard, FaMoneyBillWave, FaChevronRight } from 'react-icons/fa';

// Reuse RecommendedCard (simplified for mobile)
const RecommendedCardMobile = ({ product, addToCart }) => (
    <div className="min-w-[140px] bg-white rounded-xl border border-gray-100 p-3 shadow-sm flex flex-col">
        <div className="relative h-24 w-full mb-2 bg-gray-50 rounded-lg flex items-center justify-center p-2">
            <Image src={product.image} alt={product.title} width={80} height={80} className="object-contain w-auto h-full mix-blend-multiply" unoptimized />
        </div>
        <h4 className="text-xs font-semibold text-gray-800 line-clamp-2 mb-1 leading-tight">{product.title}</h4>
        <div className="mt-auto">
            <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-gray-900">{product.price}</span>
                <span className="text-[10px] text-gray-400 line-through">{product.mrp}</span>
            </div>
            <button
                onClick={() => addToCart(product)}
                className="w-full mt-2 bg-[#fdf2f8] text-[#a7358d] text-xs font-bold py-1.5 rounded-lg border border-[#a7358d]/20"
            >
                ADD
            </button>
        </div>
    </div>
);

// Data (Copied from desktop for consistency)
const recommendedProducts = [
    { id: "rec-1", title: "Novegrow Nutri Strip Of 10 Tablets", mrp: "₹311.00", price: "₹220.81", discount: "29%", image: "https://cdn01.pharmeasy.in/dam/products_otc/R54546/novegrow-nutri-strip-of-10-tablets-6.1-1763039292.jpg?dim=1440x0" },
    { id: "rec-2", title: "Durex Extra Time Ultra Thin 10 Condoms", mrp: "₹420.00", price: "₹247.80", discount: "41%", image: "https://cdn01.pharmeasy.in/dam/products_otc/A64587/durex-extra-time-ultra-thin-10-condoms-6.01-1739429637.jpg?dim=1440x0" },
    { id: "rec-3", title: "Venusia Cleanser Hydration & Barrier Protect", mrp: "₹440.00", price: "₹356.40", discount: "19%", image: "https://cdn01.pharmeasy.in/dam/products_otc/L05023/venusia-cleanser-hydration-barrier-protect-125-ml-6.01-1764134722.jpg?dim=1440x0" },
];

export default function MobileCartPage() {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount, addToCart, clearCart } = useCart();
    // VIEW STATES: CART -> ADDRESS -> PAYMENT -> SUCCESS
    const [viewState, setViewState] = useState('CART');
    const [savedAddress, setSavedAddress] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);

    // Address Form
    const [addressForm, setAddressForm] = useState({ deliverTo: '', mobile: '', pincode: '', city: '', houseNo: '', street: '', type: 'Home' });

    // Calculations
    const parsePrice = (priceStr) => {
        if (typeof priceStr === 'number') return priceStr;
        if (!priceStr) return 0;
        return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
    };
    const totalMRP = cartItems.reduce((total, item) => total + (parsePrice(item.mrp) * item.quantity), 0);
    const totalDiscount = totalMRP - cartTotal;
    const deliveryFee = cartTotal > 700 ? 0 : 40;
    const platformFee = 6.00;
    const finalAmountToPay = cartTotal + platformFee + deliveryFee;

    const handleSaveAddress = () => {
        if (!addressForm.mobile || !addressForm.pincode || !addressForm.city || !addressForm.houseNo || !addressForm.street || !addressForm.deliverTo) {
            alert("Please fill in all required fields.");
            return;
        }
        setSavedAddress(addressForm);
        setViewState('PAYMENT'); // Mobile flow: Address -> Payment directly
    };

    const handlePlaceOrder = () => {
        if (!paymentMethod) {
            alert("Please select a payment method");
            return;
        }
        setTimeout(() => {
            clearCart();
            setViewState('SUCCESS');
        }, 1500);
    };

    // --- EMPTY CART ---
    if (cartItems.length === 0 && viewState !== 'SUCCESS') {
        return (
            <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-center p-6 text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                    <span className="text-4xl">🛒</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
                <p className="text-sm text-gray-500 mb-8">Add medicines and health products to your cart.</p>
                <Link href="/pharmacy/home" className="bg-[#a7358d] text-white px-8 py-3 rounded-xl font-bold text-sm shadow-md">
                    Start Shopping
                </Link>
            </div>
        );
    }

    // --- SUCCESS SCREEN ---
    if (viewState === 'SUCCESS') {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 bg-[#fdf2f8] rounded-full flex items-center justify-center mb-6 ring-8 ring-[#fdf2f8]/50">
                    <FaCheck className="text-3xl text-[#a7358d]" />
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-2">Order Placed!</h2>
                <p className="text-gray-500 mb-8 text-sm">We have received your order. You will receive an SMS confirmation shortly.</p>
                <Link href="/pharmacy/home" className="w-full bg-[#30363c] text-white font-bold py-3.5 rounded-xl shadow-lg">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    // --- CART VIEW ---
    if (viewState === 'CART') {
        return (
            <div className="min-h-screen bg-[#f4f6f8] pb-32">
                {/* Header */}
                <div className="bg-white p-4 flex items-center gap-3 shadow-sm sticky top-0 z-20">
                    <Link href="/pharmacy/home" className="text-gray-500"><FaArrowLeft /></Link>
                    <h1 className="text-lg font-bold text-gray-900">My Cart ({cartCount})</h1>
                </div>

                {/* Items */}
                <div className="p-4 space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-3">
                            <div className="w-20 h-20 bg-gray-50 rounded-lg p-1 shrink-0 flex items-center justify-center">
                                <Image src={item.image} width={60} height={60} alt="" className="object-contain" unoptimized />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-sm text-gray-800 line-clamp-2">{item.title}</h3>
                                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 p-1"><span className="text-lg">×</span></button>
                                </div>
                                <div className="flex justify-between items-end mt-2">
                                    <div>
                                        <p className="text-xs text-gray-400 line-through">{item.mrp}</p>
                                        <p className="font-bold text-gray-900">{item.price}</p>
                                    </div>
                                    <div className="flex items-center gap-3 bg-gray-50 rounded border border-gray-200 px-2 py-1">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-[#a7358d] font-bold px-1">-</button>
                                        <span className="text-xs font-bold w-3 text-center">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-[#a7358d] font-bold px-1">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Savings Strip */}
                {totalDiscount > 0 && (
                    <div className="bg-[#eefcf3] mx-4 p-3 rounded-lg border border-green-100 flex items-center gap-2 mb-4">
                        <span className="text-green-600">✨</span>
                        <span className="text-xs font-bold text-green-700">You saved ₹{totalDiscount.toFixed(2)}!</span>
                    </div>
                )}

                {/* Recommendations */}
                <div className="px-4 mb-4">
                    <h3 className="font-bold text-gray-900 text-sm mb-3">Last Minute Add-ons</h3>
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {recommendedProducts.map(p => <RecommendedCardMobile key={p.id} product={p} addToCart={addToCart} />)}
                    </div>
                </div>

                {/* Standard Bill Summary */}
                <div className="bg-white p-4 mx-4 rounded-xl border border-gray-100 space-y-2 mb-4">
                    <h3 className="font-bold text-sm text-gray-900 mb-2">Bill Summary</h3>
                    <div className="flex justify-between text-xs text-gray-500"><span>Cart Value</span><span>₹{totalMRP.toFixed(2)}</span></div>
                    <div className="flex justify-between text-xs text-green-600"><span>Product Discount</span><span>-₹{totalDiscount.toFixed(2)}</span></div>
                    <div className="flex justify-between text-xs text-gray-500"><span>Delivery Fee</span><span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span></div>
                    <div className="flex justify-between text-xs text-gray-500 border-b border-dashed border-gray-200 pb-2"><span>Handling Fee</span><span>₹{platformFee.toFixed(2)}</span></div>
                    <div className="flex justify-between text-sm font-bold text-gray-900 pt-1"><span>To Pay</span><span>₹{finalAmountToPay.toFixed(2)}</span></div>
                </div>

                {/* Bottom Bar */}
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-3 px-4 z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <p className="text-[10px] text-gray-500 uppercase font-bold">Total</p>
                            <p className="text-lg font-black text-[#30363c]">₹{finalAmountToPay.toFixed(2)}</p>
                        </div>
                        <button
                            onClick={() => setViewState('ADDRESS')}
                            className="bg-[#a7358d] text-white px-8 py-3 rounded-xl font-bold flex-1 shadow-lg active:scale-95"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // --- ADDRESS VIEW ---
    if (viewState === 'ADDRESS') {
        return (
            <div className="min-h-screen bg-white pb-24">
                <div className="bg-white p-4 flex items-center gap-3 border-b border-gray-100 sticky top-0 z-20">
                    <button onClick={() => setViewState('CART')} className="text-gray-500"><FaArrowLeft /></button>
                    <h1 className="text-lg font-bold text-gray-900">Add Address</h1>
                </div>

                <div className="p-5 space-y-5">
                    <div className="space-y-4">
                        <input type="text" placeholder="Full Name" className="w-full p-3 bg-gray-50 rounded-xl text-sm outline-none focus:ring-1 focus:ring-[#a7358d]" value={addressForm.deliverTo} onChange={e => setAddressForm({ ...addressForm, deliverTo: e.target.value })} />
                        <input type="tel" placeholder="Mobile Number" className="w-full p-3 bg-gray-50 rounded-xl text-sm outline-none focus:ring-1 focus:ring-[#a7358d]" value={addressForm.mobile} onChange={e => setAddressForm({ ...addressForm, mobile: e.target.value })} />
                        <div className="flex gap-3">
                            <input type="text" placeholder="Pincode" className="w-full p-3 bg-gray-50 rounded-xl text-sm outline-none focus:ring-1 focus:ring-[#a7358d]" value={addressForm.pincode} onChange={e => setAddressForm({ ...addressForm, pincode: e.target.value })} />
                            <input type="text" placeholder="City" className="w-full p-3 bg-gray-50 rounded-xl text-sm outline-none" value={addressForm.city} onChange={e => setAddressForm({ ...addressForm, city: e.target.value })} />
                        </div>
                        <input type="text" placeholder="House No, Building" className="w-full p-3 bg-gray-50 rounded-xl text-sm outline-none focus:ring-1 focus:ring-[#a7358d]" value={addressForm.houseNo} onChange={e => setAddressForm({ ...addressForm, houseNo: e.target.value })} />
                        <input type="text" placeholder="Area, Street, Sector" className="w-full p-3 bg-gray-50 rounded-xl text-sm outline-none focus:ring-1 focus:ring-[#a7358d]" value={addressForm.street} onChange={e => setAddressForm({ ...addressForm, street: e.target.value })} />
                    </div>

                    <div className="flex gap-3 pt-2">
                        {['Home', 'Work'].map(type => (
                            <button key={type} onClick={() => setAddressForm({ ...addressForm, type })} className={`px-4 py-2 rounded-lg text-xs font-bold border ${addressForm.type === type ? 'bg-[#fdf2f8] border-[#a7358d] text-[#a7358d]' : 'bg-white border-gray-200 text-gray-500'}`}>
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="fixed bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-white">
                    <button onClick={handleSaveAddress} className="w-full bg-[#30363c] text-white font-bold py-3.5 rounded-xl shadow-lg">Save & Continue</button>
                </div>
            </div>
        );
    }

    // --- PAYMENT VIEW ---
    if (viewState === 'PAYMENT') {
        return (
            <div className="min-h-screen bg-[#f4f6f8] pb-24">
                <div className="bg-white p-4 flex items-center gap-3 shadow-sm sticky top-0 z-20">
                    <button onClick={() => setViewState('ADDRESS')} className="text-gray-500"><FaArrowLeft /></button>
                    <h1 className="text-lg font-bold text-gray-900">Payment</h1>
                </div>

                <div className="p-4 space-y-4">
                    {/* Deliver To */}
                    <div className="bg-white p-3 rounded-xl border border-gray-100 flex justify-between items-center" onClick={() => setViewState('ADDRESS')}>
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-gray-400"><FaMapMarkerAlt /></div>
                            <div>
                                <p className="font-bold text-gray-800">{savedAddress?.type || 'Home'}</p>
                                <p className="text-xs text-gray-500 truncate max-w-[200px]">{savedAddress?.houseNo}, {savedAddress?.street}...</p>
                            </div>
                        </div>
                        <span className="text-[#a7358d] text-xs font-bold">CHANGE</span>
                    </div>

                    <h3 className="font-bold text-sm text-gray-700 mt-4">Select Payment Method</h3>

                    <div className="space-y-3">
                        {/* Option: UPI */}
                        <label className={`flex items-center gap-4 bg-white p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'UPI' ? 'border-[#a7358d] ring-1 ring-[#a7358d]' : 'border-gray-100'}`}>
                            <input type="radio" name="payment" className="accent-[#a7358d] w-5 h-5" onChange={() => setPaymentMethod('UPI')} />
                            <div className="flex-1">
                                <h4 className="font-bold text-sm text-gray-900">UPI</h4>
                                <p className="text-xs text-gray-500">Google Pay, PhonePe, Paytm</p>
                            </div>
                            <FaWallet className="text-gray-300" />
                        </label>

                        {/* Option: Card */}
                        <label className={`flex items-center gap-4 bg-white p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'Card' ? 'border-[#a7358d] ring-1 ring-[#a7358d]' : 'border-gray-100'}`}>
                            <input type="radio" name="payment" className="accent-[#a7358d] w-5 h-5" onChange={() => setPaymentMethod('Card')} />
                            <div className="flex-1">
                                <h4 className="font-bold text-sm text-gray-900">Cards</h4>
                                <p className="text-xs text-gray-500">Credit / Debit Card</p>
                            </div>
                            <FaCreditCard className="text-gray-300" />
                        </label>

                        {/* Option: COD */}
                        <label className={`flex items-center gap-4 bg-white p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'COD' ? 'border-[#a7358d] ring-1 ring-[#a7358d]' : 'border-gray-100'}`}>
                            <input type="radio" name="payment" className="accent-[#a7358d] w-5 h-5" onChange={() => setPaymentMethod('COD')} />
                            <div className="flex-1">
                                <h4 className="font-bold text-sm text-gray-900">Cash on Delivery</h4>
                                <p className="text-xs text-gray-500">Pay on doorstep</p>
                            </div>
                            <FaMoneyBillWave className="text-gray-300" />
                        </label>
                    </div>
                </div>

                {/* Sticky Pay Button */}
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-3 px-4 z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500 font-bold">Total Payable</span>
                        <span className="text-lg font-black text-gray-900">₹{finalAmountToPay.toFixed(2)}</span>
                    </div>
                    <button
                        onClick={handlePlaceOrder}
                        className="w-full bg-[#30363c] text-white py-3.5 rounded-xl font-bold shadow-lg active:scale-95 flex items-center justify-center gap-2"
                    >
                        Place Order <FaChevronRight className="text-xs" />
                    </button>
                </div>
            </div>
        );
    }

    return null;
}
