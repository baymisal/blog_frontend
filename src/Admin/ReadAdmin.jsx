import React from 'react'
import { useNavigate } from 'react-router-dom'


const ReadAdmin = () => {
    const navigate = useNavigate();

    const handleEdit = () => {
      navigate('/admin/editadmin');
    };
 
  return (
    <div className='Admin-bg'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header-1">
                            <h2>Read Blog (blog title)</h2>
                        </div>
                        <div className="card-body">
                           <h5>here is blog (blog title) </h5>
                           <p>description (blog description) </p>
                           <button className='btn-Admin' onClick={handleEdit}>Edit Blog</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReadAdmin


// Not Important