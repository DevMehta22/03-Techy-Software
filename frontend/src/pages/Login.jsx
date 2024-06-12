// src/pages/Login.js
import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    custEmail: '',
    password: ''
  });
  const [errmsg, seterrmsg] = useState(null);
  const handleChange = (e) => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/api/customer/login',formData)
    .then((response) => {
      console.log(response);
      navigate('/')
    })
    .catch((error) => {
      console.error("Login error:", error);
      seterrmsg("Invalid Credentials");
      setTimeout(() => {
        seterrmsg(null);
      }, 3000);
    });

  console.log("Form submitted:", formData);
    
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="custEmail"
          placeholder="Email"
          value={formData.custEmail}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      {errmsg && <p className="error-message">{errmsg}</p>}
        <p className="signup-link">
          Don't have an account? <a href="/register">Register here</a>
        </p>
    </div>
  );
};

export default Login;
