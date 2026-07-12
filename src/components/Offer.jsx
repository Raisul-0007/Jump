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
        <div className="">
          <Swiper
      >
        {info.map((item)=>(
          <SwiperSlide>
            <div className="">
              <img src={item.thumbnail} alt="" />
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
