import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/Cart/CartSlice'
const store = configureStore({
    reducer: {
      cart: cartReducer,
      // other reducers if any
    },
  });
  export default store;