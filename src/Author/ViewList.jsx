import './ViewList.css';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';
import { Link} from 'react-router-dom';

const ViewList = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');
  // const navigate = useNavigate();


  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axiosInstance.get('/');
      setBlogs(response.data);
    } catch (error) {
      console.error("❌ Error fetching blogs:", error);
      setError('Failed to load blogs');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/${id}`);
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (error) {
      console.error('❌ Error deleting blog:', error);
    }
  };

  // const handleEdit = (blog) => {
  //   navigate(`/edit/${blog.id}`, { state: blog }); // pass blog data
  // };

  return (
    <div className="container-view">
      <div className="container mt-5">
        <h2 className="text-center mb-4">📜 Blog List</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <div className="table-container p-4 bg-white rounded shadow">
          <table className="table table-hover table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th>#</th>
                <th>Author</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                  <tr key={blog.id}>
                    <td>{index + 1}</td>
                    <td>{blog.author?.username || blog.author || 'Unknown'}</td>
                    <td>{blog.title}</td>
                    <td>{blog.description || blog.content || 'No description'}</td>
                    <td>
                      <Link to={`/edit/${blog.id}`} className="btn btn-secondary btn-sm me-2">
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(blog.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No blogs available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewList;



