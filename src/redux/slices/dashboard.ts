import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  creatingCategoryValue: "",
  allCategories: [],
  requestsToCreateArticles: [],
};

const dashboard = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setCreatingCategoryValue: (state, action) => {
      state.creatingCategoryValue = action.payload;
    },
    setAllCategories: (state, action) => {
      state.allCategories = action.payload;
    },
    setRequestsToCreateArticles: (state, action) => {
      state.requestsToCreateArticles = action.payload;
    },
  },
});

export const {
  setCreatingCategoryValue,
  setAllCategories,
  setRequestsToCreateArticles,
} = dashboard.actions;
export default dashboard.reducer;
