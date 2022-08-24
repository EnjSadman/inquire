import { createSelector } from '@reduxjs/toolkit';
import { PostDataType } from '../react-app-env';

export const postSelector = (state : any) => state.counter.posts;
export const postIdSelector = (state : any) => state.counter.selectedPostId;

export const loadPosts = createSelector(([postSelector]), (posts) => {
  return posts;
});

export const loadSinglePost = createSelector(([postIdSelector, postSelector]), (id, posts) => {
  if (id === null) {
    return null;
  }

  return (posts.find((el : PostDataType) => el.id === id));
});
