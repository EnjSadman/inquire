import { createSelector } from '@reduxjs/toolkit';
import { InitialState } from './counterSlice';

export const postSelector = (state : InitialState) => state.posts;

export const loadPosts = createSelector(([postSelector]), (posts) => {
  return posts;
});
