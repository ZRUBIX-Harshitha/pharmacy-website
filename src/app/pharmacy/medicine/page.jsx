import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Header from '../common-components/Header/Header';
import WhyChoose from './WhyChoose/WhyChoose';
import HowtoOrder from './HowtoOrder/HowtoOrder';
import OurCustomers from './OurCustomers/OurCustomers';
import Footer from '../common-components/Footer/Footer';

export default function Medicine() {
    return (
        <>

            <Header />
            <HeroSection />
            <WhyChoose />
            <HowtoOrder />
            <OurCustomers />
            <Footer />



        </>


    );
}