import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

const initialState = {
  isLoggedIn: false,
  email: null,
  userName: null,
  userId: null,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      const { email, userName, userId } = action.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.userName = userName;
      state.userId = userId;
    },
    REMOVE_ACTIVE_USER: (state) => {
      state.isLoggedIn = false;
      state.email = null;
      state.userName = null;
      state.userId = null;
    },
  },
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = auth.actions;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectEmail = (state: RootState) => state.auth.email;
export const selectUserName = (state: RootState) => state.auth.userName;
export const selectUserId = (state: RootState) => state.auth.userId;

export default auth.reducer;
