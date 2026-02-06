import { Link } from 'react-router-dom';

const HomePage = () => (
  <main className="container">
    <section className="hero">
      <img src="/assets/enosh.png.jpg" alt="Enosh Generation logo" className="hero-img" />
      <div className="hero-text">
        <h1><strong>Welcome to Enosh Generation</strong></h1>
        <h2>Call unto God</h2>
        <p className="slogans">" ....then began men to call upon the name of the Lord."<br />– Genesis 4:26</p>
        <p className="service-times"><strong>Service Times:</strong> Mondays 6:00 PM - 8:00 PM</p>
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
