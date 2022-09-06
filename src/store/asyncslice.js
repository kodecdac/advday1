import { createSlice } from "@reduxjs/toolkit";

const asyncSlice = createSlice({
  name: "asyncStore",

  // Data Member
  initialState: {
    counter: 0,
  },

  // Mmeber Function :: Sync Functions
  reducers: {
    incrementCounter: (state, action) => {
      state.counter += 100;
    },
  },
});

// WORKING WITH ASYNC + REDUX :: ASYNC ACTIONS
export const incrementCounterAsync = () => {
  return async (dispatch) => {
    // API, DB, ASYNC, SET
    setTimeout(() => dispatch(incrementCounter()), 1000);
  };
};

export const { incrementCounter } = asyncSlice.actions;
export default asyncSlice.reducer;
