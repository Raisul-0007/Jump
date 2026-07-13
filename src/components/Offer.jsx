import React, { useContext } from 'react'
import Container from './Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { Data } from './ApiData';

const Offer = () => {
  let info = useContext(Data)

  return (
    <div className="text-white py-12.5">
      <Container>
        <div className="">
          <h3 className="italic text-4xl text-center font-semibold">Offer</h3>
        </div>
        <div className="py-20">
          <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation
        modules={[Navigation]}
        className="mySwiper"
      >
        {info.map((item)=>(
          <SwiperSlide>
            <div className="bg-[#ffffff23] py-5 my-auto lg:min-h-70">
              <img className="w-full" src={item.thumbnail} alt="" />
            </div>
            <div className="">
              <div className="flex justify-between items-center">
                <h4 className="lg:text-2xl text-xl">{item.title.slice(0, 12)}</h4>
                <p className="lg:text-[16px] text-[12px] text-red-500">{(item.price-(item.price * item.discountPercentage) / 100).toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="lg:text-[16px] text-[12px] capitalize">
                  {item.category ? item.category : "Others"}
                </p>
                <p className="lg:text-[12px] text-[9px] line-through">{item.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
      </Container>
    </div>
  )
}

export default Offer
