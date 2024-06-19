import React, { useEffect, useLayoutEffect, useRef } from "react";

const Navbar = () => {

    const navbar = useRef();
    const join = useRef();

    const goToContact = () => {
        const contactElem = document.querySelector('#contact');
        contactElem.scrollIntoView(false)
    }
    
    useEffect(() => {
        join.current.addEventListener('mouseover', (e) => {
            const { currentTarget } = e;
            currentTarget.classList.add('bg-move'); 
        });

        join.current.addEventListener('mouseout', (e) => {
            const { currentTarget } = e;
            currentTarget.classList.remove('bg-move');
        });

        join.current.addEventListener('animationend', (e) => {
            const { currentTarget } = e;
            currentTarget.classList.remove('bg-move');
        })
    }, [])

    useLayoutEffect(() => {
        window.addEventListener('scroll', e => {
            const scrollY = window.scrollY;
            if (scrollY > 150) {
                navbar.current.style.background = '#5c19af70'
            }else{
                navbar.current.style.background = ''
            }
        })
    }, [])
    
    return (
        <section id="navbar" ref={navbar}>
            <nav className="container py-4">
                <div className="navbar-inner w-100 d-flex flex-wrap align-items-center justify-content-between">
                    <div className="logo">
                        <img src="./img/logo.png" alt="" />
                        <p className="mb-0 mx-1">
                            HYDRA
                        </p>
                    </div>
                    <div className="links d-none d-lg-block">
                        <a href="#about">
                            <i class="fa-solid fa-info mx-2"></i>
                            ABOUT
                        </a>
                        <a href="#services">
                            <i class="fa-solid fa-gear mx-2"></i>
                            SERVICES
                        </a>
                        <a href="#technologies">
                            <i class="fa-solid fa-microchip mx-2"></i>
                            TECHNOLOGIES
                        </a>
                        <a href="#howto">
                            <i class="fa-solid fa-question mx-2"></i>
                            HOW BUILD
                        </a>
                    </div>
                    <div className="contact-join">
                        <a href="" className="contact d-none d-lg-inline" onClick={e => {
                            e.preventDefault();
                            goToContact()
                        }}>
                        <button>
                            CONTACT US
                        </button>
                        </a>
                        <a href="#join" className="join d-none d-lg-inline" ref={join}>
                        <button>
                            JOIN HYDRA
                        </button>
                        </a>
                        <a href="#" className="burger-menu d-block d-lg-none">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </a>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar;