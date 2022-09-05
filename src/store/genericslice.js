import { createSlice } from "@reduxjs/toolkit";

const genericSlice = createSlice({
  name: "genericStore",

  initialState: {
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

    deleteGenericItem: (state, action) => {
      console.log("About to Delete");
      state.genericList.splice(action.payload.index, 1);
    },

    hideDispalyToast: (state) => {
      state.displayToast = false;
    },
  },
});

export const { addGenericItem, hideDispalyToast, deleteGenericItem } =
  genericSlice.actions;
export default genericSlice.reducer;
