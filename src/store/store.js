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
  initialState: {
    counter: 100,
  },
  reducers: {},
});

// this will give us STORE / GLOBAL STATE
export default configureStore({
  reducer: { firstStore: firstSlice.reducer, secondStore: secondSlice.reducer },
});
