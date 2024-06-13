// src/pages/Feedback.js

import React, { useState } from 'react';
import './Feedback.css';
import axios from 'axios';

const Feedback = () => {
  const [formData, setFormData] = useState({
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/feedback/', formData);
      console.log('Feedback submitted:', response.data);
      setFormData({
        email: '',
        feedback: ''
      });
      alert('Thank you for your feedback!');
    } catch (err) {
      console.error('Error submitting feedback:', err);
      alert('Error submitting feedback!');
    }
  };

  return (
    <div className="feedback">
      <h1 className="section-title">We Value Your Feedback</h1>
      <p className="section-description">Please let us know your thoughts, suggestions, or concerns. Your feedback helps us improve our services.</p>
      
      <form className="feedback-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="feedback">Message</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
