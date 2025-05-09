import './Guest.css';
import { Link } from "react-router-dom"; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showRegisterLink, setShowRegisterLink] = useState(true);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const res = await fetch("http://localhost:8000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("role", data.role.toLowerCase());
          login(data.role.toLowerCase());

          alert("Login successful!");

          if (data.role.toLowerCase() === "admin") {
            setShowRegisterLink(false);
            navigate("/admin");
          } else if (data.role.toLowerCase() === "author") {
            setShowRegisterLink(false); 
            navigate("/author");
          } else {
            setShowRegisterLink(true);
            navigate("/viewblog");
          }
        } else {
          setError(data.message || "Login failed");
        }
      } catch (err) {
        console.error("Login Error:", err);
        setError("Server error during login");
      }
    } else {
      setError("Please enter both email and password");
    }
  };

  return (
    <div className='login-guest'>
      <div className="login-container">
        <h2>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className='login-button'>Login</button>
        </form>

        {/* Show register link only for guest */}
        {showRegisterLink && (
          <p style={{ marginTop: "15px" }}>
            Not registered yet? <Link to="/register">Register Here</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;

