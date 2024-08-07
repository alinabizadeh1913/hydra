import React from "react";

const VRDesign = ({display}) => {
    return (
        <section id="vr-design" className={`${display} my-5`}>
            <div className="container">
                <div className="vr-wrapper d-flex justify-content-lg-center w-100">
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
            </div>
        </section>
    )
}

export default VRDesign;