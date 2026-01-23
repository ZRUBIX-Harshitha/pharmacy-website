"use client";
import React from "react";
import useMediaQuery from "@/hooks/useIsDesktop";

// Desktop Components
import Header from "../common-components/Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import Footer from "../common-components/Footer/Footer";

// Mobile Components
import MobileHeader from "../common-components/Header/MobileHeader";
import MobileFooter from "../common-components/Footer/MobileFooter";
import MobileHeroSection from "./HeroSection/MobileHeroSection";

export default function HealthPackagesPage() {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <>
            {isMobile ? <MobileHeader /> : <Header />}
            {isMobile ? <MobileHeroSection /> : <HeroSection />}
            {isMobile ? <MobileFooter /> : <Footer />}
        </>
    )
}