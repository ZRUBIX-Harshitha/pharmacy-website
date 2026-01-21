"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../../../context/CartContext';
import { useWishlist } from '../../../../context/WishlistContext';

const newLaunches = [
    {
        id: "tny-1",
        title: "Novegrow Nutri Strip Of 10 Tablets",
        mrp: "₹311.00",
        price: "₹220.81",
        discount: "29%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/R54546/novegrow-nutri-strip-of-10-tablets-6.1-1763039292.jpg?dim=1440x0",
        link: "/product/novegrow-nutri"
    },
    {
        id: "tny-2",
        title: "Durex Extra Time Ultra Thin 10 Condoms",
        mrp: "₹420.00",
        price: "₹247.80",
        discount: "41%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/A64587/durex-extra-time-ultra-thin-10-condoms-6.01-1739429637.jpg?dim=1440x0", // User repeated image, using unique one if possible or sticking to input. User pasted same URL for first 3. I will map them as unique items but use the provided URL. Actually user provided duplicate URLs in prompt. I will use them as is or try to use unique ones if strictly provided. Wait, the list has distinct ones later.
        // Actually, let's map the images from the list provided.
        // 1-3 same
        // 4-5 same
        // 6-7 same
        // 8 unique
        // 9 unique
        // 10 unique
        // I will just map them sequentially.
        link: "/product/durex-extra-time"
    },
    {
        id: "tny-3",
        title: "Venusia Cleanser Hydration & Barrier...",
        mrp: "₹440.00",
        price: "₹356.40",
        discount: "19%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/L05023/venusia-cleanser-hydration-barrier-protect-125-ml-6.01-1764134722.jpg?dim=1440x0",
        link: "/product/venusia-cleanser"
    },
    {
        id: "tny-4",
        title: "Nestle Cerelac Multigrain & Fruits | N...",
        mrp: "₹295.00",
        price: "₹250.75",
        discount: "15%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/B33907/nestle-cerelac-baby-cereal-no-refined-sugar-multigrain-fruits-for-12-24-months-baby-300-gm-2-1755589638.jpg?dim=1440x0",
        link: "/product/nestle-cerelac"
    },
    {
        id: "tny-5",
        title: "Vicks Double Power Cough Drops 2.7g...",
        mrp: "₹230.00",
        price: "₹195.50",
        discount: "15%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/B33907/nestle-cerelac-baby-cereal-no-refined-sugar-multigrain-fruits-for-12-24-months-baby-300-gm-2-1755589638.jpg?dim=1440x0",
        link: "/product/vicks-cough-drops"
    },
    {
        id: "tny-6",
        title: "Bon Dk 60k Vitamin D3 Capsule|20...",
        mrp: "₹660.00",
        price: "₹600.60",
        discount: "9%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/W15743/bon-dk-60k-vitamin-d3-capsule20-capsulepack-of-5-men-women-5-x-4-capsules-2-1689768890.jpg?dim=1440x0",
        link: "/product/bon-dk-60k"
    },
    {
        id: "tny-7",
        title: "Baidyanath Nagpur Honey | Pure Honey...",
        mrp: "₹380.00",
        price: "₹360.00",
        discount: "5%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/W15743/bon-dk-60k-vitamin-d3-capsule20-capsulepack-of-5-men-women-5-x-4-capsules-2-1689768890.jpg?dim=1440x0",
        link: "/product/baidyanath-honey"
    },
    {
        id: "tny-8",
        title: "New Dewsoft Daily Moisturizing Cream...",
        mrp: "₹400.00",
        price: "₹380.00",
        discount: "5%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/G29304/baidyanath-nagpur-honey-i-pure-honey-i-immunity-booster-i-250-gms-pack-of-2-2-1671745363.jpg?dim=1440x0",
        link: "/product/new-dewsoft"
    },
    {
        id: "tny-9",
        title: "Himalaya Org Gokshura Tribulus...",
        mrp: "₹500.00",
        price: "₹450.00",
        discount: "10%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/G09021/new-dewsoft-daily-moisturizing-cream-75-gm-6.01-1763908803.jpg?dim=1440x0",
        link: "/product/himalaya-gokshura"
    },
    {
        id: "tny-10",
        title: "Pharmeasy Multivitamin...",
        mrp: "₹999.00",
        price: "₹599.00",
        discount: "40%",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/T72066/himalaya-org-gokshura-tribulus-caplets-60s-ind-6.01-1721646355.jpg?dim=1440x0",
        link: "/product/pharmeasy-multivitamin"
    }

];

export default function TrendingNearYou() {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const { addToCart, openCart } = useCart();
    const { addToWishlist, isInWishlist } = useWishlist();

    const handleAddToCart = (e, product) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
        openCart();
    };

    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [quickViewQuantity, setQuickViewQuantity] = React.useState(1);

    const openQuickView = (e, product) => {
        e.preventDefault(); // Prevent link navigation
        e.stopPropagation();
        e.stopPropagation();
        setSelectedProduct(product);
        setQuickViewQuantity(1); // Reset quantity on open
    };

    const closeQuickView = () => {
        setSelectedProduct(null);
        setQuickViewQuantity(1);
    };

    const handleQuickViewAddToCart = () => {
        if (selectedProduct) {
            for (let i = 0; i < quickViewQuantity; i++) {
                addToCart(selectedProduct);
            }
            closeQuickView();
            openCart(); // Open drawer for feedback
        }
    };

    const incrementQty = () => setQuickViewQuantity(prev => prev + 1);
    const decrementQty = () => setQuickViewQuantity(prev => Math.max(1, prev - 1));

    return (
        <div className="py-8 px-6 lg:px-10 max-w-[1600px] mx-auto font-sans">
            <h2 className="text-[30px] font-bold text-gray-800 leading-tight mb-1">Trending Near You</h2>
            <p className="text-[#4f585e] text-[16px] mb-6">Popular in your city</p>

            <div className="relative group/carousel">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth no-scrollbar"
                    style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                >
                    {newLaunches.map((item, index) => (
                        <div key={index} onClick={(e) => openQuickView(e, item)} className="flex-shrink-0 w-[200px] lg:w-[250px] flex flex-col group cursor-pointer">
                            <div className="w-full h-[250px] border border-gray-200 rounded-xl flex items-center justify-center p-4 hover:shadow-lg hover:bg-white transition-all duration-300 mb-4 relative overflow-hidden group/card text-left">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={180}
                                    height={180}
                                    className="object-contain w-full h-full transform group-hover/card:scale-105 transition-transform duration-300"
                                    unoptimized
                                />

                                {/* Overlay Elements - Visible on Hover */}
                                {/* Discount Badge */}
                                <div className="absolute top-2 right-2 bg-[#a7358d] text-white text-[12px] font-bold px-2 py-1 rounded opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                    -{item.discount}
                                </div>

                                {/* Action Buttons - Vertical Stack */}
                                <div className="absolute top-12 right-2 flex flex-col gap-2 translate-x-14 group-hover/card:translate-x-0 transition-transform duration-300 z-10">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToWishlist(item);
                                        }}
                                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-md ${isInWishlist(item.id) ? 'bg-white text-[#a7358d]' : 'bg-[#a7358d] text-white hover:bg-[#8e2d78]'}`}
                                        title="Add to Wishlist"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill={isInWishlist(item.id) ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={(e) => openQuickView(e, item)}
                                        className="w-9 h-9 bg-[#a7358d] text-white rounded-full flex items-center justify-center hover:bg-[#8e2d78] transition-colors shadow-md"
                                        title="Quick View"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </button>
                                    <button className="w-9 h-9 bg-[#a7358d] text-white rounded-full flex items-center justify-center hover:bg-[#8e2d78] transition-colors shadow-md" title="Compare">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Add to Cart Button */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-20 group-hover/card:translate-y-0 transition-transform duration-300 w-[90%] z-10">
                                    <button
                                        onClick={(e) => handleAddToCart(e, item)}
                                        className="w-full bg-[#a7358d] hover:bg-[#8e2d78] text-white font-bold py-2.5 rounded-md flex items-center justify-center gap-2 shadow-lg transition-colors text-[14px] uppercase tracking-wide"
                                    >
                                        + Add to Cart
                                    </button>
                                </div>
                            </div>

                            <h3 className="text-gray-700 font-medium text-[20px] mb-1 leading-snug line-clamp-2 min-h-[44px] hover:text-[#8e2d78] transition-colors">{item.title}</h3>

                            <div className="flex gap-2 items-center text-[16px] text-gray-500 mb-1">
                                <span>MRP</span>
                                <span className="line-through">{item.mrp}</span>
                            </div>

                            <div className="flex gap-2 items-center text-[18px]">
                                <span className="font-bold text-gray-800">{item.price}</span>
                                <span className="text-[#f47779] font-bold text-[14px]">({item.discount})</span>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Navigation Button */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute -right-4 top-[35%] -translate-y-1/2 w-12 h-12 bg-[#30363c] hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 z-10 opacity-90 hover:opacity-100"
                    aria-label="Next new launches"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                {/* Quick View Modal */}
                {selectedProduct && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={closeQuickView}>
                        <div className="bg-white w-full max-w-[1000px] h-auto max-h-[90vh] rounded-lg relative flex flex-col md:flex-row overflow-hidden shadow-2xl animate-fadeIn" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={closeQuickView}
                                className="absolute top-4 right-4 z-10 text-gray-500 hover:text-black transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Left Side - Image */}
                            <div className="w-full md:w-1/2 bg-[#f4faff] flex items-center justify-center p-8 relative">
                                <Image
                                    src={selectedProduct.image}
                                    alt={selectedProduct.title}
                                    width={400}
                                    height={400}
                                    className="object-contain max-h-[400px] w-auto mix-blend-multiply"
                                    unoptimized
                                />
                            </div>

                            {/* Right Side - Details */}
                            <div className="w-full md:w-1/2 p-8 lg:p-10 flex flex-col h-full overflow-y-auto">
                                <h2 className="text-[24px] lg:text-[28px] font-bold text-gray-800 mb-2 leading-tight uppercase font-sans">{selectedProduct.title}</h2>
                                <div className="text-[14px] mb-4">
                                    <span className="font-semibold text-gray-500">Availability: </span>
                                    <span className="text-[#a7358d] font-bold">In stock</span>
                                </div>

                                <div className="bg-[#fdf2fa] border border-[#fce7f3] rounded-md p-4 mb-6 text-[13px] text-[#a7358d] space-y-1.5 font-medium leading-relaxed">
                                    <p className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#a7358d]"></span>
                                        COD Available on order above 500 Rs
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#a7358d]"></span>
                                        Payment accepted by Netbanking, Credit Card, UPI
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#a7358d]"></span>
                                        Whatsapp only +91-87583 74342 (Call not Allowed)
                                    </p>
                                </div>

                                <div className="text-[13px] text-gray-500 font-medium mb-2 uppercase">SKU: H00001</div>

                                <div className="flex items-end gap-3 mb-8">
                                    <span className="text-[28px] font-bold text-[#204983]">{selectedProduct.price}</span>
                                    <span className="text-[18px] text-gray-400 line-through decoration-1 decoration-gray-400 mb-1">{selectedProduct.mrp}</span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                    <div className="flex border border-gray-300 rounded overflow-hidden w-fit h-[44px]">
                                        <button onClick={decrementQty} className="w-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 font-bold border-r border-gray-300 cursor-pointer select-none">-</button>
                                        <input type="text" value={quickViewQuantity} className="w-12 text-center text-gray-800 outline-none font-medium h-full" readOnly />
                                        <button onClick={incrementQty} className="w-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 font-bold border-l border-gray-300 cursor-pointer select-none">+</button>
                                    </div>
                                    <button
                                        onClick={handleQuickViewAddToCart}
                                        className="h-[44px] px-8 bg-[#a7358d] hover:bg-[#8e2d78] text-white font-bold uppercase rounded text-[14px] flex items-center justify-center gap-2 transition-colors flex-grow sm:flex-grow-0"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                        </svg>
                                        Add to Cart
                                    </button>
                                </div>

                                <div className="flex gap-6 mt-auto text-[13px] text-gray-500 font-semibold uppercase tracking-wide">
                                    <button
                                        onClick={() => addToWishlist(selectedProduct)}
                                        className={`flex items-center gap-2 transition-colors group ${isInWishlist(selectedProduct.id) ? 'text-[#a7358d]' : 'hover:text-[#204983]'}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill={isInWishlist(selectedProduct.id) ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        {isInWishlist(selectedProduct.id) ? 'Wishlisted' : 'Add to Wish List'}
                                    </button>
                                    <button className="flex items-center gap-2 hover:text-[#204983] transition-colors group">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                        Add to Compare
                                    </button>
                                </div>
                                <div className="mt-6 pt-6 border-t border-gray-100">

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Plus Member Banner */}
            <div className="w-full mt-10 h-auto md:h-[250px] bg-gradient-to-r from-[#7a59a3] via-[#8563ad] to-[#806cae] rounded-xl flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 relative overflow-hidden shadow-sm">

                {/* Left Section */}
                <div className="flex flex-col z-10 py-6 md:py-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-white text-[22px] font-bold font-sans">Become a</span>
                        <div className="relative w-8 h-8 flex items-center justify-center bg-[#ffcf40] rounded-lg rotate-12 mx-1 shadow-sm">
                            <span className="text-white text-2xl font-bold -rotate-12">+</span>
                        </div>
                        <span className="text-[#ffcf40] text-[24px] font-bold font-sans">Plus</span>
                        <span className="text-white text-[22px] font-bold font-sans">member</span>
                    </div>
                    <p className="text-white text-[15px] opacity-90 font-medium">And enjoy extra bachat on every order</p>
                    <div className="w-full h-[2px] bg-gradient-to-r from-[#ffcf40] to-transparent mt-3 opacity-80"></div>
                </div>

                {/* Middle Section */}
                <div className="flex-1 px-4 md:px-10 flex flex-col gap-3 z-10 items-start md:border-l md:border-white/20 md:ml-8 md:h-[70%] justify-center w-full md:w-auto mb-6 md:mb-0">
                    <p className="text-white text-[13px] lg:text-[14px] font-medium leading-normal max-w-[500px]">
                        Save 5% on medicines, 50% on 1st lab test & get FREE delivery with PLUS membership
                        <span className="underline ml-1 cursor-pointer hover:text-[#ffcf40]">Know more {'>'}</span>
                    </p>
                    <button className="bg-[#f0a92e] hover:bg-[#d69526] text-white font-bold py-2.5 px-6 rounded-md text-[13px] shadow transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
                        Explore Now
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* Right Image */}
                <div className="self-end md:absolute md:right-4 md:bottom-0 z-0">
                    <Image
                        src="https://assets.pharmeasy.in/apothecary/_next/static/media/PlusFamily.22677720.png?dim=1440x0"
                        alt="Plus Family"
                        width={300}
                        height={140}
                        className="object-contain h-[120px] md:h-[140px] w-auto"
                        unoptimized
                    />
                </div>
            </div>
        </div>
    );
}
