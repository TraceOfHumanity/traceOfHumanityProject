import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenGreetingPopup: false,
  isOpenPleaseRegisterPopup: false,
  isShowLoginPopup: false,
  isShowRegistrationPopup: false,
  isShowResetPasswordPopup: false,
};

const popupsSlice = createSlice({
  name: "popups",
  initialState,
  reducers: {
    setIsOpenGreetingPopup(state, action) {
      state.isOpenGreetingPopup = action.payload;
    },
    setIsOpenPleaseRegisterPopup(state, action) {
      state.isOpenPleaseRegisterPopup = action.payload;
    },
    setIsShowLoginPopup(state, action) {
      state.isShowLoginPopup = action.payload;
    },
    setIsShowRegistrationPopup(state, action) {
      state.isShowRegistrationPopup = action.payload;
    },
    setIsShowResetPasswordPopup(state, action) {
      state.isShowResetPasswordPopup = action.payload;
    },
  },
});

export const {
  setIsOpenGreetingPopup,
  setIsOpenPleaseRegisterPopup,
  setIsShowLoginPopup,
  setIsShowRegistrationPopup,
  setIsShowResetPasswordPopup,
} = popupsSlice.actions;
export default popupsSlice.reducer;
