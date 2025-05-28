import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config'; // Make sure you have this config file

const CommentForm = ({ blogId, setComments }) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/comments/add`, {
        text,
        userId: 1, // Consider making this dynamic later
        blogId,
      });
      setComments((prev) => [...prev, res.data]);
      setText('');
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        className="form-control mb-2"
        rows="1"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment"
        required
      />
      <button type="submit" className='btn btn-secondary'>Add Comment</button>
    </form>
  );
};

export default CommentForm;





// import React, { useState } from 'react';
// import axios from 'axios';


// const CommentForm = ({ blogId, setComments }) => {
//   const [text, setText] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await axios.post('http://localhost:8000/api/comments/add', {
//       text,
//       userId: 1,
//       blogId,
//     });
//     setComments((prev) => [...prev, res.data]);
//     setText('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-4">
//       <textarea
//         className="form-control mb-2"
//         rows="1"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Add a comment"
//         required
//       />
//       <button type="submit" className='btn btn-secondary'>Add Comment</button>
//     </form>
//   );
// };

// export default CommentForm;





