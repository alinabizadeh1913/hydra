import React from "react";

const Introduction = () => {
    return (
        <section id="introduction">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-lg-5">
                        <div className="intro-left">
                            <h3 className="title text-white text-center text-lg-start">
                                INTRODUCTION
                            </h3>
                            <h3 className="mb-0 mt-2 to-hydra-vr d-flex align-items-center justify-content-center justify-content-lg-start">
                                <span>
                                    TO HYDRA VR
                                </span>

                                <div className="arrow-right mx-4 position-relative d-none d-lg-block">
                                    <div className="right"></div>
                                    <div className="line"></div>
                                </div>

                            </h3>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 d-none d-lg-block">
                        <div className="intro-right">
                            <p className="mb-0 text">
                                Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction;