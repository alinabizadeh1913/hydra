import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header/Header";
import Contact from "../../Components/Contact/Contact";
import Introduction from "../../Components/Introduction/Introduction";
import About from "../../Components/About/About";
import WhyBuild from "../../Components/WhyBuild/WhyBuild";
import Cards from "../../Components/Card/Cards";

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
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </React.Fragment>
    )
}

export default Home;