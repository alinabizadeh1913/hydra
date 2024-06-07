import React, { useEffect, useRef } from "react";

const Header = () => {

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
        <header id="header" className="mb-5">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-lg-6 order-last order-lg-first">
                        <div className="main-subject position-relative">
                            <div className="background1 position-absolute"></div>
                            <div className="background2 position-absolute"></div>
                            <h1 className="d-flex flex-column user-select-none mt-5 text-center text-lg-start mt-lg-0">
                                <span>
                                    <span className="special-text">
                                        Dive 
                                    </span>
                                    <span className="mx-2 text-white">
                                        Into The Depths
                                    </span>
                                </span>
                                <span>
                                    <span className="text-white mx-2">
                                        Of
                                    </span>
                                     <span className="special-text">
                                        Virtual Reality
                                     </span>
                                </span>
                            </h1>
                            <p className="my-4 d-none d-lg-block">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, porro. Alias, optio impedit. Debitis id repellendus, assumenda veritatis deleniti. sit amet consectetur adipisicing elit.
                            </p>
                            <div className="build-your-world d-flex align-items-center justify-content-center justify-content-lg-start">
                                <a href="#build" className="build-your-world-btn" ref={buildYourWorldBtn}>
                                    <button>
                                        BUILD YOUR WORLD
                                    </button>
                                </a>
                                <div className="arrow-right mx-4 position-relative d-none d-lg-block">
                                    <div className="right"></div>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end position-relative">
                        <div className="main-picture">
                            <img src="./img/img1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;