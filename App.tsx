import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header style={{borderBottom: '1px solid #eee', background: '#fff'}}>
    <div style={{maxWidth:1100, margin:'0 auto', padding:16, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div style={{fontWeight:700}}>Enosh Generation</div>
      <nav>
        <Link to="/" style={{marginRight:12}}>Home</Link>
        <Link to="/ministries" style={{marginRight:12}}>Ministries</Link>
        <Link to="/resources" style={{marginRight:12}}>Resources</Link>
        <Link to="/events" style={{marginRight:12}}>Events</Link>
        <Link to="/about" style={{marginRight:12}}>About</Link>
        <Link to="/testimonials" style={{marginRight:12}}>Testimonials</Link>
        <Link to="/giving" style={{marginRight:12}}>Giving</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  </header>
);

const Footer: React.FC = () => (
  <footer style={{borderTop:'1px solid #eee', marginTop:30, padding:20, color:'#666'}}>
    <div style={{maxWidth:1100, margin:'0 auto', padding:0}}>© Enosh Generation</div>
  </footer>
);

const HomePage: React.FC = () => (
  <main style={{maxWidth:1100, margin:'20px auto', padding:16, fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"}}>
    <section style={{display:'flex', gap:20, alignItems:'center'}}>
      <img src="assets/images/enosh.jpg" alt="Enosh" style={{width:300, borderRadius:6}} />
      <div>
        <h1>Welcome to Enosh Generation</h1>
        <p style={{color:'#666'}}>Raising a generation that knows God • Worship, Prayer, Teachings</p>
        <p><strong>Service Times:</strong> Sundays 9:00 AM • Wednesdays 6:00 PM</p>
      </div>
    </section>
  </main>
);

const MinistriesPage: React.FC = () => (
  <main style={{maxWidth:1100, margin:'20px auto', padding:16}}>
    <h1>Ministries</h1>
    <ul>
      <li>Praise & Worship Ministry</li>
      <li>Intercessory Ministry</li>
      <li>Teaching Ministry</li>
      <li>Hospitality Ministry</li>
      <li>Women Affairs Ministry</li>
    </ul>
  </main>
);

const ResourcesPage: React.FC = () => (
  <main style={{maxWidth:1100, margin:'20px auto', padding:16}}>
    <h1>Resources</h1>
    <ul>
      <li>Live Services & Links</li>
      <li>Morning Dew Devotions</li>
      <li>Divinity Meets Humanity - Travailleurs</li>
      <li>Enosh Towdah</li>
      <li><Link to="/new-converts">New Converts Registration Form</Link></li>
      <li><Link to="/events">Events</Link></li>
    </ul>
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
    <main style={{maxWidth:1100, margin:'20px auto', padding:16}}>
      <h1>Events</h1>
      <section>
        <h2>Upcoming Events</h2>
        {upcoming.map((ev, idx) => (
          <div key={idx} style={{border:'1px solid #f0f0f0', padding:12, borderRadius:6, marginBottom:10}}>
            <h3 style={{margin:0}}>{ev.name} <span style={{background:'#e6f0ff', color:'#0b66ff', padding:'2px 6px', borderRadius:4, marginLeft:8, fontSize:12}}>Upcoming</span></h3>
            <p style={{margin:'6px 0'}}><strong>Venue:</strong> {ev.venue}</p>
            <p style={{margin:'6px 0'}}><strong>Time:</strong> {ev.time}</p>
          </div>
        ))}
      </section>

      <section style={{marginTop:20}}>
        <h2>Past Events</h2>
        {past.map((ev, idx) => (
          <div key={idx} style={{border:'1px solid #f0f0f0', padding:12, borderRadius:6, marginBottom:10}}>
            <h3 style={{margin:0}}>{ev.name}</h3>
            <p style={{margin:'6px 0'}}><strong>Venue:</strong> {ev.venue}</p>
            <p style={{margin:'6px 0'}}><strong>Time:</strong> {ev.time}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

const AboutPage: React.FC = () => (
  <main style={{maxWidth:1100, margin:'20px auto', padding:16}}>
    <h1>About Us</h1>
    <p>Enosh Generation is committed to raising a generation that knows God through worship, prayer, teaching and compassionate outreach.</p>
  </main>
);

const ContactPage: React.FC = () => (
  <main style={{maxWidth:1100, margin:'20px auto', padding:16}}>
    <h1>Contact Us</h1>
    <form>
      <div style={{marginBottom:8}}>
        <label>Name</label><br />
        <input type="text" />
      </div>
      <div style={{marginBottom:8}}>
        <label>Email</label><br />
        <input type="email" />
      </div>
      <div style={{marginBottom:8}}>
        <label>Message</label><br />
        <textarea rows={4}></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </main>
);

const TestimonialsPage: React.FC = () => (
  <main style={{maxWidth:1100, margin:'20px auto', padding:16}}>
    <h1>Testimonials</h1>
    <p>"Enosh changed my walk with God." — A member</p>
    <p>"A place of genuine worship and discipleship." — Visitor</p>
  </main>
);

const GivingPage: React.FC = () => (
  <main style={{maxWidth:1100, margin:'20px auto', padding:16}}>
    <h1>Giving & Support</h1>
    <p>Your support helps us run ministries, outreach and events.</p>
    <p><a href="#">Give Online</a></p>
  </main>
);

const NewConvertsPage: React.FC = () => (
  <main style={{maxWidth:1100, margin:'20px auto', padding:16}}>
    <h1>New Converts Registration</h1>
    <form>
      <div style={{marginBottom:8}}>
        <label>Full Name</label><br />
        <input type="text" />
      </div>
      <div style={{marginBottom:8}}>
        <label>Phone</label><br />
        <input type="text" />
      </div>
      <div style={{marginBottom:8}}>
        <label>Email</label><br />
        <input type="email" />
      </div>
      <div style={{marginBottom:8}}>
        <label>Brief Testimony</label><br />
        <textarea rows={4}></textarea>
      </div>
      <button type="submit">Register</button>
    </form>
  </main>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div style={{display:'flex', flexDirection:'column', minHeight:'100vh', background:'#fff', color:'#111'}}>
        <Header />
        <div style={{flexGrow:1}}>
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
};

export default App;
