import { configureStore } from "@reduxjs/toolkit";

import animationsSlice from "./slices/animationsSlice";
import audioPlayerSlice from "./slices/audioPlayerSlice";
import authSlice from "./slices/authSlice";
import loaderSlice from "./slices/loaderSlice";
import popupsSlice from "./slices/popupsSlice";

export const store = configureStore({
  reducer: {
    audioPlayer: audioPlayerSlice,
    auth: authSlice,
    animations: animationsSlice,
    loader: loaderSlice,
    popups: popupsSlice,
  },
});
