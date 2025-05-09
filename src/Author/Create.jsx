import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    const payload = {
      title: title.trim(),
      content: content.trim(), 
    };

    console.log('Submitting blog:', payload);

    try {
      await axios.post('http://localhost:8000/api/blog', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert('✅ Blog Created Successfully!');
      navigate('/author/viewlist');
    } catch (error) {
      console.error('❌ Error:', error);
      alert('❌ Failed to create blog. Check input or login.');
    }
  };

  return (
    <div className='bg-author'>
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h3>WRITE BLOG</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={title}
                    placeholder="Title"
                    className="form-control my-2"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                  <textarea
                    value={content}
                    rows={8}
                    placeholder="Content"
                    className="form-control my-2"
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn-author">Create</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
