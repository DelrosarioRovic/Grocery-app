import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardData: [],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { addCart } = cart.actions;

export default cart.reducer;
