import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  imageUrl: "",
  category: "",
};

const createPostSlice = createSlice({
  name: "createPost",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const {setTitle, setDescription, setImageUrl, setCategory} =
  createPostSlice.actions;
export default createPostSlice.reducer;
