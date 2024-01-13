import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenGreetingPopup: false,
  isOpenPleaseRegisterPopup: false,
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
  },
});

export const { setIsOpenGreetingPopup, setIsOpenPleaseRegisterPopup } =
  popupsSlice.actions;
export default popupsSlice.reducer;
