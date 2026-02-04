import React from 'react';
import { Link } from 'react-router-dom';

const ResourcesPage: React.FC = () => (
  <main className="container">
    <h1>Resources</h1>
    <div className="resources-list">
      <a className="resource-item" href="#">Live Services & Links</a>
      <a className="resource-item" href="#">Morning Dew Devotions</a>
      <a className="resource-item" href="#">Divinity Meets Humanity - Travailleurs</a>
      <a className="resource-item" href="#">Enosh Towdah</a>
      <Link className="resource-item" to="/new-converts">New Converts Registration Form</Link>
      <Link className="resource-item" to="/events">Events</Link>
    </div>
  </main>
);

export default ResourcesPage;
