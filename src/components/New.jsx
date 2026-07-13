import React, { useContext } from 'react'
import Container from './Container';
import SliderModule from "react-slick";
import {Data} from "./ApiData"
const Slider = SliderModule.default;
const New = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    waitForAnimate: false,
    arrows:false,
    autoplay:true,
    autoplayspeed: 2000,
  };
  let info = useContext(Data)
  return (
    <div className="text-white py-12.5">
      <Container>
         <h2 className="text-5xl font-semibold italic text-center">New Available</h2>
         <div className="pt-20 pb-10">
          <Slider {...settings}>
            {info.slice(176, 190).map((item)=>(
              <div key={item.id} className=" px-3  ">
                <div className="border rounded-4xl">
                <div className="rounded-t-4xl p-5 bg-[#ffffff23]">
                  <img src={item.thumbnail} alt={item.id} />
                </div>
                <div className="bg-red-500 rounded-b-4xl px-5 pt-2 pb-4">
                <div className="flex justify-between items-center py-2">
                  <div className="">
                    <h2 className="text-white lg:text-2xl text-xl">{item.title.slice(0, 12)}</h2>
                  </div>
                  <div className="">
                    <p className=" lg:text-[16px] text-[12px]">{(item.price-(item.price * item.discountPercentage) / 100).toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                    <p className="capitalize lg:text-sm text-[12px] text-[#d3d1d1]">{item.brand ? item.brand : "Local"}</p>
                    <p className="lg:text-[12px]   text-[10px] text-black line-through">{item.price}</p>
                </div>
                </div>
                </div>
              </div>
            ))}
          </Slider>
         </div>
      </Container>
    </div>
  )
}

export default New
