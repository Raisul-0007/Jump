import React from 'react'

const Products = ({active, allPage}) => {
  return (
    <div>
      {active === "active" ? (
        <div className="flex flex-wrap">
          {allPage.map((item)=>(
            <div className="w-1/3">
              <div className="">
                <img src={item.thumbnail} alt="" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="">
          {allPage.map((item)=>(
            <img src={item.thumbnail} alt="" />
          ))}
        </div>
      )}
    </div>
  )
}

export default Products
