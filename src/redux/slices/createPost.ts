import {createSlice} from "@reduxjs/toolkit";

interface CreatePostState {
  title: string;
  description: string;
  imageUrl: string;
  categories: string[];
}

const initialState: CreatePostState = {
  title: "",
  description: "",
  imageUrl: "",
  categories: [],
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
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const {setTitle, setDescription, setImageUrl, setCategories} =
  createPostSlice.actions;
export default createPostSlice.reducer;
