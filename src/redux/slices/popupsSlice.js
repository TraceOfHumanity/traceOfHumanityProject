import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenGreetingPopup: false,
  isOpenPleaseRegisterPopup: false,
  isLoginPopup: false,
  isRegistrationPopup: false,
  isResetPasswordPopup: false,
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
    setIsLoginPopup(state, action) {
      state.isLoginPopup = action.payload;
    },
    setIsRegistrationPopup(state, action) {
      state.isRegistrationPopup = action.payload;
    },
    setIsResetPasswordPopup(state, action) {
      state.isResetPasswordPopup = action.payload;
    },
  },
});

export const {
  setIsOpenGreetingPopup,
  setIsOpenPleaseRegisterPopup,
  setIsLoginPopup,
  setIsRegistrationPopup,
  setIsResetPasswordPopup,
} = popupsSlice.actions;
export default popupsSlice.reducer;
