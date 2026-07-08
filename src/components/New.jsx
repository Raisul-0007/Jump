import React from 'react'
import Container from './Container';
import SliderModule from "react-slick";
const Slider = SliderModule.default;
const New = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="text-white py-12.5">
      <Container>
         <h2 className="text-5xl font-semibold italic text-center">New Available</h2>
         <div className="">
          <Slider {...settings}>
            <div className="">One</div>
            <div className="">Two</div>
            <div className="">Three</div>
            <div className="">Four</div>
          </Slider>
         </div>
      </Container>
    </div>
  )
}

export default New
