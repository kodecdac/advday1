import { configureStore } from "@reduxjs/toolkit";
import firstsliceReducer from "./firstslice";
import secondSliceReducer from "./secondslice";
import genericSliceReducer from "./genericslice";
import asyncSliceReducer from "./asyncslice";

// this will give us STORE / GLOBAL STATE
export default configureStore({
  reducer: {
    firstStore: firstsliceReducer,
    secondStore: secondSliceReducer,
    genericStore: genericSliceReducer,
    asyncStore: asyncSliceReducer,
  },
});
