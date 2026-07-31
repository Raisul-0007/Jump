import React, {useState, useEffect} from 'react'
import Container from '../components/Container'
import {useParams} from 'react-router-dom'
import axios from "axios"
import { TiStarHalf } from "react-icons/ti";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io"
const PruductDetails = () => {
  let {id} = useParams()
  let [product, setProduct] = useState()
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`).then((res)=> setProduct(res.data))
  },[id])

  let clientRating = Array.from({length:5}, (_ , index)=>{
    const  number = index + 0.5

    return product?.rating > index + 1 ? (
      <IoIosStar key={index}/>
    ): product?.rating > number ? (
      <TiStarHalf key={index}/>
    ):(
      <div className=""></div>
    )
  })

  return (
    <div>
      <Container>
        <div className="flex gap-10">
          <div className="w-2/5">
            <img className="bg-[#ffffff13] w-full rounded-4xl " src={product?.thumbnail} alt="" />
          </div>
          <div className="w-3/5">
            <div className="py-5">
              <p className="capitalize text-red-500">{product?.category}</p>
              <h2 className="text-6xl py-2">{product?.title}</h2>
            </div>
            <div className="flex gap-0.5 text-amber-300">
              {clientRating}
            </div>
            <div className="">
              Add To Cart
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PruductDetails
