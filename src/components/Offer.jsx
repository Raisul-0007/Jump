import React, { useContext, useRef } from 'react'
import Container from './Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper/modules";
import { Data } from './ApiData';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Offer = () => {
  let info = useContext(Data)
         const prevRef = useRef(null)
         const nextRef = useRef(null)

  return (
    <div className="text-white py-12.5">
      <Container>
        <div className="">
          <h3 className="italic text-5xl text-center font-semibold">Offer Products</h3>
        </div>
        <div className="py-10 px-5">
          <div className="flex justify-end gap-4 mb-5">
            <button ref={prevRef} className="p-3 cursor-pointer bg-[#ffffff13] rounded-lg text-red-500">
              <FaArrowLeft />
            </button>
            <button ref={nextRef} className="p-3 cursor-pointer bg-[#ffffff13] text-red-500 rounded-lg">
              <FaArrowRight />
            </button>
          </div>
          <Swiper
        slidesPerView={4}
        spaceBetween={40}
        slidesPerGroup={2}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {info.slice(100, 175).map((item)=>(
          <SwiperSlide>
            <div className="bg-[#ffffff13] py-5 my-auto">
              <img className="w-full" src={item.thumbnail} alt="" />
            </div>
            <div className="py-4  ">
              <div className="flex justify-between items-center">
                <h4 className="lg:text-2xl text-xl">{item.title.slice(0, 12)}</h4>
                <p className="lg:text-[16px] text-[12px] text-red-500">$ {(item.price-(item.price * item.discountPercentage) / 100).toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="lg:text-[16px] text-[12px] capitalize">
                  {item.category ? item.category : "Others"}
                </p>
                <p className="lg:text-[12px] text-[9px] line-through">$ {item.price}</p>
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
