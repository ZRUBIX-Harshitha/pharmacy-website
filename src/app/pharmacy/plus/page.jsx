import React from "react";
import HeroSection from './HeroSection/HeroSection';
import Header from "../common-components/Header/Header";
import PlanForYou from "./PlanForYou/PlanForYou";
import CalculateYourSavings from "./CalculateYourSavings/CalculateYourSavings";
import Footer from "../common-components/Footer/Footer";

export default function PlusPage() {
    return (
        <>
            <Header />
            <HeroSection />
            <PlanForYou />
            <CalculateYourSavings />
            <Footer />
        </>
    )
}