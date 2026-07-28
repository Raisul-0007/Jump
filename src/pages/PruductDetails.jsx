import React, {useState, useEffect} from 'react'
import Container from '../components/Container'
import useParams from 'react-router-dom'
import axios from "axios"
const PruductDetails = () => {
  let productId = useParams()
  let [product, setProduct] = useState()
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products?&limit=0/${productId}`).then((res)=> setProduct(res.data))
  },[productId])
  return (
    <div>
      <Container></Container>
    </div>
  )
}

export default PruductDetails
