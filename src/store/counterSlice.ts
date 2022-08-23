import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../react-app-env';

export interface InitialState {
  posts: Post[],
}

const initialState : InitialState = {
  posts: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    showPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { showPosts } = counterSlice.actions;

export default counterSlice.reducer;
