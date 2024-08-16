import React, { useEffect, useRef } from "react";

const Footer = () => {

    const buildYourWorldBtn = useRef();

    useEffect(() => {
        buildYourWorldBtn.current.addEventListener('mouseover', (e) => {
            const { currentTarget } = e;
            currentTarget.classList.add('bg-move');
        });

        buildYourWorldBtn.current.addEventListener('mouseout', (e) => {
            const { currentTarget } = e;
            currentTarget.classList.remove('bg-move');
        });

        buildYourWorldBtn.current.addEventListener('animationend', (e) => {
            const { currentTarget } = e;
            currentTarget.classList.remove('bg-move');
        })
    }, [])

    return (
        <section id="footer">
            <div className="container">
                <div className="row justify-content-center my-5">
                    <div className="col-lg-3 d-none d-lg-block mb-3">
                        <div className="logo d-flex justify-content-center align-items-center">
                            <img src="./img/logo.png" alt="" className="col-6"/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-none d-sm-block mb-3">
                        <div className="links d-flex justify-content-center">
                            <div className="col-6 d-flex flex-column">
                                <a href="#">
                                    ABOUT
                                </a>
                                <a href="#">
                                    SERVICES
                                </a>
                                <a href="#">
                                    TECHNOLOGIES
                                </a>
                                <a href="#">
                                    HOW TO
                                </a>
                                <a href="#">
                                    JOIN HYDRA
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 d-none d-md-block mb-3">
                    <div className="links d-flex justify-content-center">
                            <div className="col-6 d-flex flex-column">
                                <a href="#">
                                    F.A.Q
                                </a>
                                <a href="#">
                                    SITEMAP
                                </a>
                                <a href="#">
                                    CONDITIONS
                                </a>
                                <a href="#">
                                    LICENSES
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center ">
                        <div className="social-media text-center d-flex flex-column align-items-center">
                            <h6 className="title text-white mb-4 select-none">
                                SOCIALIZE WITH HYDRA
                            </h6>
                            <div className="media d-flex">
                                <a href="#" className="media-link">
                                    <button type="submit">
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </button>
                                </a>
                                <a href="#" className="media-link">
                                    <button type="submit">
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </button>
                                </a>
                                <a href="#" className="media-link">
                                    <button type="submit">
                                        <i class="fa-brands fa-twitter"></i>
                                    </button>
                                </a>
                                <a href="#" className="media-link">
                                    <button type="submit">
                                    <i class="fa-brands fa-youtube"></i>
                                    </button>
                                </a>
                                <a href="#" className="media-link">
                                    <button type="submit">
                                        <i class="fa-brands fa-instagram"></i>
                                    </button>
                                </a>
                            </div>
                            <a href="#build" className="build-your-world-btn mt-4" ref={buildYourWorldBtn}>
                                <button>
                                    BUILD YOUR WORLD
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="row justify-content-center my-5">
                    <div className="col-8">
                        <h6 className="text-center text-white select-none">
                            2024 © HYDRA LANDING PAGE - BY Ali Nabizadeh - ALL RIGHTS RESERVED 
                        </h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;