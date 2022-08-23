import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../react-app-env';

export interface InitialState {
  posts: Post[],
  selectedPostId: null | number,
}

const initialState : InitialState = {
  posts: [],
  selectedPostId: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    showPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    selectPost: (state, action: PayloadAction<number>) => {
      state.selectedPostId = action.payload;
    },
  },
});

export const { showPosts } = counterSlice.actions;

export default counterSlice.reducer;
