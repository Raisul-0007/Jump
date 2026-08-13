import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let index = state.cartItem.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index != -1) {
        state.cartItem[index].qun++;
      } else {
        state.cartItem = [...state.cartItem, action.payload];
      }
    },
    removeCart: (state, action) => {
      let filterCate = state.cartItem.filter(
        (item) => item.id != action.payload.id,
      );
      state.cartItem = filterCate;
    },
    increment: (state, action) => {
      let index = state.cartItem.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.cartItem[index].qun += 1;
      }
    },
    decrement: (state, action) => {
      let index = state.cartItem.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index !== -1 && state.cartItem[index].qun > 1) {
        state.cartItem[index].qun -= 1;
      }
    },
  },
});

export const { addToCart, removeCart, increment, decrement } =
  cartSlice.actions;

export default cartSlice.reducer;
