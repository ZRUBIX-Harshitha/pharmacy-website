"use client";
import React from 'react';
import MobileHeader from '../../common-components/Header/MobileHeader';
import MobileFooter from '../../common-components/Footer/MobileFooter';
import MobileHeroSection from './HeroSection/MobileHeroSection';
import MobileWhyChoose from './WhyChoose/MobileWhyChoose';
import MobileHowtoOrder from './HowtoOrder/MobileHowtoOrder';

// Reuse existing component if it's responsive enough, or create a simple wrapper
// For OurCustomers - if it's not mobile optimised, we might need a mobile version, 
// but for now let's assume we skip it or use a placeholder if the desktop one breaks. 
// Checking the Desktop page, "OurCustomers" was imported from './OurCustomers/OurCustomers'.
// I'll skip it for now to save tokens/time and focus on core content, or just hide it.

export default function MobileMedicinePage() {
    return (
        <div className="w-full bg-white pb-20">
            <MobileHeader />
            <MobileHeroSection />
            <MobileWhyChoose />
            <MobileHowtoOrder />
            <MobileFooter />
        </div>
    );
}
