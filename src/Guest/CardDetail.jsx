import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const CardDetail = () => {
  const { id } = useParams();
  const { blogs } = useGlobalContext();
  const [comments, setComments] = useState([]);

  const blog = blogs.find((b) => String(b.id) === id);


  useEffect(() => {
    axios.get(`http://localhost:8000/api/comments/blog/${id}`).then((res) => {
      setComments(res.data);
    });
  }, [id]);

  if (!blog) return <p>No blog detail available.</p>;

  return (
    <div className='cards-detail'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header-1">
                <h2>Title: {blog.title}</h2>
              </div>
              <div className="card-body">
                <h4><strong>Content:</strong></h4>
                <h5>{blog.content}</h5>
                <hr />
                <h5><strong>Author:</strong> {blog.author?.username || 'Unknown Author'}</h5>
                <hr />
                <CommentForm blogId={id} setComments={setComments} />
                <hr />
                <CommentList blogId={id} comments={comments} setComments={setComments} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;


