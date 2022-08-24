import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteFromServer, GetFromServer, UpdateOnServer } from '../../api/requests';
import { counterSlice } from '../../store/counterSlice';
import { loadSinglePost } from '../../store/selectors';
import './Post.scss';

interface Props {
  body: string,
  title: string,
  id: number,
}

export const Post : React.FC<Props> = ({ id, title = '', body = '' }) => {
  const dispatch = useDispatch();

  const [redactingPost, setRedactingPost] = useState(false);
  const [redactedTitle, setRedactedTitle] = useState(title);
  const [redactedBody, setRedactedBody] = useState(body);

  const selectedPost = useSelector(loadSinglePost);

  return (
    <div className="post">
      {!redactingPost && (
        <>
          <h1>{title}</h1>
          <p>{body}</p>
          <button
            type="button"
            onClick={() => {
              setRedactingPost(true);
            }}
          >
            redact post
          </button>
        </>
      )}
      {
        redactingPost && (
          <>
            <input
              type="text"
              value={redactedTitle}
              onChange={(event) => setRedactedTitle(event.target.value)}
            />
            <textarea
              value={redactedBody}
              rows={15}
              onChange={(event) => setRedactedBody(event.target.value)}
            />
            <button
              type="button"
              onClick={async () => {
                const postToUpdate = {
                  id,
                  title: redactedTitle,
                  body: redactedBody,
                };

                await UpdateOnServer(postToUpdate);

                const result = await GetFromServer('posts');

                dispatch(counterSlice.actions.showPosts(result));

                setRedactingPost(false);
              }}
            >
              submit changes
            </button>
          </>
        )
      }
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
