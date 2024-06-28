import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isOpenGreetingPopup: false,
  isOpenPleaseRegisterPopup: false,
  isLoginPopup: false,
  isRegistrationPopup: false,
  isResetPasswordPopup: false,
  isRequestToCreateArticleSentPopup: false,
  isDeletePostConfirmationPopup: false,
  isAcceptRequestAPostPopup: false,
  isCreateCategoryPopup: false,
  createCategoryPopupCoordinates: {},
};

const popups = createSlice({
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
    setIsRequestToCreateArticleSentPopup(state, action) {
      state.isRequestToCreateArticleSentPopup = action.payload;
    },
    setIsDeletePostConfirmationPopup(state, action) {
      state.isDeletePostConfirmationPopup = action.payload;
    },
    setIsAcceptRequestAPostPopup(state, action) {
      state.isAcceptRequestAPostPopup = action.payload;
    },
    setIsCreateCategoryPopup(state, action) {
      state.isCreateCategoryPopup = action.payload;
    },
    setCreateCategoryPopupCoordinates(state, action) {
      state.createCategoryPopupCoordinates = action.payload;
    },
  },
});

export const {
  setIsOpenGreetingPopup,
  setIsOpenPleaseRegisterPopup,
  setIsLoginPopup,
  setIsRegistrationPopup,
  setIsResetPasswordPopup,
  setIsRequestToCreateArticleSentPopup,
  setIsDeletePostConfirmationPopup,
  setIsAcceptRequestAPostPopup,
  setIsCreateCategoryPopup,
  setCreateCategoryPopupCoordinates,
} = popups.actions;
export default popups.reducer;
