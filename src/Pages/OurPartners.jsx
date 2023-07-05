import React from "react";
import LawmaLogo from "../assets/lawmaLogo.png";
import LagosLogo from "../assets/LagosLogo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function OurPartners() {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="  px-6 lg:px-36 pb-[3rem] pt-[3rem] bg-[#a8c8ff25]">

      <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold text-center  leading-7 md:leading-10  mb-6 ">
        Our Partners{" "}
      </h1>

      <Slider className="customer-logos" {...settings}>
        <div className="slide">
          <img src={LawmaLogo} alt="Adidas Logo" />
        </div>
        <div className="slide">
          <img src={LagosLogo} alt="Facebook Logo" />
        </div>
        <div className="slide">
          <img src={LawmaLogo} alt="Google Logo" />
        </div>
        <div className="slide">
          <img src={LagosLogo} alt="Instagram Logo" />
        </div>
        <div className="slide">
          <img src={LawmaLogo} alt="Nike Logo" />
        </div>
        <div className="slide">
          <img src={LagosLogo} alt="Twitter Logo" />
        </div>
        <div className="slide">
          <img src={LawmaLogo} alt="Uber Logo" />
        </div>
        <div className="slide">
          <img src={LagosLogo} alt="Youtube Logo" />
        </div>
      </Slider>
    </div>
  );
}
export default OurPartners;
