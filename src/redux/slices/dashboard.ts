import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  creatingCategoryValue: "",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setCreatingCategoryValue: (state, action) => {
      state.creatingCategoryValue = action.payload;
    },
  },
});

export const {setCreatingCategoryValue} = dashboardSlice.actions;
export default dashboardSlice.reducer;
