// src/pages/Services.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faUser, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/services');
      setServices(response.data.services);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const getImageUrl = (filepath) => {
    // Assuming your server serves images from the 'uploads' directory
    return `http://localhost:4000/${filepath}`;
  };

  return (
    <div className="services">
      <h1 className="section-title">Our Services</h1>
      <p className="section-description">Discover our range of software development services tailored for your business needs.</p>

      <div className="service-grid">
        {services.map((service) => (
          <div key={service._id} className="service-card">
            <img src={getImageUrl(service.filepath)} alt={service.serviceName} className="service-image" />
            <div className="service-header">
              <h3 className="service-name">{service.serviceName}</h3>
              <div className="service-icons">
                <FontAwesomeIcon icon={faDollarSign} className="icon" />
                <FontAwesomeIcon icon={faUser} className="icon" />
              </div>
            </div>
            <p className="service-description">{service.description}</p>
            <div className="service-meta">
              <div className="meta-item">
                <FontAwesomeIcon icon={faDollarSign} className="meta-icon" />
                <span className="meta-text">${service.price}</span>
              </div>
              <div className="meta-item">
                <FontAwesomeIcon icon={faUser} className="meta-icon" />
                <span className="meta-text">{service.contactPersonName}</span>
              </div>
              <div className="meta-item">
                <FontAwesomeIcon icon={faInfoCircle} className="meta-icon" />
                <span className="meta-text">{service.contactNo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
