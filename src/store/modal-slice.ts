import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Modal = {
  key: string;
  isOpen: boolean;
};

const initialState: Modal = {
  isOpen: false,
  key: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<string>) {
      state.isOpen = true;
      state.key = action.payload;
      document.body.style.overflow = "hidden";
    },
    closeModal(state) {
      state.isOpen = false;
      document.body.style.overflow = "visible";
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;
