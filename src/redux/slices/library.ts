import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  postsPerLoad: 3,
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
  },
});

export const {setPosts, setLastPost} = library.actions;
export default library.reducer;
