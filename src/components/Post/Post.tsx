import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteFromServer, GetFromServer } from '../../api/requests';
import { counterSlice } from '../../store/counterSlice';
import { loadSinglePost } from '../../store/selectors';
import './Post.scss';

interface Props {
  body: string,
  title: string,
  id: number,
}

export const Post : React.FC<Props> = ({ id, title, body }) => {
  const dispatch = useDispatch();

  const selectedPost = useSelector(loadSinglePost);

  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{body}</p>
      <button
        type="button"
        onClick={() => {
          if ((selectedPost === null) || (selectedPost.id !== id)) {
            dispatch(counterSlice.actions.selectPost(id));
          } else {
            dispatch(counterSlice.actions.selectPost(null));
          }
        }}
      >
        { selectedPost
          ? ('Close post')
          : ('Show more')}
      </button>
      <button
        type="button"
        onClick={async () => {
          await DeleteFromServer(id);
          dispatch(
            counterSlice
              .actions
              .showPosts(await GetFromServer('posts')),
          );
        }}
      >
        Delete Post
      </button>
    </div>

  );
};
