import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';//is line me issu ahi 

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cart reducer to the store
  },
});

export default store

//hogya