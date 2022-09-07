import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authStore",
  initialState: {
    loginStatus: false,
  },
  reducers: {
    loginAction: (state) => {
      state.loginStatus = true;
    },
    logoutAction: (state) => {
      state.loginStatus = false;
    },
  },
});

export const loginApiAction = (payload) => {
  return async (dispatch) => {
    // LOGIN API
    // ...more logcal operation

    // finally update the redux state
    dispatch(loginAction());
  };
};

export const logoutApiAction = (payload) => {
  return async (dispatch) => {
    // LOGOUT API
    // ...more logcal operation

    // finally update the redux state
    dispatch(logoutAction());
  };
};

export const { loginAction, logoutAction } = authSlice.actions;
export default authSlice.reducer;
