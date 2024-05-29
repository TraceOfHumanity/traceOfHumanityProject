import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  postsPerLoad: 5,
  hasMorePosts: true,
  lastPost: null,
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
  },
});

export const {setPosts, setLastPost, setHasMorePosts} = library.actions;
export default library.reducer;
