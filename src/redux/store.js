import { configureStore } from "@reduxjs/toolkit";

import popupsSlice from "./popups/slice";
import audioPlayerSlice from "./audioPlayer/slice";

export const store = configureStore({
  reducer: {
    popups: popupsSlice,
    audioPlayer: audioPlayerSlice,
  },
});
