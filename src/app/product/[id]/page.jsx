"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCart } from '../../../context/CartContext';

// Mock Data matching New Launches for demo purposes
// In a real app, this would be fetched via API based on 'id'
const productsDB = {
    "novegrow-nutri": {
        id: "nl-1",
        title: "Novegrow Nutri Strip Of 10 Tablets",
        mrp: "₹311.00",
        price: "₹220.81",
        discount: "29% OFF",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/R54546/novegrow-nutri-strip-of-10-tablets-6.1-1763039292.jpg?dim=1440x0",
        images: [
            "https://cdn01.pharmeasy.in/dam/products_otc/R54546/novegrow-nutri-strip-of-10-tablets-6.1-1763039292.jpg?dim=1440x0",
            "https://cdn01.pharmeasy.in/dam/products_otc/R54546/novegrow-nutri-strip-of-10-tablets-6.1-1763039292.jpg?dim=1440x0", // Duplicate for demo
            "https://cdn01.pharmeasy.in/dam/products_otc/R54546/novegrow-nutri-strip-of-10-tablets-6.1-1763039292.jpg?dim=1440x0"
        ],
        store: "Wellness Store",
        delivery: "Tomorrow, before 2:00 pm",
        description: "Dietary supplement for hair growth and health."
    },
    "durex-extra-time": {
        id: "nl-2",
        title: "Durex Extra Time Ultra Thin 10 Condoms",
        mrp: "₹420.00",
        price: "₹247.80",
        discount: "41% OFF",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/A64587/durex-extra-time-ultra-thin-10-condoms-6.01-1739429637.jpg?dim=1440x0",
        images: ["https://cdn01.pharmeasy.in/dam/products_otc/A64587/durex-extra-time-ultra-thin-10-condoms-6.01-1739429637.jpg?dim=1440x0"],
        store: "Durex Official",
        delivery: "Today, within 4 hours",
        description: "Enhanced pleasure and extended performance."
    },
    // Fallback for others
    "default": {
        id: "gen-1",
        title: "Wellwoman Hairfollic Tablets That Support Hair Growth & Maintain Healthy Hair 60 No'S",
        mrp: "₹1245.00",
        price: "₹1020.90",
        discount: "18% OFF",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I00596/wellwoman-hairfollic-tablets-that-support-hair-growth-maintain-healthy-hair-60-nos-2-1671741036.jpg?dim=1440x0",
        images: [
            "https://cdn01.pharmeasy.in/dam/products_otc/I00596/wellwoman-hairfollic-tablets-that-support-hair-growth-maintain-healthy-hair-60-nos-2-1671741036.jpg?dim=1440x0",
            "https://cdn01.pharmeasy.in/dam/products_otc/I00596/wellwoman-hairfollic-tablets-that-support-hair-growth-maintain-healthy-hair-60-nos-2-1671741036.jpg?dim=1440x0",
            "https://cdn01.pharmeasy.in/dam/products_otc/I00596/wellwoman-hairfollic-tablets-that-support-hair-growth-maintain-healthy-hair-60-nos-2-1671741036.jpg?dim=1440x0"
        ],
        store: "WELLWOMAN Store",
        delivery: "Tomorrow, before 2:00 pm",
        description: "Advanced nutrition for hair health."
    }
};

export default function ProductDetailsPage() {
    const params = useParams();
    const { id } = params;
    const { addToCart, cartCount, openCart } = useCart();
    // Use fallback if ID not found in mock DB
    const product = productsDB[id] || productsDB["default"];

    // Fallback product might need title adjustment if it was purely default
    if (!productsDB[id] && id) {
        // Just for demo, keeping the default one but maybe log it
    }

    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [packSize, setPackSize] = useState("60 Units");

    useEffect(() => {
        setSelectedImage(product.images[0]);
    }, [product]);


    const handleAddToCart = () => {
        addToCart(product);
        openCart();
    };


    return (
        <div className="bg-white min-h-screen font-sans pb-20">
            {/* Breadcrumb */}
            <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-4 text-xs text-gray-500 flex gap-1">
                <Link href="/home" className="hover:text-[#10847e]">Home</Link>
                <span>&gt;</span>
                <Link href="/healthcare" className="hover:text-[#10847e]">Healthcare</Link>
                <span>&gt;</span>
                <span className="text-gray-800 line-clamp-1 max-w-[300px]">{product.title}</span>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Column: Image Gallery (Span 4) */}
                <div className="lg:col-span-4">
                    <div className="border border-gray-200 rounded-xl p-4 sticky top-24">
                        <div className="aspect-square relative flex items-center justify-center mb-6">
                            <Image
                                src={selectedImage}
                                alt={product.title}
                                fill
                                className="object-contain"
                                unoptimized
                            />
                            {/* Share Icon */}
                            <button className="absolute bottom-0 right-0 p-2 rounded-full hover:bg-gray-50 border border-gray-100 shadow-sm text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                </svg>
                            </button>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(img)}
                                    className={`w-16 h-16 border rounded-lg p-1 relative overflow-hidden flex-shrink-0 ${selectedImage === img ? 'border-[#10847e] ring-1 ring-[#10847e]' : 'border-gray-200 hover:border-gray-400'}`}
                                >
                                    <Image
                                        src={img}
                                        alt={`View ${idx + 1}`}
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-4 text-xs text-gray-500 justify-center">
                        <span>Non Returnable</span>
                        <span className="text-[#10847e] font-semibold cursor-pointer">Read More</span>
                    </div>
                </div>

                {/* Center Column: Product Details (Span 5) */}
                <div className="lg:col-span-5 space-y-6">
                    <div>
                        <h1 className="text-[22px] font-bold text-[#30363c] leading-snug mb-2">
                            {product.title}
                        </h1>
                        <Link href="#" className="text-[#10847e] text-sm font-semibold hover:underline">
                            Visit {product.store}
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-[28px] font-bold text-[#30363c]">{product.price}</span>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 line-through text-sm">MRP {product.mrp}</span>
                            <span className="bg-[#f2fff8] text-[#10847e] text-xs font-bold px-2 py-1 rounded-sm border border-[#10847e] border-dashed">
                                {product.discount}
                            </span>
                        </div>
                    </div>
                    <div className="text-[11px] text-gray-500">Inclusive of all taxes</div>

                    <div className="text-sm text-gray-700">
                        Delivery by <span className="font-bold">{product.delivery}</span>
                    </div>

                    <div className="text-[12px] text-gray-500">
                        *Offer applicable on order above ₹1000
                    </div>

                    {/* Variant Selection */}
                    <div className="space-y-3 pt-4 border-t border-gray-100">
                        <h3 className="font-bold text-[#30363c] text-sm">Select Available Variant</h3>
                        <div>
                            <p className="text-xs text-gray-500 mb-2">Pack Size</p>
                            <button className="border border-[#10847e] bg-[#f2fff8] text-[#10847e] font-bold py-2 px-6 rounded-md text-sm shadow-sm">
                                {packSize}
                            </button>
                        </div>
                    </div>

                    <div className="pt-6">
                        <button
                            onClick={handleAddToCart}
                            className="bg-[#10847e] hover:bg-[#0c6b66] text-white font-bold py-3 px-8 rounded-md shadow-md transition-colors w-full sm:w-auto text-[16px]"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>

                {/* Right Column: Cart Widget (Span 3) */}
                <div className="lg:col-span-3 space-y-6">
                    {/* Cart Summary Widget */}
                    <div className="bg-white rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-[#30363c] font-semibold text-lg">{cartCount} Items in Cart</span>
                        </div>
                        <button
                            onClick={openCart}
                            className="w-full bg-[#10847e] hover:bg-[#0c6b66] text-white font-bold py-3 rounded-md flex items-center justify-center gap-2 transition-colors shadow-sm"
                        >
                            View Cart
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    {/* Offers Widget */}
                    <div className="border border-[#ffe6e7] bg-[#fff9f9] rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="bg-[#fff2f2] p-1 rounded-full text-[#f47779]">
                                {/* Offer Icon Placeholder */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#f47779]">
                                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <span className="font-bold text-[#30363c] text-sm">Offers Just for you</span>
                        </div>

                        <div className="space-y-3">
                            <div className="flex gap-3 items-start border-b border-dashed border-[#ffdce0] pb-3 last:border-0 last:pb-0">
                                <div className="shrink-0 w-6 mt-1">
                                    <Image src="https://assets.pharmeasy.in/web-assets/images/offer_icon.svg" alt="offer" width={24} height={24} className="opacity-70" unoptimized onError={(e) => e.target.style.display = 'none'} />
                                    {/* Fallback Icon if image fails/not exists */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[13px] text-gray-700 leading-snug">Get 27% off on medicine with Everherb's Karela Jamun Juice</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start">
                                <div className="shrink-0 w-6 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#10847e]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a2.25 2.25 0 0 0 .26-.17l4.5-4.5a2.25 2.25 0 0 0 .17-.26c.541-.827.369-1.908-.33-2.607L10.838 3.66a2.251 2.251 0 0 0-1.591-.659Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[13px] text-gray-700 leading-snug">Get extra 12% Off on Everherb, Liveasy or PharmEasy products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
