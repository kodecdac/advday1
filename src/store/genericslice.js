import { createSlice } from "@reduxjs/toolkit";

const genericSlice = createSlice({
  name: "genericStore",

  initialState: {
    genericList: [],
  },

  reducers: {
    addGenericItem: (state, action) => {
      state.genericList.unshift(action.payload);
    },
  },
});

export const { addGenericItem } = genericSlice.actions;
export default genericSlice.reducer;
