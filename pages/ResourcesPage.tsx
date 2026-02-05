import { Link } from 'react-router-dom';
import { useState } from 'react';

const ResourcesPage = () => {
  const [showLiveServices, setShowLiveServices] = useState(false);
  const [showSermons, setShowSermons] = useState(false);
  const [showSermon1, setShowSermon1] = useState(false);
  const [showSermon2, setShowSermon2] = useState(false);

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
        
        <div>
          <a className="resource-item" href="#" onClick={(e) => { e.preventDefault(); setShowSermons(!showSermons); }}>Sermons</a>
          {showSermons && (
            <div style={{marginLeft: '20px', marginTop: '10px'}}>
              <div>
                <a className="resource-item" href="#" onClick={(e) => { e.preventDefault(); setShowSermon1(!showSermon1); }}>A LIFE WORTHY THE CALLING</a>
                {showSermon1 && (
                  <div style={{marginLeft: '20px', marginTop: '10px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px'}}>
                    <p><strong>By: Apostle Khen</strong></p>
                    <p><strong>Reference: Ephesians 4:1-10</strong></p>
                    <p>Paul writes this letter to the Ephesians pleading them to live a life worth the calling they bear.</p>
                    <p>This kind of life require one to be: Humility, meekness, Patience, Forbearing one another in love, Maintaining the unity of the spirit by bond of peace.</p>
                    <p>Paul urges us to live in this way because we are under one body, one spirit, one Lord, one faith, one baptism, one God and father who is above all through all and in all.</p>
                    <p>We have different grace and they are according to the gifts we have but we operate under one spirit.</p>
                    <p>When Jesus ascended he gave men gifts.</p>
                    <p>The principle of ascension is descending to the lowest.</p>
                    <p>Jesus Christ is an example to us all, when he descended, he ascended far above the heavens and was made king over all.</p>
                    <p><em>#Apostle Khen</em></p>
                  </div>
                )}
              </div>
              
              <div>
                <a className="resource-item" href="#" onClick={(e) => { e.preventDefault(); setShowSermon2(!showSermon2); }}>Gauges of Transformation</a>
                {showSermon2 && (
                  <div style={{marginLeft: '20px', marginTop: '10px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px'}}>
                    <p><strong>By: Minister Andrew</strong></p>
                    <p>Gauge is just a measure of something, how deep, speed of anything that's not stagnant.</p>
                    <p>Spiritually we're destined for greater things that we'll manifest only at a certain capacity.</p>
                    <p><strong>HOW WILL YOU KNOW YOU'RE GROWING SPIRITUALLY ??</strong></p>
                    <p>2Cor.3.18 But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory, even as by the Spirit of the Lord. (KJV)</p>
                    <p>Glory to glory is a channel of different dimensions in the relationship with God.</p>
                    <p><strong>🚧 Renewed Character or growing in virtue.</strong><br/>This a measure of how you out core values such as patience, kindness, respect and compassion. Many believers are born again but has no respect at all, they live a life of "an eye for an eye." Humility is a result of growth with it's fruit as grace not rewards.</p>
                    <p><strong>🚧 Healthy relationship</strong><br/>How are our relationships goals, bonds and motives ??? Do we reconcile??? A person who was never taught how to fix relationships but to replace relationships has a problem of not capable to solve issues even when it comes to marriage...</p>
                    <p><strong>🚧 Rooted identity.</strong><br/>Is our identity in christ doubted...? Col.2.7 Rooted and built up in him, and stablished in the faith, as ye have been taught, abounding therein with thanksgiving. (ALL) How we move from brokenness, addiction and places of feeling trapped to experience God and freedom, hope and healing found in God... Is there anything you're addicted to ??</p>
                    <p><strong>🚧 Joyful services and considering others first</strong><br/>How are we motivated in putting others first and volunteers in giving back to the community...</p>
                    <p><strong>🚧 Clear purpose</strong><br/>Do you have a place in the world ?? Utilizing gifts and abilities, creating life goals, developing passion and creating eagerness to learn...</p>
                    <p>There is a realm that men commune with God called the realm of "dependency knowledge." A realm where all they know about God is what they were TOLD about Him. It is all theoretical and not experiential.</p>
                    <p>When the Israelites were besieged by the midianites they were operating at a level of "dependency," that's why Gideon said, "Where are all the miracles our Fathers told us about? where is the God they told us brought wonders to Egypt." They hadn't yet experienced God at a PERSONAL level. They had a serious dependency syndrome.</p>
                    <p>Listen child of God, stories ABOUT God can excite you, revelations from other individuals that encountered Him can inspire you but ONLY a personal experience with the Lord can transform you!</p>
                  </div>
                )}
              </div>
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
