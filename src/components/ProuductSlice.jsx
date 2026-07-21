import React, { useEffect, useState } from 'react'
import { FaListUl, FaTableCellsLarge } from 'react-icons/fa6';

const ProuductSlice = ({filter}) => {
  let [perPage, setPerPage] = useState(6)
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
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-2">
        <div onClick={handleActive} className={`border border-red-500 p-2 cursor-pointer text-[12px]
          ${active === "active" ? "bg-red-500 hover:bg-red-800" : "hover:bg-red-500" }`}>
          <FaTableCellsLarge/>
        </div>
        <div onClick={handleList} className={`border border-red-500 p-2 cursor-pointer text-[12px] ${active === "" ? "bg-red-500 hover:bg-red-800" : "hover:bg-red-500" }`}>
          <FaListUl/>
        </div>
      </div>
      </div>
      <div className=""></div>
    </div>
  )
}

export default ProuductSlice
