import React from "react";
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header/Header";
import Contact from "../../Components/Contact/Contact";
import Introduction from "../../Components/Introduction/Introduction";
import About from "../../Components/About/About";

const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Header />
            <Contact />
            <Introduction />
            <About />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </React.Fragment>
    )
}

export default Home;