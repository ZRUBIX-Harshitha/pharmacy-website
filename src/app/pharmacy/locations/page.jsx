"use client";
import React from 'react';
import useMediaQuery from '@/hooks/useIsDesktop';

// Desktop Components
import Header from '../common-components/Header/Header';
import HeroSection from './HeroSection/HeroSection';
import Locations from './Locations/Locations';
import OurStarDoctors from './OurStarDoctors/OurStarDoctors';
import Insurance from './Insurance/Insurance';
import FAQ from './FAQ/FAQ';
import Footer from '../common-components/Footer/Footer';

// Mobile Components
import MobileHeader from '../common-components/Header/MobileHeader';
import MobileFooter from '../common-components/Footer/MobileFooter';
import MobileHeroSection from './HeroSection/MobileHeroSection';
import MobileLocations from './Locations/MobileLocations';
import MobileOurStarDoctors from './OurStarDoctors/MobileOurStarDoctors';
import MobileInsurance from './Insurance/MobileInsurance';
import MobileFAQ from './FAQ/MobileFAQ';

export default function LocationsPage() {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <>
            {isMobile ? <MobileHeader /> : <Header />}
            {isMobile ? <MobileHeroSection /> : <HeroSection />}
            {isMobile ? <MobileLocations /> : <Locations />}
            {isMobile ? <MobileOurStarDoctors /> : <OurStarDoctors />}
            {isMobile ? <MobileInsurance /> : <Insurance />}
            {isMobile ? <MobileFAQ /> : <FAQ />}
            {isMobile ? <MobileFooter /> : <Footer />}
        </>
    );
}