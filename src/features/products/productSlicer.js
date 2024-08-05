import { createSlice } from "@reduxjs/toolkit";

export const statuses = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
})

export const productSlicer = createSlice({
    name: "products",
    initialState: {
        data: [],
        status: statuses.IDLE
    },
    reducers: {
       setProducts: (state,action) => {
        state.data = action.payload
       },
       setStatus: (state,action) => {
        state.status = action.payload
       }
    }
})

export const {setProducts,setStatus} = productSlicer.actions;
export default productSlicer.reducer;


// Thunk
export function fetchProducts() {
    return async function fetchProductsThunk(dispatch,getState) {
        dispatch(setStatus(statuses.LOADING))
        try {
            const data = await fetch('https://fakestoreapi.com/products?limit=20');
            const res = await data.json();
            dispatch(setProducts(res))
            dispatch(setStatus(statuses.IDLE))
        } catch(err) {
            console.log(err)
            dispatch(setStatus(statuses.ERROR))
        }
    }
}

