import { lruMemoize } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  let dispatch = useDispatch();
  let cartData = useSelector((state) => state.cart.cartItem);
  let grandTotal = cartData.reduce((total, item) => {
    return (
      total +
      (item.price - (item.price * item.discountPrecentage) / 100) * item.qun
    );
  }, 0);

  return <div className=""></div>;
};

export default Cart;
