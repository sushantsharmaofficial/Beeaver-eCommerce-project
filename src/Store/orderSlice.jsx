import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    placeOrder: (state, action) => {
      state.push(action.payload);
    },
    cancelOrder: (state, action) => {
      state.splice(action.payload, 1); // Remove the order by index
    },
  },
});

export const { placeOrder, cancelOrder } = orderSlice.actions;
export default orderSlice.reducer;
