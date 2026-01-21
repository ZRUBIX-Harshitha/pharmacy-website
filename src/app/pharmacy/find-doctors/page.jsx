import Image from "next/image";
import React from "react";
import Header from "../common-components/Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import BrowseBySpecialise from "./BrowseBySpecialise/BrowseBySpecialise";
import About from "./About/About";
import FindaDoctor from "./FindaDoctor/FindaDoctor";
import City from "./City/City";
import Footer from "../common-components/Footer/Footer";




export default function PharmacyPage() {
    return (
        <>


            <Header />
            <HeroSection />
            <BrowseBySpecialise />
            <FindaDoctor />

            <About />
            <City />
            <Footer />

        </>
    );
}
