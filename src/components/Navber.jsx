import React from 'react'
import Container from './Container';
import Logo from  "../assets/logos.svg"
const Navber = () => {
  return (
    <div className="bg-[#090909] py-3 ">
      <Container className="flex justify-between items-center">
        <div className="w-1/4">
          <img src={Logo} alt="" />
        </div>
        <div className="w-2/4">
        <ul className="flex gap-10">
          <li className="relative inline-block text-white font-semibold cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:text-red-500 hover:after:w-full">
            Home
            </li>
          <li className="relative inline-block text-white font-semibold cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:text-red-500 hover:after:w-full">Shop</li>
        </ul>
        </div>
        <div className="w-1/4">
          <div className="">
          </div>
          <div className=""></div>
        </div>
      </Container>
    </div>
  )
}

export default Navber
