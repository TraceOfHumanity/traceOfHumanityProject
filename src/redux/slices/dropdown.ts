import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listCoordinators: {}
};

const dropdown = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    setListCoordinators: (state, action) => {
      state.listCoordinators = action.payload;
    },
  },
});

export const { setListCoordinators } = dropdown.actions;
export default dropdown.reducer;
