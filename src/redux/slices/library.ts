import {createSlice} from "@reduxjs/toolkit";

interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  likes: number;
  views: number;
  categories: string[];
}

const initialState = {
  posts: [],
  postsPerLoad: 5,
  hasMorePosts: true,
  lastPost: null,
  selectedCategory: "",
  selectedPost: null as Post | null,
};

const library = createSlice({
  name: "library",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostsPerLoad: (state, action) => {
      state.postsPerLoad = action.payload;
    },
    setLastPost: (state, action) => {
      state.lastPost = action.payload;
    },
    setHasMorePosts: (state, action) => {
      state.hasMorePosts = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
  },
});

export const {
  setPosts,
  setLastPost,
  setHasMorePosts,
  setSelectedCategory,
  setSelectedPost,
} = library.actions;
export default library.reducer;
