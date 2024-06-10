import { createSlice } from "@reduxjs/toolkit";

const studentrecSlice = createSlice({
  name: "studentrecords",
  initialState: {
    items: []
  },
  reducers: {
    studentallrecords: (state, action) => {
      state.items = action.payload; // Update the score with the payload value
    },
  },
});

export const studentrecordActions = studentrecSlice.actions;

export default studentrecSlice;
