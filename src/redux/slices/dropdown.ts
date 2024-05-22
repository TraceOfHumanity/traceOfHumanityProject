import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  triggerCoordinators: {}
};

const dropdown = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    setTriggerCoordinators: (state, action) => {
      state.triggerCoordinators = action.payload;
    },
  },
});

export const { setTriggerCoordinators } = dropdown.actions;
export default dropdown.reducer;
