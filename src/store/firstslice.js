import { createSlice } from "@reduxjs/toolkit";

//--- First Slice - Store - Reducer
const firstSlice = createSlice({
  name: "firstStore",
  initialState: {
    title: "Project XYZ",
    message: "Hello React Redux",
  },
  reducers: {},
});

export const {} = firstSlice.actions;
export default firstSlice.reducer;
