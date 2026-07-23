import React, { useEffect, useState } from 'react'
import { FaListUl, FaTableCellsLarge } from 'react-icons/fa6';
import Products from './Products';

const ProuductSlice = ({filter}) => {
  let [perPage, setPerPage] = useState(12)
  let [currentPage, setCurrentPage] = useState(1)
  let lastPage = perPage * currentPage
  let firstPage = perPage - perPage
  let allPage = filter.slice(firstPage, lastPage)
  let [active, setActive] = useState("active")
  let handleActive = ()=>{
    setActive("active")
  }
  let handleList = ()=>{
    setActive("")
  }
  useEffect(()=>{
    setCurrentPage(1)
  },[filter])

  let pageNumber = []

  for (let i = 1; i < (filter.length/perPage); i++) {
    pageNumber.length[i]; 
  }
  let prev = ()=>{
    if(currentPage > 1){
      setCurrentPage((index)=> index - 1)
    }
  }
  let paginate = (index)=>{
    setCurrentPage(index + 1 )
  }
  let next = ()=>{
    if(currentPage < currentPage.length){
      setCurrentPage((index)=> index + 1)
    }
  }
  let handlePageNumber = (e)=>{
    setPerPage(e.target.value)
    setCurrentPage(1)
  }
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-2">
        <div onClick={handleActive} className={`border border-red-500 p-2 cursor-pointer 
          ${active === "active" ? "bg-red-500 hover:bg-red-800" : "hover:bg-red-500" }`}>
          <FaTableCellsLarge/>
        </div>
        <div onClick={handleList} className={`border border-red-500 p-2 cursor-pointer  ${active === "" ? "bg-red-500 hover:bg-red-800" : "hover:bg-red-500" }`}>
          <FaListUl/>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <p className="">Show :</p>
        <select onChange={handlePageNumber} name="" id="" className=" px-5 py-1  cursor-pointer border border-red-800 shadow-2xl">
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="20">20</option>
        </select>
      </div>
      </div>
      <div className="">
        <Products active={active} allPage={allPage}/>
      </div>
      <div className=""></div>
    </div>
  )
}

export default ProuductSlice
