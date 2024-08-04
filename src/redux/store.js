import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/products/cartSlicer";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})