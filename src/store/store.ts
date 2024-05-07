import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";
import { modalSlice } from "./modal-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    modal: modalSlice.reducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
