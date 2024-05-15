import { configureStore } from '@reduxjs/toolkit';

import firstSlice from './slices/first';
import audioPlayerSlice from './slices/audioPlayerSlice';
import authSlice from './slices/authSlice';
import animationsSlice from './slices/animationsSlice';
import loaderSlice from './slices/loaderSlice';
import popupsSlice from './slices/popupsSlice';

export const store = configureStore({
  reducer: {
    firstSlice: firstSlice,
    audioPlayer: audioPlayerSlice,
    auth: authSlice,
    animations: animationsSlice,
    loader: loaderSlice,
    popups: popupsSlice,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
