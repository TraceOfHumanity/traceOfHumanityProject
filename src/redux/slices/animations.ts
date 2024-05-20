import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flashingOfTheLoginButton: false,
};

const animations = createSlice({
  name: "animations",
  initialState,
  reducers: {
    setFlashingOfTheLoginButton(state, action) {
      state.flashingOfTheLoginButton = action.payload;
    },
  },
});

export const { setFlashingOfTheLoginButton } = animations.actions;
export default animations.reducer;
