import React from 'react'

const Products = ({active, allPage}) => {
  return (
    <div className="py-10">
      {active === "active" ? (
        <div className="flex flex-wrap">
          {allPage.map((item)=>(
            <div className="w-1/3 p-2 group hover:scale-108 ease-in-out duration-300 ">
              <div className="bg-[#ffffff13] rounded-t-4xl rounded-r-4xl">
                <img className="w-full " src={item.thumbnail} alt="" />
              </div>
              <div className="bg-red-500 rounded-b-4xl px-5 pt-2 pb-4">
                <div className="flex justify-between items-center py-2">
                  <div className="">
                    <h2 className="text-white lg:text-2xl text-xl">{item.title.slice(0, 12)}</h2>
                  </div>
                  <div className="">
                    <p className=" lg:text-[16px] text-[12px]">$ {(item.price-(item.price * item.discountPercentage) / 100).toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                    <p className="capitalize lg:text-sm text-[12px] text-[#d3d1d1]">{item.brand ? item.brand : "Local"}</p>
                    <p className="lg:text-[12px]   text-[10px] text-black line-through">$ {item.price}</p>
                </div>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="">
          {allPage.map((item)=>(
            <div className="flex p-4">
              <div className="w-1/4">
                <img className="bg-[#ffffff13]  rounded-l-4xl " src={item.thumbnail} alt="" />
              </div>
              <div className="w-2/3 gap-3 bg-red-500 rounded-r-4xl pl-5 py-4 flex">
              <div className="w-2/3 ">
                <h3 className="lg:text-4xl text-xl">{item.title}</h3>
                <p className="capitalize py-4 text-[#d3d1d1]">Brand: {item.brand ? item.brand : "Local"}</p>
              </div>
              <div className="w-1/3 flex gap-2 py-2">
                <h5 className="text-2xl">$ {(item.price -((item.price * item.discountPercentage) / 100)).toFixed(2)}</h5>
                <p className="text-black line-through py-0.5 text-xl">$ {item.price}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Products
