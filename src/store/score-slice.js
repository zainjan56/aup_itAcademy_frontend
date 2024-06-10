import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "score",
  initialState: {
    score: 0,
    totalScore: 0, // Initialize the score with a default value
  },
  reducers: {
    quizScore: (state, action) => {
      state.score = action.payload; // Update the score with the payload value
    },
    quizTotalScore: (state, action) => {
        state.totalScore = action.payload; // Update totalScore with the payload value
      },
  },
});

export const scoreActions = scoreSlice.actions;

export default scoreSlice;
