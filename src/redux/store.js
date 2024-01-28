import { configureStore } from "@reduxjs/toolkit";

import animationsSlice from "./features/animationsSlice";
import audioPlayerSlice from "./features/audioPlayerSlice";
import authSlice from "./features/authSlice";
import popupsSlice from "./features/popupsSlice";

export const store = configureStore({
  reducer: {
    popups: popupsSlice,
    audioPlayer: audioPlayerSlice,
    animations: animationsSlice,
    auth: authSlice,
  },
});
