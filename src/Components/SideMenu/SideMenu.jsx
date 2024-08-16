import React, { useEffect, useRef } from "react";
import useStore from "../../Store/Store";

const SideMenu = () => {

    const sideMenu = useRef();
    const { isOpen } = useStore();

    useEffect(() => {
        if (isOpen) { 
            sideMenu.current.style.transform = "translateX(0)";
        }else{
            sideMenu.current.style.transform = "translateX(100%)"
        }
    }, [])

    return (
        <section id="side-menu" className="d-flex d-lg-none justify-content-center align-items-center" ref={sideMenu}>
            <div className="close position-absolute d-flex justify-content-end">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div className="links d-flex flex-column justify-content-center align-items-center">
                <a href="#about">
                    <i class="fa-solid fa-info"></i>
                    ABOUT HYDRA
                </a>
                <a href="#services">
                    <i class="fa-solid fa-gear"></i>
                    SERVICES
                </a>
                <a href="#technologies">
                    <i class="fa-solid fa-microchip"></i>
                    TECHNOLOGIES
                </a>
                <a href="#how-we-build">
                    <i class="fa-solid fa-question"></i>
                    HOW BUILD
                </a>
                <a href="#join">
                    <i class="fa-solid fa-arrow-right-to-bracket"></i>
                    JOIN HYDRA
                </a>
            </div>
        </section>
    )
}

export default SideMenu;