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
    genericList: [],
  },

  reducers: {
    updateGenericListAction: (state, action) => {
      state.genericList = action.payload;
    },

    addGenericItem: (state, action) => {
      try {
        // logic...
        state.genericList.unshift(action.payload);

        // success toast
        // state.displayToast = true;
      } catch (err) {
        console.error(err);
      }
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

    hideDispalyToast: (state) => {
      state.displayToast = false;
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

export const {
  updateGenericListAction,
  addGenericItem,
  hideDispalyToast,
  deleteGenericItem,
  ediUserRefAction,
  updateGenericItem,
  displayModalAction,
  hideModalAction,
} = genericSlice.actions;
export default genericSlice.reducer;
