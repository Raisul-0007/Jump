import React from 'react'
import Container from './Container';
import Logo from  "../assets/logos.svg"
import { IoMdCart } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className=" py-10 border-t border-t-white">
          <Container className="flex justify-between items-center">
            <div className="w-1/4">
              <img src={Logo} alt="" />
            </div>
            <div className="w-2/4">
            <ul className="text-center space-y-5">
              <li className="">
                <div className="relative inline-block text-white font-semibold cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:text-red-500 hover:after:w-full">
                    Home
                </div>
                </li>
              <li className="">
                <div className="relative inline-block text-white font-semibold cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:text-red-500 hover:after:w-full">
                    Shop
                </div>
                </li>
            </ul>
            </div>
            <div className="w-1/4 flex gap-10 justify-center items-center text-white text-xl">
            <FaFacebook/>
            <FaSquareInstagram/>
            <FaXTwitter/>
            </div>
          </Container>
        </div>
  )
}

export default Footer
