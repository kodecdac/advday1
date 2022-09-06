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

export const getOrdersApiCallAction = () => {
  return async (dispatch) => {
    try {
      localStorage.getItem("");

      const url = `http://localhost:8080/order/`;
      // const token =  `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiaXNzIjoiY2RhYyIsImlhdCI6MTY2MjQ1NTk4NSwiZXhwIjoxNjYyNDU5NTg1fQ.lRgobHtrYAjUTeAEtvhQdqxBWS0r_46iNn8P0NtDvmx4-Dxl4koRsxJlMuIdv0mc9nOOyVd1o46OPd71s1qgJw`;
      const token = localStorage.getItem("jwt");
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get(url, { headers });

      console.log(response.data);
      dispatch(updatePostList(response.data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const { incrementCounter, updatePostList } = asyncSlice.actions;
export default asyncSlice.reducer;
