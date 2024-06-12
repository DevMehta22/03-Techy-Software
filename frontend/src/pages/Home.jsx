// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => (
  <div className="home">
    <section className="hero">
      <div className="hero-text">
        <h1>Welcome to Techy Software</h1>
        <p>We offer the best software solutions for your business.</p>
        <button>Get Started</button>
      </div>
    </section>

    <section className="features">
      <h2>Our Features</h2>
      <div className="feature-list">
        <div className="feature-item">
          <div className="feature-icon">🚀</div>
          <h3>Feature One</h3>
          <p>Advanced analytics to drive your business forward.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔗</div>
          <h3>Feature Two</h3>
          <p>Seamless integration with your existing systems.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔒</div>
          <h3>Feature Three</h3>
          <p>Robust security to protect your data.</p>
        </div>
      </div>
    </section>

    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        <blockquote>
          <p>“Techy Software has revolutionized our workflow!”</p>
          <cite>— Jane Doe, CEO of ExampleCorp</cite>
        </blockquote>
        <blockquote>
          <p>“Their solutions are both innovative and reliable.”</p>
          <cite>— John Smith, CTO of InnovateTech</cite>
        </blockquote>
      </div>
    </section>

    <section className="cta">
      <h2>Ready to Transform Your Business?</h2>
      <button>Contact Us</button>
    </section>
  </div>
);

export default Home;
