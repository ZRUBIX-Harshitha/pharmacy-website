"use client";
import React from "react";
import useMediaQuery from "@/hooks/useIsDesktop";

// Desktop Components
import Header from "../common-components/Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import LabTests from "./LabTests/LabTests";
import ShopbyCategories from "./ShopbyCategories/ShopbyCategories";
import NewLaunches from "./NewLaunches/NewLaunches";
import TrendingNearYou from "./TrendingNearYou/TrendingNearYou";
import FrequentlyBookedLabTests from "./FrequentlyBookedLabTests/FrequentlyBookedLabTests";
import WellnessEssentials from "./WellnessEssentials/WellnessEssentials";
import FeaturedBrands from "./FeaturedBrands/FeaturedBrands";
import DealsoftheDay from "./DealsoftheDay/DealsoftheDay";
import IntheSpotlights from "./IntheSpotlight/IntheSpotlight";
import HealthArticles from "./HealthArticles/HealthArticles";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import OurCustomers from "./OurCustomers/OurCustomers";
import FAQ from "./FAQ/FAQ";
import Footer from "../common-components/Footer/Footer";

// Mobile Components
import MobileHeader from "../common-components/Header/MobileHeader";
import MobileHeroSection from "./HeroSection/MobileHeroSection";
import MobileLabTests from "./LabTests/MobileLabTests";
import MobileShopbyCategories from "./ShopbyCategories/MobileShopbyCategories";
import MobileNewLaunches from "./NewLaunches/MobileNewLaunches";
import MobileTrendingNearYou from "./TrendingNearYou/MobileTrendingNearYou";
import MobileFrequentlyBookedLabTests from "./FrequentlyBookedLabTests/MobileFrequentlyBookedLabTests";
import MobileWellnessEssentials from "./WellnessEssentials/MobileWellnessEssentials";
import MobileFeaturedBrands from "./FeaturedBrands/MobileFeaturedBrands";
import MobileDealsoftheDay from "./DealsoftheDay/MobileDealsoftheDay";
import MobileIntheSpotlight from "./IntheSpotlight/MobileIntheSpotlight";
import MobileHealthArticles from "./HealthArticles/MobileHealthArticles";
import MobileWhyChooseUs from "./WhyChooseUs/MobileWhyChooseUs";
import MobileOurCustomers from "./OurCustomers/MobileOurCustomers";
import MobileFAQ from "./FAQ/MobileFAQ";
import MobileFooter from "../common-components/Footer/MobileFooter";

export default function HomePage() {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (

        <>

            {isMobile ? <MobileHeader /> : <Header />}
            {isMobile ? <MobileHeroSection /> : <HeroSection />}

            {/* Lab Tests Logic might differ slightly in order or presentation */}
            {isMobile ? <MobileLabTests /> : <LabTests />}

            {isMobile ? <MobileShopbyCategories /> : <ShopbyCategories />}
            {isMobile ? <MobileNewLaunches /> : <NewLaunches />}
            {isMobile ? <MobileTrendingNearYou /> : <TrendingNearYou />}
            {isMobile ? <MobileFrequentlyBookedLabTests /> : <FrequentlyBookedLabTests />}
            {isMobile ? <MobileWellnessEssentials /> : <WellnessEssentials />}
            {isMobile ? <MobileFeaturedBrands /> : <FeaturedBrands />}
            {isMobile ? <MobileDealsoftheDay /> : <DealsoftheDay />}
            {isMobile ? <MobileIntheSpotlight /> : <IntheSpotlights />}
            {isMobile ? <MobileHealthArticles /> : <HealthArticles />}
            {isMobile ? <MobileWhyChooseUs /> : <WhyChooseUs />}
            {isMobile ? <MobileOurCustomers /> : <OurCustomers />}
            {isMobile ? <MobileFAQ /> : <FAQ />}
            {isMobile ? <MobileFooter /> : <Footer />}


        </>

    );
}
