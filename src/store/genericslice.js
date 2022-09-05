import { createSlice } from "@reduxjs/toolkit";

const genericSlice = createSlice({
  name: "genericStore",

  initialState: {
    editUserRef: undefined,
    editUserIndex: -1,

    displayToast: false,
    genericList: [],
  },

  reducers: {
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
  },
});

export const {
  addGenericItem,
  hideDispalyToast,
  deleteGenericItem,
  ediUserRefAction,
  updateGenericItem,
} = genericSlice.actions;
export default genericSlice.reducer;
