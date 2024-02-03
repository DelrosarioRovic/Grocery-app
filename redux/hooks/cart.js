import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardData: [],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      let newAddCart = action.payload.specificProduct;
      let quantity = action.payload.counter;

      const existingItemIndex = state.cardData.findIndex(
        (item) => item.id === newAddCart.id
      );

      if (existingItemIndex !== -1) {
        state.cardData[existingItemIndex].quantity = String(
          parseInt(state.cardData[existingItemIndex].quantity) +
            parseInt(quantity)
        );
      } else {
        newAddCart.quantity = quantity;
        state.cardData = [...state.cardData, newAddCart];
      }
    },
    addQuantity: (state, action) => {
      const productId = action.payload;
      const existingItemIndex = state.cardData.findIndex(
        (item) => item.id === productId
      );

      if (existingItemIndex !== -1) {
        state.cardData[existingItemIndex].quantity = String(
          parseInt(state.cardData[existingItemIndex].quantity) + 1
        );
      }
    },

    reduceQuantity: (state, action) => {
      const productId = action.payload;
      const existingItemIndex = state.cardData.findIndex(
        (item) => item.id === productId
      );

      if (existingItemIndex !== -1) {
        let newQuantity =
          parseInt(state.cardData[existingItemIndex].quantity) - 1;

        state.cardData[existingItemIndex].quantity =
          newQuantity <= 0 ? "1" : String(newQuantity);
      }
    },
  },
});

export const { addCart, addQuantity, reduceQuantity } = cart.actions;

export default cart.reducer;
