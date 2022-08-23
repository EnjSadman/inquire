import React from 'react';
import { useDispatch } from 'react-redux';
import { counterSlice } from '../../store/counterSlice';
import './Post.scss';

interface Props {
  body: string,
  title: string,
  id: number,
}

export const Post : React.FC<Props> = ({ id, title, body }) => {
  const dispatch = useDispatch();

  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{body}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(counterSlice.actions.selectPost(id));
        }}
      >
        Show more
      </button>
    </div>

  );
};
