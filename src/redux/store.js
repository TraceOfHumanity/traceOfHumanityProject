import { configureStore } from "@reduxjs/toolkit";

import audioPlayerSlice from "./features/audioPlayerSlice";
import popupsSlice from "./features/popupsSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    popups: popupsSlice,
    audioPlayer: audioPlayerSlice,
    user: userSlice,
  },
});
