import {createSlice} from "@reduxjs/toolkit";

interface CreatePostState {
  title: string;
  description: string;
  imageUrl: string;
  categories: string[];
  isUpdatingPost: boolean;
}

const initialState: CreatePostState = {
  title: "",
  description: "",
  imageUrl: "",
  categories: [],
  isUpdatingPost: false,
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
    setIsUpdatingPost: (state, action) => {
      state.isUpdatingPost = action.payload;
    },
  },
});

export const {
  setTitle,
  setDescription,
  setImageUrl,
  setCategories,
  setIsUpdatingPost,
} = createPostSlice.actions;
export default createPostSlice.reducer;
