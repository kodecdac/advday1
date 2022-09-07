import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orderStore",
  initialState: {
    orderList: [],
  },
  reducers: {
    udpateOrderList: (state, action) => {
      state.orderList = action.payload;
    },
  },
});

export const orderListApiAction = () => {
  return async (dispatch) => {
    try {
      const url = `http://localhost:8080/order/`;

      const token = localStorage.getItem("authjwt");
      const config = { headers: { Authorization: `Bearer ${token}` } };

      const response = await axios.get(url, config);
      console.log(response.data);

      dispatch(udpateOrderList(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const { udpateOrderList } = orderSlice.actions;
export default orderSlice.reducer;
