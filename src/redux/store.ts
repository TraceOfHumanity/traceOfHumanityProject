import {configureStore} from "@reduxjs/toolkit";

import animations from "./slices/animations";
import audioPlayerSlice from "./slices/audioPlayer";
import auth from "./slices/auth";
import createPost from "./slices/createPost";
import loader from "./slices/loader";
import popupsSlice from "./slices/popupsSlice";
import dropdown from "./slices/dropdown";

export const store = configureStore({
  reducer: {
    animations,
    audioPlayer: audioPlayerSlice,
    auth,
    dropdown,
    loader,
    popups: popupsSlice,
    createPost,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
