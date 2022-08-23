import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { loadPosts } from '../store/selectors';
import { Post } from '../components/Post/Post';

export const Posts : React.FC = () => {
  const posts = useSelector(loadPosts);

  const [isPostsShown, setPostsShown] = useState(false);

  return (
    <div className="posts__container">
      {
        (isPostsShown)
          ? (
            posts.map((el : any) => (
              <Post key={el.id} id={el.id} title={el.title} body={el.body} />
            ))
          )
          : (
            <>
              <button
                type="button"
                onClick={() => {
                  setPostsShown(true);
                }}
              >
                show me posts
              </button>
              <p>
                There is no posts right now :c
              </p>

            </>
          )
      }
    </div>
  );
};
