"use client";
import React from "react";
import useMediaQuery from "@/hooks/useIsDesktop";

// Desktop Components
import HeroSection from './HeroSection/HeroSection';
import Header from "../common-components/Header/Header";
import PlanForYou from "./PlanForYou/PlanForYou";
import CalculateYourSavings from "./CalculateYourSavings/CalculateYourSavings";
import Footer from "../common-components/Footer/Footer";

// Mobile Components
import MobileHeader from "../common-components/Header/MobileHeader";
import MobileFooter from "../common-components/Footer/MobileFooter";
import MobileHeroSection from "./HeroSection/MobileHeroSection";
import MobilePlanForYou from "./PlanForYou/MobilePlanForYou";
import MobileCalculateYourSavings from "./CalculateYourSavings/MobileCalculateYourSavings";

export default function PlusPage() {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <>
            {isMobile ? <MobileHeader /> : <Header />}
            {isMobile ? <MobileHeroSection /> : <HeroSection />}
            {isMobile ? <MobilePlanForYou /> : <PlanForYou />}
            {isMobile ? <MobileCalculateYourSavings /> : <CalculateYourSavings />}
            {isMobile ? <MobileFooter /> : <Footer />}
        </>
    )
}