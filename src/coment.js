import React, { useState } from 'react';

const CommentBox = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      <ul data-testid="comment-list">
        {comments.map((comment, index) => (
          <li key={index} data-testid={`comment-item-${index}`}>
            {comment}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        data-testid="comment-input"
      />
      <button onClick={handleAddComment} data-testid="submit-button">
        Adicionar Comentário
      </button>
    </div>
  );
};

export default CommentBox;
