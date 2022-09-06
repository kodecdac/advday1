import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const genericSlice = createSlice({
  name: "genericStore",

  initialState: {
    editUserRef: undefined,
    editUserIndex: -1,

    displayModal: false,
    displayModalItem: undefined,

    displayToast: false,
    displayErrorToast: false,
    genericList: [],
  },

  reducers: {
    updateGenericListAction: (state, action) => {
      state.genericList = action.payload;
    },

    updateGenericItem: (state, action) => {
      console.log("Update,,,,,");
      state.genericList[state.editUserIndex] = action.payload;

      // should clear editRef
      state.editUserRef = undefined;
      state.editUserIndex = undefined;
    },

    ediUserRefAction: (state, action) => {
      state.editUserRef = action.payload.item;
      state.editUserIndex = action.payload.index;
    },

    deleteGenericItem: (state, action) => {
      console.log("About to Delete");
      state.genericList.splice(action.payload.index, 1);
    },

    toggleDispalyToast: (state) => {
      state.displayToast = !state.displayToast;
    },
    toggleDispalyErrorToast: (state) => {
      state.displayErrorToast = !state.displayErrorToast;
    },

    displayModalAction: (state, action) => {
      state.displayModal = true;
      state.displayModalItem = action.payload;
    },
    hideModalAction: (state) => {
      state.displayModal = false;
    },
  },
});

export const makeUserListApiAction = () => {
  return async (dispatch) => {
    const url = `http://localhost:8080/user/`;
    const response = await axios.get(url);

    dispatch(updateGenericListAction(response.data));
  };
};

export const addUserApiAction = (user, setUser) => {
  return async (dispatch) => {
    try {
      const url = `http://localhost:8080/user/`;
      const response = await axios.post(url, user);

      // Clean only in case of success
      setUser({
        username: "",
        password: "",
        email: "",
        mobile: "",
      });

      dispatch(toggleDispalyToast());
      setTimeout(() => dispatch(toggleDispalyToast()), 2500);
    } catch (err) {
      dispatch(toggleDispalyErrorToast());
      setTimeout(() => dispatch(toggleDispalyErrorToast()), 2500);
    }
  };
};

export const {
  updateGenericListAction,
  toggleDispalyToast,
  toggleDispalyErrorToast,
  deleteGenericItem,
  ediUserRefAction,
  updateGenericItem,
  displayModalAction,
  hideModalAction,
} = genericSlice.actions;
export default genericSlice.reducer;
