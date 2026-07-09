import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const Data = createContext()

const ApiData = ({children}) => {
  let [info, setInfo] = useState([])

  let getData = async ()=>{
    try{
    const response = await axios.get("https://dummyjson.com/products?&limit=0")
      setInfo(response.data.products) 
    }catch(error){
      console.log(error);
      
    }
  }
  useEffect(()=>{
    getData()
  },[])

  return (
      <Data.Provider value={info}>{children}</Data.Provider>
  )
}

export {ApiData, Data}
