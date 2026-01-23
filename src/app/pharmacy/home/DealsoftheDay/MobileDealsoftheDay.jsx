"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../../../context/CartContext';

const products = [
    {
        id: "dod-1",
        title: "Novegrow Nutri Strip Of 10 Tablets",
        mrp: "₹311.00",
        price: "₹220.81",
        discount: "29%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I01439/episoft-ac-moisturizer-with-microencapsulated-suncreen-spf-30-75-gm-6.1-1752148399.jpg?dim=1440x0",
        link: "/product/novegrow-nutri"
    },
    {
        id: "dod-2",
        title: "Durex Extra Time Ultra Thin 10 Condoms",
        mrp: "₹420.00",
        price: "₹247.80",
        discount: "41%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/A64587/durex-extra-time-ultra-thin-10-condoms-6.01-1739429637.jpg?dim=1440x0",
        link: "/product/durex-extra-time"
    },
    {
        id: "dod-3",
        title: "Venusia Cleanser Hydration & Barrier...",
        mrp: "₹440.00",
        price: "₹356.40",
        discount: "19%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/L05023/venusia-cleanser-hydration-barrier-protect-125-ml-6.01-1764134722.jpg?dim=1440x0",
        link: "/product/venusia-cleanser"
    },
    {
        id: "dod-4",
        title: "Nestle Cerelac Multigrain & Fruits | N...",
        mrp: "₹295.00",
        price: "₹250.75",
        discount: "15%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/B33907/nestle-cerelac-baby-cereal-no-refined-sugar-multigrain-fruits-for-12-24-months-baby-300-gm-2-1755589638.jpg?dim=1440x0",
        link: "/product/nestle-cerelac"
    },
    {
        id: "dod-5",
        title: "Vicks Double Power Cough Drops 2.7g...",
        mrp: "₹230.00",
        price: "₹195.50",
        discount: "15%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/B33907/nestle-cerelac-baby-cereal-no-refined-sugar-multigrain-fruits-for-12-24-months-baby-300-gm-2-1755589638.jpg?dim=1440x0",
        link: "/product/vicks-cough-drops"
    },
    {
        id: "dod-6",
        title: "Bon Dk 60k Vitamin D3 Capsule|20...",
        mrp: "₹660.00",
        price: "₹600.60",
        discount: "9%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/W15743/bon-dk-60k-vitamin-d3-capsule20-capsulepack-of-5-men-women-5-x-4-capsules-2-1689768890.jpg?dim=1440x0",
        link: "/product/bon-dk-60k"
    },
    {
        id: "dod-7",
        title: "Baidyanath Nagpur Honey | Pure Honey...",
        mrp: "₹380.00",
        price: "₹360.00",
        discount: "5%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/W15743/bon-dk-60k-vitamin-d3-capsule20-capsulepack-of-5-men-women-5-x-4-capsules-2-1689768890.jpg?dim=1440x0",
        link: "/product/baidyanath-honey"
    },
    {
        id: "dod-8",
        title: "New Dewsoft Daily Moisturizing Cream...",
        mrp: "₹400.00",
        price: "₹380.00",
        discount: "5%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/G29304/baidyanath-nagpur-honey-i-pure-honey-i-immunity-booster-i-250-gms-pack-of-2-2-1671745363.jpg?dim=1440x0",
        link: "/product/new-dewsoft"
    },
    {
        id: "dod-9",
        title: "Himalaya Org Gokshura Tribulus...",
        mrp: "₹500.00",
        price: "₹450.00",
        discount: "10%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/G09021/new-dewsoft-daily-moisturizing-cream-75-gm-6.01-1763908803.jpg?dim=1440x0",
        link: "/product/himalaya-gokshura"
    },
    {
        id: "dod-10",
        title: "Pharmeasy Multivitamin...",
        mrp: "₹999.00",
        price: "₹599.00",
        discount: "40%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/T72066/himalaya-org-gokshura-tribulus-caplets-60s-ind-6.01-1721646355.jpg?dim=1440x0",
        link: "/product/pharmeasy-multivitamin"
    }

];

export default function MobileDealsoftheDay() {
    const { addToCart, openCart } = useCart();

    const handleAddToCart = (e, item) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(item);
        openCart();
    };

    return (
        <div className="py-6 px-4 font-sans border-b border-gray-100 bg-white">
            <h2 className="text-lg font-bold text-gray-800 mb-1 leading-tight">Deals of the Day</h2>
            <p className="text-gray-500 text-sm mb-4">Top products at best prices</p>

            <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide -mx-4 px-4 no-scrollbar">
                {products.map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-[160px] flex flex-col group relative">
                        {/* Card Content */}
                        <Link href={item.link} className="w-full h-[160px] border border-gray-100 rounded-xl flex items-center justify-center p-3 bg-white mb-2 relative">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={120}
                                height={120}
                                className="object-contain w-full h-full"
                                unoptimized
                            />
                            {/* Discount */}
                            <div className="absolute top-2 right-2 bg-[#a7358d] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                                -{item.discount}
                            </div>
                        </Link>

                        {/* Details */}
                        <div className="flex flex-col flex-1">
                            <h3 className="text-gray-700 font-medium text-sm mb-1 line-clamp-2 min-h-[40px] leading-snug">{item.title}</h3>
                            <div className="flex gap-2 items-center text-xs text-gray-500 mb-0.5">
                                <span>MRP</span>
                                <span className="line-through">{item.mrp}</span>
                            </div>
                            <div className="flex gap-2 items-center text-sm font-bold text-gray-800 mb-3">
                                {item.price}
                            </div>

                            {/* Add to Cart Button */}
                            <button
                                onClick={(e) => handleAddToCart(e, item)}
                                className="w-full bg-[#fdf2fa] text-[#a7358d] border border-[#fdf2fa] active:bg-[#a7358d] active:text-white font-bold py-2 rounded-lg text-xs uppercase tracking-wide transition-colors mt-auto"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
