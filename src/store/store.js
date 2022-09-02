import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const datastoreSlice = createSlice({
  name: "datastore",
  initialState: {
    list: [],
  },
  reducers: {
    setDatastoreList: (state, actions) => {
      state.list = actions.payload;
    },
  },
});

export const { setDatastoreList } = datastoreSlice.actions;
const datastoreSliceReducer = datastoreSlice.reducer;

export default configureStore({
  reducer: {
    authstore: authstoreSliceReducer,
    datastore: datastoreSliceReducer,
  },
});

export const asyncLogout = () => {
  return async (dispatch, getState) => {
    console.log(dispatch, getState());

    setTimeout(() => {
      dispatch(logout());
    }, 2000);
  };
};

export const makeApiCall = () => {
  return async (dispatch, getState) => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    let res = await axios.get(url);
    dispatch(setDatastoreList(res.data));
  };
};
