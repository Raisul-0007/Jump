import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(state, action)=>{
      let index = state.cartItem.findIndex((item)=> item.id === action.payload.id)
      if(index != -1){
        state.cartItem[index].qun++
      }else{
        state.cartItem = [...state.cartItem, action.payload]
      }
    },
    increment: (state, action) => {
      state.value = 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})


export const { increment, decrement, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer