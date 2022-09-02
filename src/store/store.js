import { configureStore, createSlice } from "@reduxjs/toolkit";

const firstSlice = createSlice({
  name: "firstStore",
  initialState: {
    title: "Project XYZ",
    message: "Hello React Redux",
  },
  reducers: {},
});

const firstStoreReducer = firstSlice.reducer;

// this will give us STORE / GLOBAL STATE
export default configureStore({
  reducer: { firstStore: firstStoreReducer },
});
