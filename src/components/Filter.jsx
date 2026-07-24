import React, { useContext, useEffect, useState } from 'react'
import { Data } from './ApiData';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import ProuductSlice from './ProuductSlice';
import Pagination from './Pagination';

const Filter = () => {
  let info = useContext(Data)
  let [cate, cateShow] = useState(false)
  let [category, setCategory] = useState([])
  useEffect(()=>{
    setCategory([...new Set(info.map((item)=> item.category))])
  },[info])
  let [active, setActive] = useState("")
  let [activePrice, setActivePrice] = useState({})
  let [price, priceShow] = useState(false)


  let [filter, setFilter] = useState([])
  let handleCategory = (i)=>{
    let filterItem = info.filter((item)=> item.category == i)
    setFilter(filterItem)
    setActive(i)
  } 
  useEffect(()=>{
    setFilter(info)
  },[info])
  let [low, setLow] = useState()
  let [high, setHigh] = useState()
  let handlePrice = ( value)=>{
    setLow(value.low)
    setHigh(value.high)
    let priceFilter = info.filter((item)=> item.price > value.low && item.price < value.high)
    setFilter(priceFilter) 
    setActivePrice(value)
  }

  let handleAll = ()=>{
    setFilter(info)
    setActive("")
    setActivePrice({})
    setLow(null)
    setHigh(null)
  }
  return (
    <div className="flex gap-5 ">
    <div className="w-1/4">
      <div className="py-5">
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
              <li onClick={handleAll} className={`capitalize px-2 text-xl cursor-pointer transition-colors duration-300 border-b py-2 ${
        active === ""
          ? "text-red-500 border-red-500 font-semibold"
          : " hover:border-red-500 hover:text-red-500"
      }`}>All Category</li>
          {category.map((item)=>(
              <li onClick={()=>handleCategory(item)} className={`capitalize px-2 text-xl cursor-pointer transition-colors duration-300 border-b py-2 ${
        active === item
          ? "text-red-500 border-red-500 font-semibold"
          : " hover:border-red-500 hover:text-red-500"
      }`}>{item}</li>
          ))}
          </ul>
          )}
        </div>
      </div> 
      <div className="py-5">
        <div onClick={(()=> priceShow(!price))} className="flex justify-between items-center border border-red-500 p-2 cursor-pointer">
          <h3 className="text-3xl">Filter By Price</h3>
          {price ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
    price
      ? " opacity-100 mt-2"
      : "max-h-0 opacity-0"
  }`}>
    {price &&(
      <ul>
        <li onClick={handleAll} className={`capitalize px-2 text-xl cursor-pointer transition-colors duration-300 border-b py-2 ${
    !activePrice.low
      ? "text-red-500 border-red-500 font-semibold"
      : "hover:border-red-500 hover:text-red-500"
  }`}>All Price</li>
          <li onClick={()=>handlePrice({low:0, high:100})} className={`capitalize px-2 text-xl cursor-pointer transition-colors duration-300 border-b py-2 ${
    activePrice.low === 0 && activePrice.high === 100
      ? "text-red-500 border-red-500 font-semibold"
      : "hover:border-red-500 hover:text-red-500"
  }`}>$0-$100</li>
          <li onClick={()=>handlePrice({low:101, high:1000})} className={`capitalize px-2 text-xl cursor-pointer transition-colors duration-300 border-b py-2 ${
    activePrice.low === 100 && activePrice.high === 1000
      ? "text-red-500 border-red-500 font-semibold"
      : "hover:border-red-500 hover:text-red-500"
  }`}>$101-$1000</li>
          <li onClick={()=>handlePrice({low:1001, high:10000})} className={`capitalize px-2 text-xl cursor-pointer transition-colors duration-300 border-b py-2 ${
    activePrice.low === 1001 && activePrice.high === 10000
      ? "text-red-500 border-red-500 font-semibold"
      : "hover:border-red-500 hover:text-red-500"
  }`}>$1001-$10000</li>
          <li onClick={()=>handlePrice({low:10001, high:Infinity})} className={`capitalize px-2 text-xl cursor-pointer transition-colors duration-300 border-b py-2 ${
    activePrice.low === 10001 && activePrice.high === Infinity
      ? "text-red-500 border-red-500 font-semibold"
      : "hover:border-red-500 hover:text-red-500"
  }`}>10000+</li>
      </ul>
    )}
  </div>
    </div>
    </div>
    <div className="w-3/4">
    <ProuductSlice filter={filter}/>
    <Pagination />
    </div>
    </div>
  )
}

export default Filter
