// src/pages/About.js
import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faHistory, faUsers } from '@fortawesome/free-solid-svg-icons';

const About = () => (
  <div className="about">
    <section className="about-hero">
      <h1>About Us</h1>
      <p>We are a tech-driven software company committed to delivering cutting-edge solutions that transform businesses.</p>
    </section>

    <section className="about-mission">
      <div className="about-content">
        <FontAwesomeIcon icon={faBullseye} className="about-icon" />
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>To empower businesses through innovative technology and outstanding customer service.</p>
        </div>
      </div>
    </section>

    <section className="about-history">
      <div className="about-content">
        <FontAwesomeIcon icon={faHistory} className="about-icon" />
        <div className="about-text">
          <h2>Our History</h2>
          <p>Founded in 2010, our company has grown from a small startup to a leading provider of enterprise software solutions, serving clients worldwide.</p>
        </div>
      </div>
    </section>

    <section className="about-team">
      <div className="about-content">
        <FontAwesomeIcon icon={faUsers} className="about-icon" />
        <div className="about-text">
          <h2>Our Team</h2>
          <p>Our team consists of highly skilled professionals with a passion for technology and innovation.</p>
        </div>
      </div>
    </section>
  </div>
);

export default About;
