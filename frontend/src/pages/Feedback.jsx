// src/pages/Feedback.js

import React, { useState } from 'react';
import './Feedback.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Feedback = () => {
  const [formData, setFormData] = useState({
    email: '',
    feedback: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedbackStatus, setFeedbackStatus] = useState({
    message: '',
    type: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await axios.post('http://localhost:4000/api/feedback/', formData);
      console.log('Feedback submitted:', response.data);
      setFeedbackStatus({ message: 'Thank you for your feedback!', type: 'success' });
      setFormData({ email: '', feedback: '' });
    } catch (err) {
      console.error('Error submitting feedback:', err);
      setFeedbackStatus({ message: 'Error submitting feedback. Please try again later.', type: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  const renderFeedbackStatus = () => {
    if (!feedbackStatus.message) return null;
    return (
      <div className={`feedback-status ${feedbackStatus.type}`}>
        <FontAwesomeIcon icon={feedbackStatus.type === 'success' ? faCheckCircle : faTimesCircle} />
        <p>{feedbackStatus.message}</p>
      </div>
    );
  };

  return (
    <div className="back">
      <div className="feedback">
      <h1 className="section-title">We Value Your Feedback</h1>
      <p className="section-description">
        Please let us know your thoughts, suggestions, or concerns. Your feedback helps us improve our services.
      </p>

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

        <button type="submit" className="submit-button" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>

      {renderFeedbackStatus()}
    </div>
    </div>
    
  );
};

export default Feedback;
