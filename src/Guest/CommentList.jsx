import React from 'react';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './CommentList.css';

const CommentList = ({ comments, setComments }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/comments/${id}`);
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="comment-section mt-4">
      <h4 className='text-secondary text-center mb-3'>Comments</h4>
      <TransitionGroup className="comment-list">
        {comments.map((c) => (
          <CSSTransition key={c.id} timeout={500} classNames="fade">
            <div className="comment-card shadow-sm d-flex justify-content-between align-items-center">
              <p className="comment-text mb-0">{c.text}</p>
              <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(c.id)}>
                Delete
              </button>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default CommentList;




// import React from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import './CommentList.css'; // Import CSS animation styles

// const CommentList = ({ comments }) => {
//   return (
//     <div className="comment-section mt-4">
//       <h4 className='text-secondary text-center mb-3'>Comments</h4>
//       {/* <TransitionGroup className="comment-list"> */}
//         {comments.map((c) => (
//           <CSSTransition 
//           key={c.id} timeout={500} classNames="fade">
//             <div className="comment-card shadow-sm">
//               <p className="comment-text">{c.text}</p>
//             </div>
//           </CSSTransition>
//         ))}
//      {/* </TransitionGroup>  */}
//     </div> 
//   );
// };

// export default CommentList;





// import React from 'react';

// const CommentList = ({ comments }) => {
//   return (
//     <div>
//       <h4 className='text-secondary text-center'>Comments</h4>
//       {comments.map((c) => (
//         <div key={c.id}>{c.text}</div>
//       ))}
//     </div>
//   );
// };

// export default CommentList;


