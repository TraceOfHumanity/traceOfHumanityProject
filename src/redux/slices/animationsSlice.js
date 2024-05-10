import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flashingOfTheLoginButton: true,
};

const animationsSlice = createSlice({
  name: "animations",
  initialState,
  reducers: {
    setFlashingOfTheLoginButton(state, action) {
      state.flashingOfTheLoginButton = action.payload;
    },
  },
});

export const { setFlashingOfTheLoginButton } = animationsSlice.actions;
export default animationsSlice.reducer;
