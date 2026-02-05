import { Link } from 'react-router-dom';

const HomePage = () => (
  <main className="container">
    <section className="hero">
      <img src="/assets/enosh.png.jpg" alt="Enosh Generation logo" className="hero-img" />
      <div className="hero-text">
        <h1>Enosh Generation</h1>
        <p className="slogans">Raising a generation that knows God • Worship • Prayer • Teaching</p>
        <p className="service-times"><strong>Service Times:</strong> Sundays 9:00 AM • Wednesdays 6:00 PM</p>
        <p>
          <Link className="btn" to="/resources">Watch Live</Link>
          <Link className="btn ghost" to="/giving" style={{marginLeft:12}}>Give & Support</Link>
        </p>
      </div>
    </section>

    <section className="quick-links">
      <h2>Explore</h2>
      <div className="grid">
        <Link className="card" to="/ministries">Our Ministries</Link>
        <Link className="card" to="/events">Events</Link>
        <Link className="card" to="/resources">Resources</Link>
        <Link className="card" to="/about">About Us</Link>
      </div>
    </section>
  </main>
);

export default HomePage;
