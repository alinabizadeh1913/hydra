import React from "react";
import Slider from "react-slick";

const Platform = () => {

    const settings = {
        infinite: true,
        dots: false,
        arrows:false,
        slidesToShow: 4,
        autoplay: true,
        speed: 3500,
        slidesToScroll: 1,
        autoplaySpeed: 3500,
        cssEase: "linear", 
        pauseOnHover: false,
      };

    return (
        <section id="platform">
            <div className="container">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="image-wrapper d-flex justify-content-center">
                            <img src="./img/unreal.png" alt="" className="slider-image"/>
                        </div>
                        <div className="image-wrapper d-flex justify-content-center">
                            <img src="./img/unity.png" alt="" className="slider-image"/>
                        </div>
                        <div className="image-wrapper d-flex justify-content-center">
                            <img src="./img/vive.png" alt="" className="slider-image"/>
                        </div>
                        <div className="image-wrapper d-flex justify-content-center">
                            <img src="./img/oculus.png" alt="" className="slider-image"/>
                        </div>
                    </Slider>
                </div>  
            </div>
        </section>
    )
}

export default Platform;