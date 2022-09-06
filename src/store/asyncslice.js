import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const asyncSlice = createSlice({
  name: "asyncStore",

  // Data Member
  initialState: {
    counter: 0,
    postList: [],
  },

  // Mmeber Function :: Sync Functions
  reducers: {
    incrementCounter: (state, action) => {
      state.counter += 100;
    },

    updatePostList: (state, action) => {
      state.postList = action.payload;
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

export const getPostsApiCallAction = () => {
  return async (dispatch) => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const response = await axios.get(url);

    dispatch(updatePostList(response.data));
  };
};

export const { incrementCounter, updatePostList } = asyncSlice.actions;
export default asyncSlice.reducer;
