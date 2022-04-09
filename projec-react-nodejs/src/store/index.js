import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './cart-slice'
import ProductSlice from './product-slice'
const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
        product: ProductSlice.reducer
    }
})
export default store