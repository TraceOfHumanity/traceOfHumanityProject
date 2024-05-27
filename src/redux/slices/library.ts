import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  postsPerLoad: 5,
  lastPost: null,
};

const library = createSlice({
  name: "library",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const {} = library.actions;
export default library.reducer;
