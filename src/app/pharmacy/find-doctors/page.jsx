"use client";
import Image from "next/image";
import React from "react";
import useMediaQuery from "@/hooks/useIsDesktop";

// Desktop Components
import Header from "../common-components/Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import BrowseBySpecialise from "./BrowseBySpecialise/BrowseBySpecialise";
import About from "./About/About";
import FindaDoctor from "./FindaDoctor/FindaDoctor";
import City from "./City/City";
import Footer from "../common-components/Footer/Footer";

// Mobile Components
import MobileHeader from "../common-components/Header/MobileHeader";
import MobileFooter from "../common-components/Footer/MobileFooter";
import MobileHeroSection from "./HeroSection/MobileHeroSection";
import MobileBrowseBySpecialise from "./BrowseBySpecialise/MobileBrowseBySpecialise";
import MobileFindaDoctor from "./FindaDoctor/MobileFindaDoctor";
import MobileAbout from "./About/MobileAbout";
import MobileCity from "./City/MobileCity";

export default function PharmacyPage() {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <>
            {isMobile ? <MobileHeader /> : <Header />}
            {isMobile ? <MobileHeroSection /> : <HeroSection />}
            {isMobile ? <MobileBrowseBySpecialise /> : <BrowseBySpecialise />}
            {isMobile ? <MobileFindaDoctor /> : <FindaDoctor />}
            {/* {isMobile ? <MobileAbout /> : <About />} */}
            {isMobile ? <MobileCity /> : <City />}
            {isMobile ? <MobileFooter /> : <Footer />}
        </>
    );
}
