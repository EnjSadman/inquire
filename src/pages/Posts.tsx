import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { loadPosts, loadSinglePost } from '../store/selectors';
import { Post } from '../components/Post/Post';
import { PostDataType } from '../react-app-env';
import { Comments } from '../components/Comments/Comments';

export const Posts : React.FC = () => {
  const posts = useSelector(loadPosts);
  const selectedPost = useSelector(loadSinglePost);

  const [isPostsShown, setPostsShown] = useState(false);

  return (
    <div className="posts__container">
      {
        (isPostsShown)
          ? (
            (selectedPost === null)
              ? (
                posts.map((el : PostDataType) => (
                  <Post key={el.id} id={el.id} title={el.title} body={el.body} />
                ))
              )
              : (
                <>
                  <Post
                    key={selectedPost.id}
                    id={selectedPost.id}
                    title={selectedPost.title}
                    body={selectedPost.body}
                  />
                  <Comments id={selectedPost.id} />

                </>
              )
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
