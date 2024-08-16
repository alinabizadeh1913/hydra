import React, { useEffect, useRef } from "react";

const VRDesign = () => {

    const vrSlider = useRef();
    let translate = 0;
    let currentCount = 0;

    
    const handleRightIconClick = () => {
        setTimeout(() => {
            console.log(currentCount,translate);
        },200)
        if (currentCount <= 2) {
            currentCount += 1;
            translate -= 100;
            vrSlider.current.style.transform = `translateX(${translate}%)`
        }
    }

    const handleLeftIconClick = () => {
        if (currentCount > 0) {
            currentCount -= 1;
            translate += 100
            vrSlider.current.style.transform = `translateX(${translate}%)`
        }
    }

    return (
        <section id="vr-design">
            <div className="container position-relative overflow-hidden">
                <div className="vr-wrapper d-flex flex-md-wrap flex-lg-nowrap justify-content-md-around justify-content-lg-center w-100" ref={vrSlider}>
                    <div className="vr-item px-5 d-flex flex-column justify-content-center align-items-center">
                        <a href="#" className="number-link">
                            <div className="number-wrapper">
                                <div className="number">
                                    01
                                </div>
                            </div>
                        </a>
                        <div className="subject-wrapper overflow-hidden">
                            <div className="subject mt-3 d-flex">
                                <i class="fa-solid fa-arrow-right fs-2 d-none d-lg-block"></i>
                                <h4 className="text-center text-lg-start text-white">
                                    3D Conception <br /> & Design
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="vr-item px-5 d-flex flex-column justify-content-center align-items-center">
                        <a href="#" className="number-link">
                            <div className="number-wrapper">
                                <div className="number">
                                    02
                                </div>
                            </div>
                        </a>
                        <div className="subject-wrapper overflow-hidden">
                            <div className="subject mt-3 d-flex">
                                <i class="fa-solid fa-arrow-right fs-2 d-none d-lg-block"></i>
                                <h4 className="text-center text-lg-start text-white">
                                    Interaction <br /> Design
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="vr-item px-5 d-flex flex-column justify-content-center align-items-center">
                        <a href="#" className="number-link">
                            <div className="number-wrapper">
                                <div className="number">
                                    03
                                </div>
                            </div>
                        </a>
                        <div className="subject-wrapper overflow-hidden">
                            <div className="subject mt-3 d-flex">
                                <i class="fa-solid fa-arrow-right fs-2 d-none d-lg-block"></i>
                                <h4 className="text-center text-lg-start text-white">
                                VR World <br /> User Testing
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="vr-item px-5 d-flex flex-column justify-content-center align-items-center">
                        <a href="#" className="number-link">
                            <div className="number-wrapper">
                                <div className="number">
                                    04
                                </div>
                            </div>
                        </a>
                        <div className="subject-wrapper overflow-hidden">
                            <div className="subject mt-3 d-flex">
                                <i class="fa-solid fa-arrow-right fs-2 d-none d-lg-block"></i>
                                <h4 className="text-center text-lg-start text-white">
                                    Hydra VR <br /> Deploy
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="arrow-wrapper d-flex d-md-none">
                  <div className="icon">
                    <i class="fa-solid fa-angle-left" onClick={handleLeftIconClick}></i>
                  </div>
                  <div className="icon">
                    <i class="fa-solid fa-angle-right" onClick={handleRightIconClick}></i>
                  </div>
                </div>

            </div>
        </section>
    )
}

export default VRDesign;