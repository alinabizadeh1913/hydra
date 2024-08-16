import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header/Header";
import Contact from "../../Components/Contact/Contact";
import Introduction from "../../Components/Introduction/Introduction";
import About from "../../Components/About/About";
import WhyBuild from "../../Components/WhyBuild/WhyBuild";
import Cards from "../../Components/Card/Cards";
import Technologies from "../../Components/Technologies/Technologies";
import HowWeBuild from "../../Components/HowWeBuild/HowWeBuild";
import VRDesign from "../../Components/VRDesign/VRDesign";
import Platform from "../../Components/Platform/Platform";
import Join from "../../Components/Join";
import Footer from "../../Components/Footer/Footer";

const Home = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    })
    
    return (
        <React.Fragment>
            <Navbar />
            <Header />
            <Contact />
            <Introduction />
            <About />
            <WhyBuild />
            <Cards />
            <Technologies />
            <Platform />
            <HowWeBuild/>
            <VRDesign/>
            <Join />
            <Footer />
        </React.Fragment>
    )
}

export default Home;