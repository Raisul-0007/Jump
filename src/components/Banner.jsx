import React from 'react'
import Container from './Container';
import ban1 from "../assets/ban-1.png"
import ban2 from "../assets/ban-2.png"
import ban3 from "../assets/ban-3.png"
import ban4 from "../assets/ban-4.png"
import SliderModule from "react-slick";

const Slider = SliderModule.default;

const Banner = () => {
  var settings = {
    
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Container>
        <Slider {...settings}>
        <div className="">
          <img className="w-full" src={ban1} alt="" />
        </div>
        <div className="">
          <img className="w-full" src={ban2} alt="" />
        </div>
        <div className="">
          <img className="w-full" src={ban3} alt="" />
        </div>
        <div className="">
          <img className="w-full" src={ban4} alt="" />
        </div>
        </Slider>
      </Container>
    </div>
  )
}

export default Banner
