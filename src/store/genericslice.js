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
        state.displayToast = true;
      } catch (err) {
        console.error(err);
      }
    },

    hideDispalyToast: (state) => {
      state.displayToast = false;
    },
  },
});

export const { addGenericItem, hideDispalyToast } = genericSlice.actions;
export default genericSlice.reducer;
