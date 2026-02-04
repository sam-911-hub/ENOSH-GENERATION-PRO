import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './css/styles.css';

const Header: React.FC = () => (
  <header className="site-header">
    <div className="container header-inner">
      <a className="brand" href="#/">Enosh Generation</a>
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/ministries">Ministries</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/giving">Giving</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  </header>
);

const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="container">
      <p>© Enosh Generation</p>
      <p className="muted">info@enosh.org • +123 456 7890</p>
    </div>
  </footer>
);

const HomePage: React.FC = () => (
  <main className="container">
    <section className="hero">
      <img src="assets/images/enosh.jpg" alt="Enosh" className="hero-img" />
      <div className="hero-text">
        <h1>Enosh Generation</h1>
        <p className="slogans">Raising a generation that knows God • Worship • Prayer • Teaching</p>
        <p className="service-times"><strong>Service Times:</strong> Sundays 9:00 AM • Wednesdays 6:00 PM</p>
        <p>
          <Link className="btn" to="/resources">Watch Live</Link>
          <a className="btn ghost" href="#/giving" style={{marginLeft:12}}>Give & Support</a>
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

const MinistriesPage: React.FC = () => (
  <main className="container">
    <h1>Ministries</h1>
    <div className="ministries-grid">
      <article className="ministry">
        <h3>Praise & Worship Ministry</h3>
        <p>Leading corporate worship with anointing and excellence.</p>
      </article>

      <article className="ministry">
        <h3>Intercessory Ministry</h3>
        <p>Standing in prayer and spiritual covering for the church and community.</p>
      </article>

      <article className="ministry">
        <h3>Teaching Ministry</h3>
        <p>Bible-based teaching and discipleship for all ages.</p>
      </article>

      <article className="ministry">
        <h3>Hospitality Ministry</h3>
        <p>Welcoming guests and creating a warm environment for fellowship.</p>
      </article>

      <article className="ministry">
        <h3>Women Affairs Ministry</h3>
        <p>Equipping and empowering women through mentorship and events.</p>
      </article>
    </div>
  </main>
);

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

const EventsPage: React.FC = () => {
  const upcoming = [
    { name: 'Praise Night', venue: 'Enosh Auditorium', time: '25 March 2026, 6:00 PM' },
    { name: 'Women\'s Conference', venue: 'City Conference Hall', time: '10 April 2026, 9:00 AM' }
  ];
  const past = [
    { name: 'Easter Revival', venue: 'Enosh Grounds', time: '4 April 2025, 10:00 AM' }
  ];

  return (
    <main className="container">
      <h1>Events</h1>

      <section>
        <h2>Upcoming Events</h2>
        <div className="event-list">
          {upcoming.map((ev, idx) => (
            <div key={idx} className="event-item">
              <div className="event-header">
                <h3 className="event-name">{ev.name}</h3>
                <span className="pill upcoming">Upcoming</span>
              </div>
              <p className="event-venue"><strong>Venue:</strong> {ev.venue}</p>
              <p className="event-time"><strong>Time:</strong> {ev.time}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{marginTop:20}}>
        <h2>Past Events</h2>
        <div className="event-list">
          {past.map((ev, idx) => (
            <div key={idx} className="event-item">
              <div className="event-header">
                <h3 className="event-name">{ev.name}</h3>
              </div>
              <p className="event-venue"><strong>Venue:</strong> {ev.venue}</p>
              <p className="event-time"><strong>Time:</strong> {ev.time}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

const AboutPage: React.FC = () => (
  <main className="container">
    <h1>About Us</h1>
    <p>Enosh Generation is committed to raising a generation that knows God through worship, prayer, teaching and compassionate outreach.</p>
  </main>
);

const ContactPage: React.FC = () => (
  <main className="container contact-grid">
    <div>
      <h1>Contact Us</h1>
      <p>Send us a message or find our details below.</p>
      <form className="contact-form">
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Message</label>
        <textarea rows={5}></textarea>
        <button className="btn" type="submit">Send Message</button>
      </form>
    </div>

    <aside>
      <h2>Contact Details</h2>
      <p>Email: info@enosh.org</p>
      <p>Phone: +123 456 7890</p>
      <p>Address: Enosh Central, City</p>
    </aside>
  </main>
);

const TestimonialsPage: React.FC = () => (
  <main className="container">
    <h1>Testimonials</h1>
    <div className="testimonials">
      <blockquote className="testimonial">"Enosh changed my walk with God." — A member</blockquote>
      <blockquote className="testimonial">"A place of genuine worship and discipleship." — Visitor</blockquote>
    </div>
  </main>
);

const GivingPage: React.FC = () => (
  <main className="container">
    <h1>Giving & Support</h1>
    <p>Your support helps us run ministries, outreach and events.</p>
    <p><a className="btn" href="#">Give Online</a></p>
  </main>
);

const NewConvertsPage: React.FC = () => (
  <main className="container">
    <h1>New Converts Registration</h1>
    <form className="convert-form">
      <label>Full Name</label>
      <input type="text" />
      <label>Phone</label>
      <input type="text" />
      <label>Email</label>
      <input type="email" />
      <label>Brief Testimony</label>
      <textarea rows={4}></textarea>
      <button className="btn" type="submit">Register</button>
    </form>
  </main>
);

const App: React.FC = () => (
  <HashRouter>
    <div className="app-root">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/giving" element={<GivingPage />} />
          <Route path="/new-converts" element={<NewConvertsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </HashRouter>
);

export default App;
