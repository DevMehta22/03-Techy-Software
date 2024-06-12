// src/pages/About.js
import React from 'react';
import './About.css';


const About = () => (
  <div className="about">
    <section className="about-hero">
      <h1>About Us</h1>
      <p>We are a tech-driven software company committed to delivering cutting-edge solutions that transform businesses.</p>
    </section>

    <section className="about-mission">
      <h2>Our Mission</h2>
      <p>To empower businesses through innovative technology and outstanding customer service.</p>
    </section>

    <section className="about-history">
      <h2>Our History</h2>
      <p>Founded in 2010, our company has grown from a small startup to a leading provider of enterprise software solutions, serving clients worldwide.</p>
    </section>

    <section className="about-team">
      <h2>Our Team</h2>
      <p>Our team consists of highly skilled professionals with a passion for technology and innovation.</p>
    </section>
  </div>
);

export default About;
