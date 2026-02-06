import { Link } from 'react-router-dom';
import { useState } from 'react';

const MinistriesPage = () => {
  const [showPraise, setShowPraise] = useState(false);
  const [showIntercessory, setShowIntercessory] = useState(false);
  const [showTeaching, setShowTeaching] = useState(false);
  const [showHospitality, setShowHospitality] = useState(false);
  const [showWomens, setShowWomens] = useState(false);

  return (
    <main className="container">
      <h1>Ministries</h1>
      <div className="ministries-grid">
        <article className="ministry">
          <h3 onClick={() => setShowPraise(!showPraise)} style={{cursor: 'pointer'}}>Praise & Worship Ministry</h3>
          {showPraise && (
            <div style={{textAlign: 'center', marginTop: '10px'}}>
              <img src="/assets/praise and worship.jpg" alt="Praise and Worship" style={{width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover'}} />
            </div>
          )}
          <p>Leading corporate worship with anointing and excellence.</p>
        </article>

        <article className="ministry">
          <h3 onClick={() => setShowIntercessory(!showIntercessory)} style={{cursor: 'pointer'}}>Intercessory Ministry</h3>
          {showIntercessory && (
            <div style={{textAlign: 'center', marginTop: '10px'}}>
              <img src="/assets/intercessory.jpg" alt="Intercessory" style={{width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover'}} />
            </div>
          )}
          <p>Standing in prayer and spiritual covering for the church and community.</p>
        </article>

        <article className="ministry">
          <h3 onClick={() => setShowTeaching(!showTeaching)} style={{cursor: 'pointer'}}>Teaching Ministry</h3>
          {showTeaching && (
            <div style={{textAlign: 'center', marginTop: '10px'}}>
              <img src="/assets/teaching.jpg" alt="Teaching" style={{width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover'}} />
            </div>
          )}
          <p>Bible-based teaching and discipleship for all ages.</p>
        </article>

        <article className="ministry">
          <h3 onClick={() => setShowHospitality(!showHospitality)} style={{cursor: 'pointer'}}>Hospitality Ministry</h3>
          {showHospitality && (
            <div style={{textAlign: 'center', marginTop: '10px'}}>
              <img src="/assets/hospitality.jpg" alt="Hospitality" style={{width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover'}} />
            </div>
          )}
          <p>Welcoming guests and creating a warm environment for fellowship.</p>
        </article>

        <article className="ministry">
          <h3 onClick={() => setShowWomens(!showWomens)} style={{cursor: 'pointer'}}>Women Affairs Ministry</h3>
          {showWomens && (
            <div style={{textAlign: 'center', marginTop: '10px'}}>
              <img src="/assets/womens affairs.jpg" alt="Women Affairs" style={{width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover'}} />
            </div>
          )}
          <p>Equipping and empowering women through mentorship and events.</p>
        </article>
      </div>
      
      <div style={{textAlign: 'center', marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '5px'}}>
        <p>If you would like to join any of our ministries, you can reach out via <Link to="/contact" style={{color: '#007bff', textDecoration: 'underline'}}>this link</Link>.</p>
      </div>
    </main>
  );
};

export default MinistriesPage;
