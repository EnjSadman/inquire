import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostDataType } from '../react-app-env';

export interface InitialState {
  posts: PostDataType[],
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
    showPosts: (state, action: PayloadAction<PostDataType[]>) => {
      state.posts = action.payload;
    },
    selectPost: (state, action: PayloadAction<number | null>) => {
      state.selectedPostId = action.payload;
    },
  },
});

export const { showPosts } = counterSlice.actions;

export default counterSlice.reducer;
