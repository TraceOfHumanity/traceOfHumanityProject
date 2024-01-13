import { configureStore } from "@reduxjs/toolkit";

import animationsSlice from "./features/animationsSlice";
import audioPlayerSlice from "./features/audioPlayerSlice";
import popupsSlice from "./features/popupsSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    popups: popupsSlice,
    audioPlayer: audioPlayerSlice,
    user: userSlice,
    animations: animationsSlice,
  },
});
