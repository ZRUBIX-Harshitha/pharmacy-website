"use client";
import React from "react";
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

export default function LabTestsPage() {
    return (

        <>
            <Header />
            <HeroSection />
            <HealthConcern />
            <HealthPackages />
            <BookAScan />
            <VitalOrgansPage />
            <CheckupsforMen />
            <CheckupsforWomen />
            <FAQ />
            <Reviews />
            <Explore />
            <WhyTrustPharmEasy />
            <Footer />

        </>


    );
}