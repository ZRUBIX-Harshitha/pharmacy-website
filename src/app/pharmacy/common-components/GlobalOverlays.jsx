"use client";
import React from 'react';
import useMediaQuery from '@/hooks/useIsDesktop';

// Desktop Components
import CartDrawer from './CartDrawer/CartDrawer';
import WishlistNotification from './WishlistNotification/WishlistNotification';

// Mobile Components
import MobileCartDrawer from './CartDrawer/MobileCartDrawer';
import MobileWishlistNotification from './WishlistNotification/MobileWishlistNotification';

export default function GlobalOverlays() {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <>
            {isMobile ? <MobileCartDrawer /> : <CartDrawer />}
            {isMobile ? <MobileWishlistNotification /> : <WishlistNotification />}
        </>
    );
}
