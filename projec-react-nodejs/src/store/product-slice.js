import {createSlice} from '@reduxjs/toolkit'

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        products: []
    }
    ,reducers: {
        setProducts(state,action){
            state.products = action.payload;
        }
    }
})
export const ProductActions = ProductSlice.actions;
export default ProductSlice