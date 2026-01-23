"use client";
import React from 'react';
import useMediaQuery from '@/hooks/useIsDesktop';

// Desktop Components
import HeroSection from './HeroSection/HeroSection';
import Header from '../common-components/Header/Header';
import WhyChoose from './WhyChoose/WhyChoose';
import HowtoOrder from './HowtoOrder/HowtoOrder';
import OurCustomers from './OurCustomers/OurCustomers';
import Footer from '../common-components/Footer/Footer';

// Mobile Components
import MobileHeader from '../common-components/Header/MobileHeader';
import MobileFooter from '../common-components/Footer/MobileFooter';
import MobileHeroSection from './HeroSection/MobileHeroSection';
import MobileWhyChoose from './WhyChoose/MobileWhyChoose';
import MobileHowtoOrder from './HowtoOrder/MobileHowtoOrder';
import MobileEssentialMedicines from './EssentialMedicines/MobileEssentialMedicines';
import MobileTrustedPharmacy from './TrustedPharmacy/MobileTrustedPharmacy';
import MobileOurCustomers from './OurCustomers/MobileOurCustomers';

export default function Medicine() {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <>
            {isMobile ? <MobileHeader /> : <Header />}
            {isMobile ? <MobileHeroSection /> : <HeroSection />}
            {isMobile ? <MobileEssentialMedicines /> : null}
            {isMobile ? <MobileWhyChoose /> : <WhyChoose />}
            {isMobile ? <MobileTrustedPharmacy /> : null}
            {isMobile ? <MobileHowtoOrder /> : <HowtoOrder />}
            {isMobile ? <MobileOurCustomers /> : <OurCustomers />}
            {isMobile ? <MobileFooter /> : <Footer />}
        </>
    );
}