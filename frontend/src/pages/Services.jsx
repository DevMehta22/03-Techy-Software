// src/pages/Services.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/services');
      setServices(response.data.services); // Assuming response.data.services is the array of services
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  return (
    <div className="services">
      <h1>Our Services</h1>
      <p className="services-intro">Discover our range of software development services tailored for your business needs.</p>

      <ul className="service-list">
        {services.map((service) => (
          <li key={service._id} className="service-item">
            <div className="service-details">
              <h3>{service.serviceName}</h3>
              <p>{service.description}</p>
              <div className="service-meta">
                <p><strong>Price:</strong> ${service.price}</p>
                <p><strong>Contact:</strong> {service.contactPersonName} - {service.contactNo}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
