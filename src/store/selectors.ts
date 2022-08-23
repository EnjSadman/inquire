import { createSelector } from '@reduxjs/toolkit';

export const postSelector = (state : any) => state.counter.posts;
export const postIdSelector = (state : any) => state.counter.selectedPostId;

export const loadPosts = createSelector(([postSelector]), (posts) => {
  return posts;
});

export const loadSinglePost = createSelector(([postIdSelector, postSelector]), (id, posts) => {
  if (id === null) {
    return null;
  }

  return (posts.find((el : any) => el.id === id));
});
