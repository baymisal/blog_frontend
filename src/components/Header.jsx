import React from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

function Header() {
  // const { user, logout } = useAuth();

  return (
    <nav className="navbar bg-body-tertiary px-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className="header fw-bold fs-4">Blog Application</span>
        <ul className="nav justify-content-center">
          <li className="nav-item text-center mx-3">
            <Link className="nav-link active d-flex flex-column align-items-center" to="/admin">
              <span style={{ fontSize: "24px" }}>🛡️</span>
              <small>Admin</small>
            </Link>
          </li>
          <li className="nav-item text-center mx-3">
            <Link className="nav-link d-flex flex-column align-items-center" to="/author">
              <span style={{ fontSize: "24px" }}>✒️</span>
              <small>Author</small>
            </Link>
          </li>
          <li className="nav-item text-center mx-3">
            <Link className="nav-link d-flex flex-column align-items-center" to="/guest">
              <span style={{ fontSize: "24px" }}>🕴️</span>
              <small>Guest</small>
            </Link>
          </li>
          {/* {user?.role && (
            <li className="nav-item">
            <button className="btn btn-sm btn-outline-danger ms-3" onClick={logout}>
            Logout
            </button>
            </li> */}
          {/* )} */}
        </ul>
      </div>
    </nav>
  );
}
   

export default Header;



