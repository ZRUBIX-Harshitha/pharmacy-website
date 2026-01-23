"use client";
import React from "react";
import useMediaQuery from "@/hooks/useIsDesktop";

// Desktop Components
import HeroSection from "./HeroSection/HeroSection";
import Header from "../common-components/Header/Header";
import HealthConcern from "./HealthConcern/HealthConcern";
import HealthPackages from "./HealthPackages/HealthPackages";
import BookAScan from "./BookAScan/BookAScan";
import CheckupsforMen from "./CheckupsforMen/CheckupsforMen";
import VitalOrgansPage from "./VitalOrgans/VitalOrgans";
import CheckupsforWomen from "./CheckupsforWomen/CheckupsforWomen";
import FAQ from "./FAQ/FAQ";
import Reviews from "./Reviews/Reviews";
import Explore from "./Explore/Explore";
import WhyTrustPharmEasy from "./WhyTrustPharmEasy/WhyTrustPharmEasy";
import Footer from "../common-components/Footer/Footer";

// Mobile Components
import MobileHeader from "../common-components/Header/MobileHeader";
import MobileFooter from "../common-components/Footer/MobileFooter";
import MobileHeroSection from "./HeroSection/MobileHeroSection";
import MobileHealthConcern from "./HealthConcern/MobileHealthConcern";
import MobileHealthPackages from "./HealthPackages/MobileHealthPackages";
import MobileBookAScan from "./BookAScan/MobileBookAScan";
import MobileVitalOrgans from "./VitalOrgans/MobileVitalOrgans";
import MobileCheckupsforMen from "./CheckupsforMen/MobileCheckupsforMen";
import MobileCheckupsforWomen from "./CheckupsforWomen/MobileCheckupsforWomen";
import MobileFAQ from "./FAQ/MobileFAQ";
import MobileReviews from "./Reviews/MobileReviews";
import MobileExplore from "./Explore/MobileExplore";
import MobilePopularTestsinMumbai from "./PopularTestsinMumbai/MobilePopularTestsinMumbai";
import MobileWhyTrustPharmEasy from "./WhyTrustPharmEasy/MobileWhyTrustPharmEasy";

export default function LabTestsPage() {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (

        <>
            {isMobile ? <MobileHeader /> : <Header />}
            {isMobile ? <MobileHeroSection /> : <HeroSection />}
            {isMobile ? <MobileHealthConcern /> : <HealthConcern />}
            {isMobile ? <MobileHealthPackages /> : <HealthPackages />}
            {isMobile ? <MobileBookAScan /> : <BookAScan />}
            {isMobile ? <MobileVitalOrgans /> : <VitalOrgansPage />}
            {isMobile ? <MobileCheckupsforMen /> : <CheckupsforMen />}
            {isMobile ? <MobileCheckupsforWomen /> : <CheckupsforWomen />}
            {isMobile ? <MobileFAQ /> : <FAQ />}
            {isMobile ? <MobileReviews /> : <Reviews />}
            {isMobile ? <MobilePopularTestsinMumbai /> : null}
            {isMobile ? <MobileExplore /> : <Explore />}
            {isMobile ? <MobileWhyTrustPharmEasy /> : <WhyTrustPharmEasy />}
            {isMobile ? <MobileFooter /> : <Footer />}

        </>


    );
}