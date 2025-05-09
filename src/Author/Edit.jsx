import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

const Edit = () => {
  const { blogId } = useParams();  
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: '',
    content: '',
    author: ''
  });


  useEffect(() => {
    axiosInstance.get(`/${blogId}`)
      .then((res) => {
        setBlog({
          title: res.data.title || '',
          content: res.data.content || '',
          author: res.data.author || ''
        });
      })
      .catch((err) => {
        console.error('❌ Error fetching blog:', err);
        alert('Failed to load blog. Try again.');
      });
  }, [blogId]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axiosInstance.put(`/${blogId}`, blog)
      .then(() => {
        alert('✅ Blog Updated Successfully');
        navigate('/author/viewlist')
      })
      .catch((err) => {
        console.error('❌ Error updating blog:', err);
        alert('You are not authorized or not logged in.');
      });
  };

  return (
    <div className='bg-author'>
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h3>EDIT BLOG</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleUpdate}>
                  <input
                    type="text"
                    placeholder="Title"
                    className="form-control my-2"
                    value={blog.title}
                    onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                    required
                  />
                  <textarea
                    rows={8}
                    placeholder='Description'
                    className='form-control my-2'
                    value={blog.content}
                    onChange={(e) => setBlog({ ...blog, content: e.target.value })}
                    required
                  ></textarea>
                  <button type="submit" className="btn-author">Update Blog</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;










