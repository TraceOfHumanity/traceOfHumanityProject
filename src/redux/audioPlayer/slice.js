import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
};

const audioPlayerSlice = createSlice({
  name: "audioPlayer",
  initialState,
  reducers: {
    setIsPlaying(state, action) {
      state.isPlaying = action.payload;
    },
  },
});

export const { setIsPlaying } = audioPlayerSlice.actions;
export default audioPlayerSlice.reducer;
