import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewComment = () => {
  const { blogId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/comments/blog/${blogId}`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.error('Error fetching comments:', err);
      });
  }, [blogId]);

  return (
    <div style={{
      maxWidth: '800px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ marginBottom: '20px', color: '#444' }}>💬 Comments for Blog ID: {blogId}</h2>

      {comments.length === 0 ? (
        <p style={{ color: '#888' }}>No comments available for this blog.</p>
      ) : (
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {comments.map((comment) => (
            <div
              key={comment.id}
              style={{
                background: '#f9f9f9',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '15px',
                borderLeft: '4px solid #7e57c2'
              }}
            >
              <strong style={{ color: '#333' }}>
                {comment.user?.username || 'Author'}
              </strong>
              <p style={{ marginTop: '5px', color: '#555' }}>{comment.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewComment;
