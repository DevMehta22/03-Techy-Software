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
  const [errMsg, setErrMsg] = useState(null);

  const handleChange = (e) => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/customer/login', formData);
      console.log(response);
      navigate('/');
    } catch (error) {
      console.error("Login error:", error);
      setErrMsg("Invalid Credentials");
      setTimeout(() => setErrMsg(null), 3000);
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <h2 className="section-title">Welcome Back</h2>
          <p className="section-description">Log in to your account to continue</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="custEmail">Email</label>
            <input
              type="email"
              id="custEmail"
              name="custEmail"
              placeholder="Enter your email"
              value={formData.custEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
        {errMsg && <p className="error-message">{errMsg}</p>}
        <p className="forgot-password">
          <a href="/forgot-password">Forgot your password?</a>
        </p>
        <p className="signup-link">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
