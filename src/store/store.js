import { configureStore, createSlice } from "@reduxjs/toolkit";

//--- First Slice - Store - Reducer
const firstSlice = createSlice({
  name: "firstStore",
  initialState: {
    title: "Project XYZ",
    message: "Hello React Redux",
  },
  reducers: {},
});

//--- Second Slice - Store - Reducer
const secondSlice = createSlice({
  name: "secondStore",

  // DATA MEMBERS
  initialState: {
    counter: 100,
  },

  // MEMBER FUNCTIONS :: ACTIONS
  reducers: {
    incrmentCounter: (state) => {
      state.counter += 100;
    },
  },
});

export const { incrmentCounter } = secondSlice.actions;

// this will give us STORE / GLOBAL STATE
export default configureStore({
  reducer: { firstStore: firstSlice.reducer, secondStore: secondSlice.reducer },
});
