import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

const loader = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = loader.actions;
export default loader.reducer;
