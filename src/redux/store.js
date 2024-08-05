import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/products/cartSlicer";
import productReducer from "../features/products/productSlicer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer 
    }
})