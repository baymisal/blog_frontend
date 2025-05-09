import React from 'react'
import { useNavigate } from 'react-router'


const EditAdmin = () => {
   const navigate = useNavigate()

   const gotolist = () => {

       navigate('/admin/viewlist')
   }
  return (
    <div className='Admin-bg-2'>
    <div className="container">
        <div className="row justify-content-center my-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        <h3>EDIT BLOG</h3>
                    </div>
                    <div className="card-body" style={{direction:'flex'}}>
                        <form>
                            <input type="text" placeholder="Title" className="form-control my-2" />
                            <textarea rows={8} placeholder='Description'className='form-control my-2'></textarea>
                            <input type="text" placeholder='Author' className='form-control my-2' />
                            <button type="submit" className="btn-Admin" onClick={gotolist}>Save Blog</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


  )
}

export default EditAdmin