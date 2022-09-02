import { createSlice } from "@reduxjs/toolkit";

//--- Second Slice - Store - Reducer
const secondSlice = createSlice({
  name: "secondStore",

  // DATA MEMBERS
  initialState: {
    counter: 100,
    list: ["calcutta"],
  },

  // MEMBER FUNCTIONS :: ACTIONS
  // REDUCER => SPL FUNCTION with TWO PARAM => STATE, ACTION
  // ACTION => TYPE, PAYLOAD
  reducers: {
    incrmentCounter: (state) => {
      state.counter += 100;
    },
    incrmentCounterByPayload: (state, action) => {
      state.counter += action.payload;
    },
    addItemIntoList: (state) => {
      state.list.unshift("mumbai");
    },
    addItemIntoListWithPayload: (state, action) => {
      state.list.unshift(action.payload);
    },
  },
});

export const {
  incrmentCounter,
  incrmentCounterByPayload,
  addItemIntoList,
  addItemIntoListWithPayload,
} = secondSlice.actions;

export default secondSlice.reducer;
