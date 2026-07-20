import React, { useContext, useEffect, useState } from 'react'
import { Data } from './ApiData';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const Filter = () => {
  let info = useContext(Data)
  let [cate, cateShow] = useState(false)
  let [category, setCategory] = useState([])
  useEffect(()=>{
    setCategory([...new Set(info.map((item)=> item.category))])
  },[info])
  const [activeCategory, setActiveCategory] = useState("");
  


  return (
    <div className="flex gap-5 ">
    <div className="w-1/4">
      <div className="py-20">
        <div onClick={(()=> cateShow(!cate))} className="flex justify-between items-center border border-red-500 p-2">
          <h3 className="text-3xl cursor-pointer">Filter By Category</h3>
          {cate ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <div  className={`overflow-hidden transition-all duration-500 ease-in-out ${
    cate
      ? " opacity-100 mt-2"
      : "max-h-0 opacity-0"
  }`}>
          {cate &&(
            <ul className="">
          {category.map((item)=>(
              <li onClick={()=> setActiveCategory(item)} className={`capitalize px-2 text-xl cursor-pointer transition-colors duration-300 border-b py-2 ${
        activeCategory === item
          ? "text-red-500 border-red-500 font-semibold"
          : " hover:border-red-500 hover:text-red-500"
      }`}>{item}</li>
          ))}
          </ul>
          )}
        </div>
      </div>  
    </div>
    <div className="w-3/4"></div>
    </div>
  )
}

export default Filter
