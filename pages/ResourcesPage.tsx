import { Link } from 'react-router-dom';
import { useState } from 'react';

const ResourcesPage = () => {
  const [showLiveServices, setShowLiveServices] = useState(false);

  return (
    <main className="container">
      <h1>Resources</h1>
      <div className="resources-list">
        <div>
          <a className="resource-item" href="#" onClick={(e) => { e.preventDefault(); setShowLiveServices(!showLiveServices); }}>Live Services & Links</a>
          {showLiveServices && (
            <div className="social-links" style={{marginLeft: '20px', marginTop: '10px'}}>
              <a className="resource-item" href="https://www.facebook.com/people/ENOSH-Generation/100091299983773/" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a className="resource-item" href="https://www.instagram.com/enosh.generation/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a className="resource-item" href="https://www.youtube.com/@enosh.generation" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a className="resource-item" href="https://www.tiktok.com/@enosh.generation" target="_blank" rel="noopener noreferrer">TikTok</a>
            </div>
          )}
        </div>
        <a className="resource-item" href="#">Morning Dew Devotions</a>
        <a className="resource-item" href="#">Divinity Meets Humanity - Travailleurs</a>
        <a className="resource-item" href="#">Enosh Towdah</a>
        <Link className="resource-item" to="/new-converts">New Converts Registration Form</Link>
        <Link className="resource-item" to="/events">Events</Link>
      </div>
    </main>
  );
};

export default ResourcesPage;
