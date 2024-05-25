import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  creatingCategoryValue: "",
  allCategories: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setCreatingCategoryValue: (state, action) => {
      state.creatingCategoryValue = action.payload;
    },
    setAllCategories: (state, action) => {
      state.allCategories = action.payload;
    },
  },
});

export const {setCreatingCategoryValue, setAllCategories} =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
