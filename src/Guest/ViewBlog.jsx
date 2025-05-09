import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';

const ViewBlog = () => {
  const { blogs, setBlogs } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/api/blog`)
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Backend blog response:", data);
        setBlogs(data);
      })
      .catch((err) => console.error(err));
  }, [setBlogs]);

  const handleViewDetails = (blogId) => {
    if (blogId) {
      navigate(`/carddetail/${blogId}`);
    } else {
      console.error("❌ Invalid blog ID:", blogId);
    }
  };

  return (
    <div className='VB-guest'>
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-sm-3 mb-3">
            <div className="hover-card">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">
                    by {blog.author?.username || 'Unknown Author'}
                  </p>
                  <button
                    className='view-details'
                    onClick={() => handleViewDetails(blog.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBlog;

