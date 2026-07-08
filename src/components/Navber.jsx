import React from 'react'
import Container from './Container';
import Logo from  "../assets/logos.svg"
import { IoMdCart } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

const Navber = () => {
  return (
    <div className=" py-3 ">
      <Container className="flex justify-between items-center">
        <div className="w-1/4">
          <img src={Logo} alt="" />
        </div>
        <div className="w-2/4">
        <ul className="flex justify-center gap-10">
          <li className="relative inline-block text-white font-semibold cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:text-red-500 hover:after:w-full">
            Home
            </li>
          <li className="relative inline-block text-white font-semibold cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:text-red-500 hover:after:w-full">Shop</li>
        </ul>
        </div>
        <div className="w-1/4 flex gap-10 justify-center items-center">
          <div className="relative">
            <input type="text" className="bg-white py-2 rounded-lg focus:outline-none focus:ring-0 pl-3 pr-8 "/>
            <div className="absolute right-2 top-3 text-xl ">
              <IoSearchSharp />
            </div>
          </div>
          <div className="text-white text-2xl">
            <IoMdCart />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navber
