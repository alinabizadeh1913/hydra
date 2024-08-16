import React, { useEffect, useLayoutEffect, useRef } from "react";

const Join = () => {

    const SendToHydra = useRef();

    useEffect(() => {
        SendToHydra.current.addEventListener('mouseover', (e) => {
            const { currentTarget } = e;
            currentTarget.classList.add('bg-move');
        });

        SendToHydra.current.addEventListener('mouseout', (e) => {
            const { currentTarget } = e;
            currentTarget.classList.remove('bg-move');
        });

        SendToHydra.current.addEventListener('animationend', (e) => {
            const { currentTarget } = e;
            currentTarget.classList.remove('bg-move');
        })
    }, [])


    return (
        <section id="join">
            <div className="container">
                <div className="join-wrapper d-flex flex-column align-items-center justify-content-center p-5">
                    <h2 className="title text-white mb-2 text-center">
                        JOIN HYDRA
                    </h2>
                    <h3 className="description mb-4 mb-lg-5 text-center">
                        Let’s Build Your VR Experience
                    </h3>
                    <form action="" className="w-100" autoComplete="off">
                        <div className="first-last-name d-flex flex-wrap">
                            <div className="col-12 col-md-6 px-2 mb-3">
                                <input type="text" name="first_name" className="w-100" placeholder="First Name"/>
                            </div>
                            <div className="col-12 col-md-6 px-2 mb-3">
                                <input type="text" name="last_name" className="w-100" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="email-phone d-flex flex-wrap">
                            <div className="col-12 col-md-6 px-2 mb-3">
                                <input type="email" name="email" className="w-100" placeholder="Email"/>
                            </div>
                            <div className="col-12 col-md-6 px-2 mb-3">
                                <input type="number" name="phone_number" className="w-100 no-spinner" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="email-phone d-flex flex-wrap">
                            <div className="col-12 px-2 mb-3">
                                <input type="text" name="subject" className="w-100" placeholder="Subject"/>
                            </div>
                        </div>
                        <div className="text d-flex flex-wrap">
                            <div className="col-12 px-2 mb-3">
                                <textarea name="message" cols="30" rows="10" className="w-100" placeholder="Tell Us Something ..."></textarea>
                            </div>
                        </div>
                        <div className="col-12 my-4 d-flex justify-content-center">
                            <a href="#" className="send-to-hydra-btn" ref={SendToHydra}>
                                <button type="submit">
                                    Send To Hydra
                                </button>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Join;