import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PutOnServer } from '../api/requests';
import { counterSlice } from '../store/counterSlice';
import { loadPosts } from '../store/selectors';

export const PostCreator : React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();
  const posts = useSelector(loadPosts);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const newPost = {
            id: posts[posts.length - 1].id + 1,
            title,
            body,
          };

          dispatch(counterSlice.actions.showPosts([...posts, newPost]));
          PutOnServer('posts', newPost);
        }}
      >
        <input
          type="text"
          placeholder="post title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="post body"
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
        />
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
