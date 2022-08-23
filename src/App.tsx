import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { GetFromServer } from './api/requests';
import './App.scss';
import { HomePage } from './pages/Homepage';
import { PostCreator } from './pages/PostCreator';
import { Posts } from './pages/Posts';
import { counterSlice } from './store/counterSlice';

export const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetcher = async () => {
      const result = await GetFromServer('posts');

      dispatch(counterSlice.actions.showPosts(result));
    };

    fetcher();
  });

  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/post_creator">Create Post</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post_creator" element={<PostCreator />} />
      </Routes>
    </>
  );
};
