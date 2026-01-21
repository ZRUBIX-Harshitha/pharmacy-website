import React from 'react';

import Header from '../common-components/Header/Header';
import HeroSection from './HeroSection/HeroSection';
import Locations from './Locations/Locations';
import OurStarDoctors from './OurStarDoctors/OurStarDoctors';
import Insurance from './Insurance/Insurance';
import FAQ from './FAQ/FAQ';
import Footer from '../common-components/Footer/Footer';

export default function LocationsPage() {
    return (
        <>

            <Header />
            <HeroSection />
            <Locations />
            <OurStarDoctors />
            <Insurance />
            <FAQ />
            <Footer />



        </>


    );
}