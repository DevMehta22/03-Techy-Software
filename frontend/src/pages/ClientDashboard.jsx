import React from 'react';
import './ClientDashboard.css';

const ClientDashboard = () => {
  // Sample data
  const client = {
    name: 'Client',
    company: 'Techy Software Solutions',
    email: 'client.doe@example.com',
    phone: '+9902813231',
    address: '123 Main St, NewYork, United States',
    projects: [
      { id: 1, name: 'Project Alpha', status: 'In Progress', dueDate: '2024-07-15' },
      { id: 2, name: 'Project Beta', status: 'Completed', dueDate: '2024-06-01' },
      { id: 3, name: 'Project Gamma', status: 'Pending', dueDate: '2024-08-20' },
    ],
  };

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Welcome, {client.name}</h1>
        <p>Here’s a summary of your account and projects.</p>
      </header>

      <div className="content">
        {/* Profile Section */}
        <section className="profile-section">
          <h2>Profile Information</h2>
          <div className="profile-card">
            <div className="profile-info">
              <p><strong>Name:</strong> {client.name}</p>
              <p><strong>Company:</strong> {client.company}</p>
              <p><strong>Email:</strong> {client.email}</p>
              <p><strong>Phone:</strong> {client.phone}</p>
              <p><strong>Address:</strong> {client.address}</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section">
          <h2>Projects</h2>
          <div className="projects-list">
            {client.projects.map(project => (
              <div key={project.id} className="project-card">
                <h3>{project.name}</h3>
                <p><strong>Status:</strong> {project.status}</p>
                <p><strong>Due Date:</strong> {project.dueDate}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClientDashboard;
