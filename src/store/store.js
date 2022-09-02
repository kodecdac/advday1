import { configureStore } from "@reduxjs/toolkit";
import firstsliceReducer from "./firstslice";
import secondSliceReducer from "./secondslice";

// this will give us STORE / GLOBAL STATE
export default configureStore({
  reducer: { firstStore: firstsliceReducer, secondStore: secondSliceReducer },
});
