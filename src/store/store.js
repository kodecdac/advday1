import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const likeCounterSlice = createSlice({
  name: "likeCounter",
  initialState: {
    lvalue: 0,
  },
  reducers: {
    lincrement: (state) => {
      state.lvalue += 1;
    },
    ldecrement: (state) => {
      state.lvalue -= 1;
    },
  },
});

export const { lincrement, ldecrement } = likeCounterSlice.actions;
const likeCounterReducer = likeCounterSlice.reducer;

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
const counterReducer = counterSlice.reducer;

export default configureStore({
  reducer: { counter: counterReducer, likeCounter: likeCounterReducer },
});

export const incrementAsync = () => {
  return async (dispatch, getState) => {
    setTimeout(() => dispatch(increment()), 1000);
  };
};
