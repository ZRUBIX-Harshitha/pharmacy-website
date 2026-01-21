"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [notification, setNotification] = useState(null); // { item, message }

    // Load from local storage
    useEffect(() => {
        const stored = localStorage.getItem('pharmacy-wishlist');
        if (stored) {
            try {
                setWishlistItems(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse wishlist", e);
            }
        }
    }, []);

    // Save to local storage
    useEffect(() => {
        localStorage.setItem('pharmacy-wishlist', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const addToWishlist = (product) => {
        if (!isInWishlist(product.id)) {
            setWishlistItems((prev) => [...prev, product]);
            showNotification(product, "Added to Wishlist", "add");
        } else {
            removeFromWishlist(product.id);
            showNotification(product, "Removed from Wishlist", "remove");
        }
    };

    const removeFromWishlist = (productId) => {
        setWishlistItems((prev) => prev.filter((item) => item.id !== productId));
    };

    const isInWishlist = (productId) => {
        return wishlistItems.some((item) => item.id === productId);
    };

    const showNotification = (item, message, type = "add") => {
        setNotification({ item, message, type });

        // Auto-hide only for removal messages to keep them simple
        if (type === 'remove') {
            setTimeout(() => {
                setNotification(null);
            }, 3000);
        }
    };

    const closeNotification = () => {
        setNotification(null);
    }

    return (
        <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist, notification, closeNotification }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    return useContext(WishlistContext);
}
