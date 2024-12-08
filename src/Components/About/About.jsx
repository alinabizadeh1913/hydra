import React, { useEffect, useRef } from "react";

const About = () => {

    const LetsGetInTouch = useRef();

    useEffect(() => {
        LetsGetInTouch.current.addEventListener('mouseover', (e) => {
            const { currentTarget } = e;
            currentTarget.classList.add('bg-move');
        });

        LetsGetInTouch.current.addEventListener('mouseout', (e) => {
            const { currentTarget } = e;
            currentTarget.classList.remove('bg-move');
        });

        LetsGetInTouch.current.addEventListener('animationend', (e) => {
            const { currentTarget } = e;
            currentTarget.classList.remove('bg-move');
        })
    }, [])

    return (
        <section id="about">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-12 col-lg-5">
                        <div className="about-left d-flex justify-content-center justify-content-lg-start">
                            <div className="image">
                                <img src="./img/img2.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-7">
                        <div className="about-right d-flex flex-column justify-content-center align-items-center align-items-lg-start">

                            <h3 className="title text-white text-center text-lg-start d-none d-lg-block">
                                ABOUT
                            </h3>
                            <h3 className="mb-0 mt-2 hydra-vr d-none d-lg-block">
                                HYDRA VR
                            </h3>
                            <p className="mb-0 text text-center text-lg-start col-8 col-lg-12 line-clamp-4 line-clamp-md-6">
                                Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudin tempor.
                            </p>

                            <div className="lets-get-in-touch mt-4 d-flex align-items-center justify-content-center justify-content-lg-start">
                                <a href="#" className="lets-get-in-touch-btn" ref={LetsGetInTouch}>
                                    <button>
                                        LET’S GET IN TOUCH
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;