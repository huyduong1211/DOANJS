import {createSlice} from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        init: false
    },
    reducers: {
        addToCart(state, action){
            const isExisting = state.products.findIndex(e => e.productId === action.payload.ProductId);
            // console.log(state.products)
            //console.log(isExisting)
            if(isExisting != -1){
                state.products[isExisting].ProductQuantity += 1;
            }else{
                state.products.push({
                    productId: action.payload.ProductId,
                    ProductQuantity: 1
                });
            }
        },
        setCart(state,action){
            state.products = action.payload;
        },
        setInit(state, action){
            state.init = true;
        },
        removeFromCart(state, action){
            state.products = state.products.filter(e => e.productId != action.payload);
        }
    }
})

export const cartActions = CartSlice.actions;
export default CartSlice