import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
        state.items = action.payload; // Assign the payload to the items property
      },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;