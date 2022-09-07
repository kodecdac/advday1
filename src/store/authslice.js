import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authStore",
  initialState: {
    loginStatus: false,
    loginError: false,
  },
  reducers: {
    loginAction: (state) => {
      state.loginStatus = true;
    },
    logoutAction: (state) => {
      state.loginStatus = false;
    },

    toggleLoginError: (state) => {
      state.loginError = !state.loginError;
    },
  },
});

export const loginApiAction = (payload) => {
  return async (dispatch) => {
    try {
      // LOGIN API
      const url = `http://localhost:8080/auth/authenticate/`;
      const response = await axios.post(url, payload);

      if (response.status == "200") {
        console.log(response.data.jwt);
        localStorage.setItem("authjwt", response.data.jwt);

        // finally update the redux state
        dispatch(loginAction());
      }
    } catch (err) {
      console.log(err);
      dispatch(toggleLoginError());

      setTimeout(() => dispatch(toggleLoginError()), 2500);
    }
  };
};

export const logoutApiAction = (payload) => {
  return async (dispatch) => {
    // LOGOUT API
    // ...more logcal operation

    // localStorage.clear();
    localStorage.removeItem("authjwt");

    // finally update the redux state
    dispatch(logoutAction());
  };
};

export const { loginAction, logoutAction, toggleLoginError } =
  authSlice.actions;
export default authSlice.reducer;
