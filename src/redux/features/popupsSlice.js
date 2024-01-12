import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenGreetingPopup: false,
};

const popupsSlice = createSlice({
  name: "popups",
  initialState,
  reducers: {
    setIsOpenGreetingPopup(state, action) {
      state.isOpenGreetingPopup = action.payload;
    },
  },
});

export const { setIsOpenGreetingPopup } = popupsSlice.actions;
export default popupsSlice.reducer;
