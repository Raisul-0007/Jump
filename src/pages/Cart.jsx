import { lruMemoize } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import { FiMinus, FiPlus } from "react-icons/fi";
const Cart = () => {
  let dispatch = useDispatch();
  let cartData = useSelector((state) => state.cart.cartItem);
  let grandTotal = cartData.reduce((total, item) => {
    return (
      total +
      (item.price - (item.price * item.discountPercentage) / 100) * item.qun
    );
  }, 0);
  return (
    <div>
      <Container className="">
        <div className="py-20">
          {cartData.length > 0 && <h3 className="text-5xl">Your Cart</h3>}
        </div>
        <div className="pb-20">
          {cartData.length > 0 ? (
            <div className="">
              <div className="flex border bg-red-500 rounded-t-xl">
                <div className="w-2/5 py-5 flex items-center justify-center border-r">
                  <h3>Product Details</h3>
                </div>
                <div className="w-1/5 py-5 flex items-center justify-center border-r">
                  <h3>Price</h3>
                </div>
                <div className="w-1/5 py-5 flex items-center justify-center border-r">
                  <h3>Quantity</h3>
                </div>
                <div className="w-1/5 py-5 flex items-center justify-center">
                  <h3>Total</h3>
                </div>
              </div>
              <div className="">
                {cartData.map((item) => (
                  <div className="flex border border-t-0">
                    <div className="w-2/5 py-5 border-r flex items-center justify-center gap-5">
                      <img
                        className="h-15 w-15 border border-[#918e8e] bg-[#ffffff2f]"
                        src={item.thumbnail}
                        alt={item.id}
                      />
                      <h3 className="text-xl capitalize">{item.title}</h3>
                    </div>
                    <div className="w-1/5 flex items-center justify-center py-5 border-r italic">
                      <p className="text-sm text-red-500">
                        {(
                          item.price -
                          (item.price * item.discountPercentage) / 100
                        ).toFixed(2)}
                      </p>
                    </div>
                    <div className="w-1/5 flex items-center justify-center gap-3 py-5 border-r">
                      <button className="border cursor-pointer bg-white text-black p-0.5 rounded">
                        <FiMinus />
                      </button>
                      <div className="text-red-500">{item.qun}</div>
                      <button className="border cursor-pointer bg-white text-black p-0.5 rounded">
                        <FiPlus />
                      </button>
                    </div>
                    <div className="w-1/5 py-5 flex items-center justify-center italic text-sm">
                      {(
                        (item.price -
                          (item.price * item.discountPercentage) / 100) *
                        item.qun
                      ).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h4 className="text-5xl">No product in your cart</h4>
              <p className="py-5 text-red-500">Please Buy Somethings</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Cart;
