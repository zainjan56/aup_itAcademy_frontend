import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    items: [],
  },
  reducers: {
    addDataToLogin: (state, action) => {
        state.items = action.payload; // Assign the payload to the items property
      },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;