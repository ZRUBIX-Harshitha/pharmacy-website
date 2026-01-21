"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);
    const toggleCart = () => setIsCartOpen((prev) => !prev);

    // Load cart from local storage on mount (optional but good for UX)
    // For now, starting empty as per request "starting la header cart la 0 irukanum"

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + (product.quantity || 1) } // Add standard 1 or product's quantity
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: product.quantity || 1 }]; // Use product quantity or default to 1
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            // Prevent going below 1, user wants it to stay at 1
            return;
        }
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Helper to parse price string to number (handling "₹" or commas)
    const parsePrice = (priceStr) => {
        if (typeof priceStr === 'number') return priceStr;
        if (!priceStr) return 0;
        return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
    };

    const cartTotal = cartItems.reduce((total, item) => {
        return total + (parsePrice(item.price) * item.quantity);
    }, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount, cartTotal, isCartOpen, openCart, closeCart, toggleCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
