// src/pages/ContactUs.js

import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="contact-us">
      <div className="contact-info">
        <h1 className="section-title">Contact Us</h1>
        <div className="contact-details">
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <h3>Location</h3>
            <p>123 Main Street, NewYork, United States</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <h3>Phone</h3>
            <p>+1 234 567 890</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <h3>Email</h3>
            <p>techysolutions@gmail.com</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faClock} className="icon" />
            <h3>Hours</h3>
            <p>Monday - Friday: 9 AM - 5 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
