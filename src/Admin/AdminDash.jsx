import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import ViewList from '../Author/ViewList';
const AdminDash = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem("role"); 


    useEffect(() => {
        if (role !== "admin") {
            console.log("⛔ Access Denied! Redirecting to /guest...");
            navigate("/guest", { replace: true }); 
        }
    }, [role, navigate]);

    const handleRead = () => {
        navigate('/admin/viewlist');
    };

    const handleLogout = () => {
        // Clear user-related data from localStorage
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    
        // Navigate to the home page
        navigate('/');
      };
   

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '200px', backgroundColor: 'burlywood', color: '#fff', padding: '20px' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li>
                        <button className='bg-light' style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: "8px" }} onClick={handleRead}> 📃 Blog List</button>
                        <br />
                        {/* <button className='bg-light' style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: "8px" }}> 📊 View Reports</button> */}
                        {/* <br /> */}
                        {/* <button className='bg-light' style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: "8px" }}> ⚙️ Admin Settings</button> */}
                        {/* <br /> */}
                        <button className='bg-light' style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: "8px" }} onClick={handleLogout}> ➡️- Logout </button>
                    </li>
                </ul>
            </div>
            <div className='bg' style={{ flex: 1, padding: '5px', height: "100vh", backgroundColor: 'beige' }}>
                <h4><em>This is the Admin's section</em></h4>
            </div>
        </div>
    );
};

export default AdminDash;


