import Image from "next/image";
import React from "react";
import Header from "../common-components/Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import LabTests from "./LabTests/LabTests";
import ShopbyCategories from "./ShopbyCategories/ShopbyCategories";
import NewLaunches from "./NewLaunches/NewLaunches";
import TrendingNearYou from "./TrendingNearYou/TrendingNearYou";
import FrequentlyBookedLabTests from "./FrequentlyBookedLabTests/FrequentlyBookedLabTests";


import WellnessEssentials from "./WellnessEssentials/WellnessEssentials";

export default function HomePage() {
    return (
        <>
            <Header />
            <HeroSection />
            <LabTests />
            <ShopbyCategories />
            <NewLaunches />
            <TrendingNearYou />
            <FrequentlyBookedLabTests />
            <WellnessEssentials />



        </>
    );
}
