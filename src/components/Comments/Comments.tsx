import React, { useEffect, useState } from 'react';
import { GetFromServer, PutOnServer } from '../../api/requests';
import { Comment } from '../../react-app-env';

interface Props {
  id: number,
}

export const Comments : React.FC<Props> = ({ id }) => {
  const [commentsArray, setCommentArray] = useState<Comment[]>([]);

  const [commentBody, setCommentBody] = useState('');

  useEffect(() => {
    const fetcher = async () => {
      const result = await GetFromServer(`posts/${id}?_embed=comments`);

      setCommentArray(result.comments);
    };

    fetcher();
  }, []);

  return (
    <div className="comments">
      <h1 className="comments__title">Comment section</h1>
      <div className="comments__body">
        {
          commentsArray.map(singleComment => (
            <p className="comments__body--text" key={singleComment.id}>
              {singleComment.body}
            </p>
          ))
        }
        <form
          onSubmit={(event) => {
            event.preventDefault();

            const newComment = {
              postId: id,
              body: commentBody,
            };

            PutOnServer('comments', newComment);

            setCommentArray([...commentsArray, newComment]);
          }}
        >
          <input
            type="text"
            value={commentBody}
            onChange={(event) => {
              setCommentBody(event.target.value);
            }}
          />
          <button type="submit">
            send
          </button>
        </form>
      </div>
    </div>
  );
};
