import React, { useState } from "react"

const Technologies = () => {

    const scrollDown = () => {
        window.scrollBy({
            top: 200,
            behavior: 'smooth'
        });
    };

    return (
        <section id="technologies" className="my-5">
            <div className="container">
                <div className="row">
                    <div className="technologie col position-relative">
                        <div className="image position-absolute">
                            
                        </div>
                        <div className="content position-relative">
                            <h2 className="text-white text-center my-3">
                                TECHNOLOGIES & HARDWARE
                            </h2>
                            <h3 className="text-center mb-0">
                                USED BY HYDRA VR.
                            </h3>
                        </div>
                        <div className="arrow-wrapper position-absolute w-100" onClick={scrollDown}>
                            <div className="arrow-bottom">
                                <i class="fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technologies;