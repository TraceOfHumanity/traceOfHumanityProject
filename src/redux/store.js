import { configureStore } from "@reduxjs/toolkit";

import audioPlayerSlice from "./audioPlayer/audioPlayerSlice";
import popupsSlice from "./popups/popupsSlice";

export const store = configureStore({
  reducer: {
    popups: popupsSlice,
    audioPlayer: audioPlayerSlice,
  },
});
