// src/pages/Register.js
import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    custName: '',
    custEmail: '',
    password: '',
    contactNo:''
  });
  const [successMsg, setsuccessMsg] = useState(null);
  const [errMsg, seterrMsg] = useState(null);

  const handleChange = (e) => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/api/customer/register',formData)
    .then((response) => {
      console.log(response);
      setsuccessMsg("Successfully Signed Up!");
      setTimeout(() => {
        setsuccessMsg(null);
      }, 3000)
    })
    .catch((error) => {
      seterrMsg(error.response.data.error);
      setTimeout(() => {
        seterrMsg(null);
      }, 3000);
      console.error("Signup error:", error);
    }); 
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="custName"
          placeholder="Username"
          value={formData.custName}
          onChange={handleChange}
          required
        />
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
        <input
          type="number"
          name="contactNo"
          placeholder="Contact No"
          value={formData.contactNo}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      {successMsg && <div className="success-message">{successMsg}</div>}
        {errMsg && <div className="error-message">{errMsg}</div>}
        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
    </div>
  );
};

export default Register;
