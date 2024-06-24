import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/Cart/CartSlice'
import toastReducer from '../features/Toaster/ToastSlice'
import favReducer from '../features/favprods/FavSlice'
const store = configureStore({
    reducer: {
      cart: cartReducer,
      toast:toastReducer,
      fav:favReducer,
    },
  });
  export default store;