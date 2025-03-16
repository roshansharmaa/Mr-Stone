import { createSlice } from '@reduxjs/toolkit'
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      state.push(action.payload)
    },
    RemoveItem: (state, action) => {
      const index = state.findIndex((i) => i.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1); // Mutate the state directly
      }}
  }

})

export const { AddItem, RemoveItem } = cartSlice.actions
export default cartSlice.reducer