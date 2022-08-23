import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetFromServer } from './api/requests';
import './App.scss';
import { counterSlice } from './store/counterSlice';
import { loadPosts } from './store/selectors';
import store from './store/store';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const post = loadPosts(store.getState().counter);

  useEffect(() => {
    const fetcher = async () => {
      const result = await GetFromServer('posts');

      dispatch(counterSlice.actions.showPosts(result));
    };

    fetcher();
  }, []);

  return (
    <div className="posts__container">
      {
        (post)
          ? (123)
          : (
            <p>
              There is no posts right now :c
            </p>
          )
      }
    </div>
  );
};
