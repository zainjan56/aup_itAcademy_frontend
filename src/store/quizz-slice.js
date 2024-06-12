import { createSlice } from '@reduxjs/toolkit';

const quizzSlice = createSlice({
  name: 'quizz',
  initialState: {
    items: [],
  },
  reducers: {
    addQuizzQuestion: (state, action) => {
        state.items = action.payload; // Assign the payload to the items property
      },
  },
});

export const quuizzActions = quizzSlice.actions;

export default quizzSlice;