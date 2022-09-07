import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authStore",
  initialState: {
    loginStatus: false,
  },
  reducers: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
