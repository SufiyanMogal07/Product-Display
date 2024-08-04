import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const cartSlicer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state,action)=> {
            let flag = state.find((item)=> item.id === action.payload.id)
            if(!flag) {
                state.push(action.payload)
            }
        },
        removeFromCart: (state,action)=> {
            return state.filter((item)=> item.id !== action.payload)
        }
    }
})

export const {addToCart,removeFromCart} = cartSlicer.actions;

export default cartSlicer.reducer;

