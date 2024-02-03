import { configureStore } from "@reduxjs/toolkit";
import cart from "./hooks/cart";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart,
    },
  });
};
