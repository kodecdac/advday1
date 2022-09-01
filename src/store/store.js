import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const authstoreSlice = createSlice({
  name: "authstore",
  initialState: {
    value: 0,
  },
  reducers: {
    login: (state) => {
      state.value = 1;
    },
    logout: (state) => {
      state.value = 0;
    },
  },
});

export const { login, logout } = authstoreSlice.actions;
const authstoreSliceReducer = authstoreSlice.reducer;

export default configureStore({
  reducer: { authstore: authstoreSliceReducer },
});
