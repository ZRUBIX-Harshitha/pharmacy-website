"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCart } from '../../../context/CartContext';
import { FaStar, FaShareAlt, FaChevronRight, FaShoppingCart, FaRupeeSign } from 'react-icons/fa';

// Mock Data (Same as Desktop for consistency)
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
            "https://cdn01.pharmeasy.in/dam/products_otc/R54546/novegrow-nutri-strip-of-10-tablets-6.1-1763039292.jpg?dim=1440x0",
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

export default function MobileProductPage() {
    const params = useParams();
    const { id } = params;
    const { addToCart, openCart } = useCart();

    // Fallback logic specific to mobile
    const product = productsDB[id] || productsDB["default"];
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleAddToCart = () => {
        addToCart(product);
        openCart();
    };

    return (
        <div className="bg-[#f4f6f8] min-h-screen pb-24 font-sans">

            {/* 1. PRODUCT IMAGES CAROUSEL */}
            <div className="bg-white pb-4 relative">
                <div className="w-full aspect-square relative bg-white">
                    {/* Image */}
                    <div className="w-full h-full flex items-center justify-center p-8">
                        <Image
                            src={product.images[activeImageIndex]}
                            alt={product.title}
                            fill
                            className="object-contain"
                            unoptimized
                        />
                    </div>
                    {/* Share Button */}
                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm border border-gray-100 text-gray-400">
                        <FaShareAlt className="text-sm" />
                    </button>
                    {/* Image Counter Badge */}
                    <div className="absolute bottom-4 left-4 bg-gray-100 text-[10px] font-bold px-2 py-1 rounded-md text-gray-500">
                        {activeImageIndex + 1}/{product.images.length}
                    </div>
                </div>

                {/* Thumbnails Scroller */}
                <div className="flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-hide">
                    {product.images.map((img, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`w-14 h-14 shrink-0 border rounded-lg p-1 flex items-center justify-center bg-white ${activeImageIndex === idx ? 'border-[#a7358d]' : 'border-gray-200'}`}
                        >
                            <Image src={img} width={40} height={40} alt="" className="object-contain max-h-full" unoptimized />
                        </div>
                    ))}
                </div>
            </div>

            {/* 2. PRODUCT INFO */}
            <div className="bg-white mt-2 p-4">
                <div className="flex justify-between items-start mb-2">
                    <h1 className="text-[17px] font-bold text-gray-800 leading-snug line-clamp-3 w-[85%]">
                        {product.title}
                    </h1>
                    <button className="text-gray-300">
                        <FaStar className="text-gray-200" />
                    </button>
                </div>

                <Link href="#" className="text-[#a7358d] text-xs font-bold mb-4 inline-block">
                    Visit {product.store || "Store"}
                </Link>

                <div className="flex items-end gap-2 mb-1">
                    <span className="text-[22px] font-bold text-[#30363c]">{product.price}</span>
                    <span className="text-gray-500 line-through text-xs mb-1.5">{product.mrp}</span>
                    <span className="text-[#a7358d] text-[10px] font-bold mb-1.5 uppercase bg-[#fcebf5] px-1 rounded">
                        {product.discount}
                    </span>
                </div>
                <p className="text-[10px] text-gray-400">Inclusive of all taxes</p>
                <div className="mt-3 bg-[#f0fcf5] border border-green-100 text-green-800 text-[11px] font-bold px-3 py-2 rounded-lg flex items-center gap-2">
                    <span>🚚</span> Delivery by {product.delivery}
                </div>
            </div>

            {/* 3. OFFERS WIDGET (Compact) */}
            <div className="bg-white mt-2 p-4">
                <h3 className="text-sm font-bold text-gray-800 mb-3">Available Offers</h3>
                <div className="border border-[#ffe6e7] bg-[#fff9f9] rounded-xl p-3 flex gap-3 items-start">
                    <span className="text-[18px]">🏷️</span>
                    <div>
                        <p className="text-xs font-bold text-gray-800 mb-0.5">Partner Offers</p>
                        <p className="text-[11px] text-gray-600 leading-relaxed">
                            Get up to ₹500 cashback via Cred Pay UPI. No code required.
                        </p>
                    </div>
                    <FaChevronRight className="text-gray-300 text-xs ml-auto mt-1" />
                </div>
            </div>

            {/* 4. PACK SIZE SELECTION */}
            <div className="bg-white mt-2 p-4">
                <h3 className="text-sm font-bold text-gray-800 mb-3">Pack Size</h3>
                <div className="flex gap-3">
                    <button className="border-2 border-[#a7358d] bg-[#fdf2fa] px-4 py-2 rounded-lg text-sm font-bold text-[#a7358d]">
                        60 Units
                    </button>
                    <button className="border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm font-medium text-gray-500">
                        30 Units
                    </button>
                </div>
            </div>

            {/* 5. STICKY BOTTOM BAR */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-3 px-4 z-50 flex items-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                <div className="flex flex-col">
                    <p className="text-xs text-gray-400 line-through">{product.mrp}</p>
                    <p className="text-lg font-bold text-[#30363c] leading-none">{product.price}</p>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-[#a7358d] text-white font-bold py-3.5 rounded-xl shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
                >
                    Add to Cart
                    <FaShoppingCart className="text-sm" />
                </button>
            </div>

        </div>
    );
}
