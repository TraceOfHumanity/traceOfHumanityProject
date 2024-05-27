import {configureStore} from "@reduxjs/toolkit";

import animations from "./slices/animations";
import audioPlayerSlice from "./slices/audioPlayer";
import auth from "./slices/auth";
import createPost from "./slices/createPost";
import dashboard from "./slices/dashboard";
import dropdown from "./slices/dropdown";
import library from "./slices/library";
import loader from "./slices/loader";
import popupsSlice from "./slices/popupsSlice";

export const store = configureStore({
  reducer: {
    animations,
    audioPlayer: audioPlayerSlice,
    auth,
    dashboard,
    dropdown,
    loader,
    popups: popupsSlice,
    createPost,
    library,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
