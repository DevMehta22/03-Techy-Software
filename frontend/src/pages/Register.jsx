// src/pages/Register.js
import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    custName: '',
    custEmail: '',
    password: '',
    contactNo: ''
  });
  const [successMsg, setSuccessMsg] = useState(null);
  const [errMsg, setErrMsg] = useState(null);

  const handleChange = (e) => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/customer/register', formData);
      console.log(response);
      setSuccessMsg("Successfully Signed Up!");
      setTimeout(() => setSuccessMsg(null), 3000);
      navigate('/login');
    } catch (error) {
      setErrMsg(error.response.data.error || "Registration failed. Please try again.");
      setTimeout(() => setErrMsg(null), 3000);
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="register">
      <div className="register-container">
        <div className="register-header">
          <h2 className="section-title">Create Your Account</h2>
          <p className="section-description">Join us and start using our services</p>
        </div>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="custName">Username</label>
            <input
              type="text"
              id="custName"
              name="custName"
              placeholder="Enter your username"
              value={formData.custName}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="contactNo">Contact No</label>
            <input
              type="number"
              id="contactNo"
              name="contactNo"
              placeholder="Enter your contact number"
              value={formData.contactNo}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Register</button>
        </form>
        {successMsg && <p className="success-message">{successMsg}</p>}
        {errMsg && <p className="error-message">{errMsg}</p>}
        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
