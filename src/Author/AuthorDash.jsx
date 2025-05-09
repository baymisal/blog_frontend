import React from 'react';
import './Author.css'
import { useNavigate } from 'react-router';
import { useGlobalContext } from '../context/GlobalContext'; 

const AuthorDash = () => {
  const navigate = useNavigate();
  const { blogs } = useGlobalContext(); 

  const handleAuthorCreate = () => {
    navigate('/author/createblog');
  };

  const handleViewBlog = () => {
    navigate('/author/viewlist');
  };

  const handleViewComment = (blogId) => {
    navigate(`/author/viewcomments/${blogId}`);
  };

  const handleLogout = () => {

    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');


    navigate('/');
  };
  return (
    <>
              <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '200px', backgroundColor: 'white', color: '#fff', padding: '20px' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li>
              <button className='b' style={buttonStyle} onClick={handleAuthorCreate}>
                📝 Create Blog
              </button>

              <button className='b' style={buttonStyle} onClick={handleViewBlog}>
                📃 List Blog
              </button>

              <button className='b' style={buttonStyle} onClick={handleLogout}>
                👤 LogOut
              </button>
            </li>
          </ul>
          {blogs.length === 0 ? (
            <p className='text-dark'>No blogs available</p>
          ) : (
            blogs.map((blog) => (
              <div key={blog.id}>
                <h6 className='text-dark'>{blog.title}</h6>
                <button style={smallBtnStyle} onClick={() => handleViewComment(blog.id)}>
                  💬 View Comments
                </button>
              </div>
            ))
          )}
        </div>
        <div className='bg' style={{ flex: 1, padding: '5px', height: "100vh", backgroundColor: 'purple' }}>
                <h4><em>This is the Author's section</em></h4>
            </div>
       </div> 
    </>
  );
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: 'purple',
  color: 'white ',
  marginBottom: '10px',
  borderRadius: '8px',
};

const smallBtnStyle = {
  padding: '5px 10px',
  backgroundColor: 'purple',
  color: 'black',
  border: 'none',
  borderRadius: '6px',
  marginTop: '5px',
};

export default AuthorDash;







// import React from 'react'
// import { useNavigate } from 'react-router'

// const AuthorDash = () => {

//   const navigate = useNavigate();

//   const handleAuthorCreate = () => {

//     navigate ('/author/createblog');
//   }
//   const handleviewblog = () => {

//     navigate ('/author/viewlist');
//   }
//   const handleviewcomment = () => {

//     navigate (`/author/viewcomments/${blogId}`);
//   }
//   const handleprofile = () => {

//     navigate ('/author/profilesettings');
//   }

//   return (
// <>
//  <div style={{ display: 'flex', height: '100vh' }}>
          
//    <div style={{ width: '200px', backgroundColor: 'white', color: '#fff', padding: '20px' }}>
//       <ul style={{ listStyle: 'none', padding: 0 }}>           
//       <br />                 
//       <br />                 
//       <li>
//           <button className='b' style={{ width: '100%', padding: '10px',backgroundColor:'purple',color:'white',
//                marginBottom: '10px', borderRadius:"8px" }} onClick={handleAuthorCreate}> 📝 Create Blog</button>

//           <button className='b' style={{ width: '100%', padding: '10px',backgroundColor:'purple',color:'white',
//                marginBottom: '10px', borderRadius:"8px" }} onClick={handleviewblog}> 📃 List Blog</button>
//                <br />
//                {blogs.map((blog) => (
//   <div key={blog.id}>
//     <h3>{blog.title}</h3>
//     <button onClick={() => handleviewcomment(blog.id)}>View Comments</button>
//   </div>
// ))} 
//                <br />
//           <button className='b' style={{ width: '100%', padding: '10px',backgroundColor:'purple',color:'white',
//                marginBottom: '10px', borderRadius:"8px" }} onClick={handleprofile}> 👤 Profile Settings</button>
                      
//       </li>
//       </ul>
//  </div>

//             <div className='bg-l' style={{ flex: 1, padding: '5px', height:"100vh", backgroundColor:'purple',color:'white' }}>
//                 <h4><em>this is author section</em></h4>
//                 {/* <Outlet /> */}
//             </div>
//         </div>

// </>
//   )
// }

// export default AuthorDash