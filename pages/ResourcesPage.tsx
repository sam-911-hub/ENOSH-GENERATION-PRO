import { Link } from 'react-router-dom';
import { useState } from 'react';

const ResourcesPage = () => {
  const [showLiveServices, setShowLiveServices] = useState(false);
  const [showSermons, setShowSermons] = useState(false);
  const [showSermon1, setShowSermon1] = useState(false);
  const [showSermon2, setShowSermon2] = useState(false);
  const [showSermon3, setShowSermon3] = useState(false);
  const [showSermon4, setShowSermon4] = useState(false);
  const [showSermon5, setShowSermon5] = useState(false);
  const [showSermon6, setShowSermon6] = useState(false);
  const [showSermon7, setShowSermon7] = useState(false);

  return (
    <main className="container">
      <h1>Resources</h1>
      <div className="resources-list">
        <div>
          <a className="resource-item" href="#" onClick={(e) => { e.preventDefault(); setShowLiveServices(!showLiveServices); }} style={{color: 'black'}}>Live Services & Links</a>
          {showLiveServices && (
            <div className="social-links" style={{marginLeft: '20px', marginTop: '10px'}}>
              <a className="resource-item" href="https://www.facebook.com/people/ENOSH-Generation/100091299983773/" target="_blank" rel="noopener noreferrer" style={{color: 'blue'}}>Facebook</a>
              <a className="resource-item" href="https://www.instagram.com/enosh.generation/?hl=en" target="_blank" rel="noopener noreferrer" style={{color: 'green'}}>Instagram</a>
              <a className="resource-item" href="https://www.youtube.com/@enosh.generation" target="_blank" rel="noopener noreferrer" style={{color: 'red'}}>YouTube</a>
              <a className="resource-item" href="https://www.tiktok.com/@enosh.generation" target="_blank" rel="noopener noreferrer" style={{color: 'purple'}}>TikTok</a>
            </div>
          )}
        </div>
        
        <div>
          <a className="resource-item" href="#" onClick={(e) => { e.preventDefault(); setShowSermons(!showSermons); }} style={{color: 'black'}}>Sermons</a>
          {showSermons && (
            <div style={{marginLeft: '20px', marginTop: '10px'}}>
              <div>
                <a className="resource-item" href="#" onClick={(e) => { e.preventDefault(); setShowSermon1(!showSermon1); }} style={{color: 'blue'}}>A LIFE WORTHY THE CALLING</a>
                {showSermon1 && (
                  <div style={{marginLeft: '20px', marginTop: '10px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px', color: 'red'}}>
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
                <a className="resource-item" href="#" onClick={(e) => { e.preventDefault(); setShowSermon2(!showSermon2); }} style={{color: 'green'}}>Gauges of Transformation</a>
                {showSermon2 && (
                  <div style={{marginLeft: '20px', marginTop: '10px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px', color: 'purple'}}>
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
                    <p><strong>🎤🎤🎤🎤👇👇👇</strong></p>
                    <p>There is a realm that men commune with God called the realm of "dependency knowledge." A realm where all they know about God is what they were TOLD about Him. It is all theoretical and not experiential.</p>
                    <p>When the Israelites were besieged by the midianites they were operating at a level of "dependency," that's why Gideon said, "Where are all the miracles our Fathers told us about? where is the God they told us brought wonders to Egypt." They hadn't yet experienced God at a PERSONAL level. They had a serious dependency syndrome.</p>
                    <p>Listen child of God, stories ABOUT God can excite you, revelations from other individuals that encountered Him can inspire you but ONLY a personal experience with the Lord can transform you!</p>
                    <hr style={{margin: '20px 0', border: '1px solid #ccc'}} />
                    <p><strong>THE DANGEROUS & COSTLY MISTAKES THAT THE MAJORITY OF THIS GENERATION ARE MAKING TODAY</strong></p>
                    <p><em>By: Enosh Generation Teaching</em></p>
                    <p>Let's be honest — Our generation is bold, intelligent, creative, and filled with untapped potential. But greatness requires wisdom, discipline, and intentional living. If these mistakes go unchecked, they can sabotage futures before they even begin.</p>
                    <p><strong>1. LIVING FOR THE INTERNET, NOT FOR IMPACT</strong><br/>Mistake: Chasing trends instead of transformation. Wisdom: Purpose outlives popularity. Build a life that leaves footprints, not just impressions. Key Thought: Legacy matters more than likes.</p>
                    <p><strong>2. MOCKING THE PROCESS, BUT DESIRING THE RESULT</strong><br/>Mistake: Entitlement without effort. Wisdom: You can't harvest where you haven't sown. Embrace the grind — it's the gate to greatness. Key Thought: Desire must be matched by discipline.</p>
                    <p><strong>3. REPLACING HARD WORK WITH AESTHETICS</strong><br/>Mistake: Valuing appearance over substance. Wisdom: Invest your time in developing skills, building assets, and adding value. Key Thought: Image fades, value endures.</p>
                    <p><strong>4. PRIORITIZING FUN OVER FOUNDATION</strong><br/>Mistake: Sacrificing tomorrow for temporary thrills. Wisdom: Lay a solid foundation now — in character, skills, relationships, and spiritual depth. Key Thought: Your future is the harvest of today's habits.</p>
                    <p><strong>5. THINKING YOU STILL HAVE TIME</strong><br/>Mistake: Delaying destiny. Wisdom: Greatness isn't scheduled for the future — it begins the moment you decide to grow. Key Thought: The earlier you start, the stronger you finish.</p>
                    <p><strong>FINAL CHARGE TO US:</strong> You are the future, but only if you survive the present. Rise with wisdom. Build with intention. Lead with humility. Your future isn't promised, it's prepared. Start now. Start with God.</p>
                  </div>
                )}
              </div>
              
              <div>
                <a className="resource-item" href="#" onClick={(e) => { e.preventDefault(); setShowSermon3(!showSermon3); }} style={{color: 'red'}}>LIFE IN AND OUT OF THE ALTAR</a>
                {showSermon3 && (
                  <div style={{marginLeft: '20px', marginTop: '10px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px', color: 'blue'}}>
                    <p>For a Christian, the question of "life in and out of the altar" refers to the call to live a life of sincere consecration to God that is consistent both inside the church and in the outside world.</p>
                    <p><strong>Life on the altar</strong> represents complete surrender, devotion, and sacrifice. It signifies a life where everything—your desires, ambitions, possessions, and relationships—is consecrated to God.</p>
                    <p><strong>Life off the altar</strong> refers to a Christian who becomes complacent and neglects their walk with God. This happens when a person becomes more preoccupied with the things of the world than with their relationship with God.</p>
                    <p><strong>The Challenge:</strong> How to live a consistent Christian life that is "on the altar" both inside and outside the church. This is the "life of the altar and the tent," inspired by Abraham.</p>
                  </div>
                )}
              </div>
              
              <div>
                <a className="resource-item" href="#" onClick={(e) => { e.preventDefault(); setShowSermon4(!showSermon4); }} style={{color: 'purple'}}>DESTINY AWAITS NO ONE</a>
                {showSermon4 && (
                  <div style={{marginLeft: '20px', marginTop: '10px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px', color: 'green'}}>
                    <p><strong>Genesis 12:1</strong> - God never told Abram what he was to do in Canaan but he was given a promise. In a place of self-discovery, only promises are given.</p>
                    <p><strong>Esther 4:13-16</strong> - "Go, gather together all the Jews who are in Susa, and fast for me... And if I perish, I perish."</p>
                    <p><strong>2nd Kings 7:3-4</strong> - Four men with leprosy made a decision to face fear and terror rather than sit back and let fear devour them. "If they spare us, we live: if they kill us, then we die."</p>
                    <p><strong>Key Point:</strong> There will be a probability to die but even so, I'll still try. Destiny awaits no one - we must move when seasons change.</p>
                  </div>
                )}
              </div>
              
              <div>
                <a className="resource-item" href="#" onClick={(e) => { e.preventDefault(); setShowSermon5(!showSermon5); }} style={{color: 'orange'}}>THE GOD VISION</a>
                {showSermon5 && (
                  <div style={{marginLeft: '20px', marginTop: '10px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px', color: 'red'}}>
                    <p>There is a place in God where our visions starts to catch up with his vision because His becomes faster. "Are you in the human dream or God dream?"</p>
                    <p><strong>Ephesians 3:20</strong> - "according to the power that works in us" - The thing He has put in us, provokes His dream concerning us.</p>
                    <p><strong>David's Vision:</strong> While Saul offered riches, marriage, and freedom, David's vision was on the deliverance of Israel - the bigger picture. When David asked "who is this uncircumcised..." David tapped into a covenant, connecting with the divine purpose of God.</p>
                    <p><strong>Key Truth:</strong> The bigger vision will always answer the lesser. God can do something in our lives that even your parents will ask "Are you our child?" It is called the anointing.</p>
                  </div>
                )}
              </div>
              
              <div>
                <a className="resource-item" href="#" onClick={(e) => { e.preventDefault(); setShowSermon6(!showSermon6); }} style={{color: 'brown'}}>EFFECTIVE MEDITATION</a>
                {showSermon6 && (
                  <div style={{marginLeft: '20px', marginTop: '10px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px', color: 'purple'}}>
                    <p>Many Christians have given in to the deception of the world and meditating according to the world. Christians aren't supposed to do yoga. Biblical meditation says a mind must be filled first, not emptied.</p>
                    <p><strong>The Thought Process:</strong> "As a man thinketh, so he is" - Proverbs 23:7. Your thought process is not where you go physically, but where your mind is.</p>
                    <p><strong>Three Realms of Meditation:</strong></p>
                    <p>1. <strong>Realm of Precepts</strong> - Meditating on God's law</p>
                    <p>2. <strong>Realm of His Testimonies</strong> - Experiences we receive from God</p>
                    <p>3. <strong>Realm of God's Works</strong> - "I remember the days of old; I meditate on all thy works"</p>
                  </div>
                )}
              </div>
              
              <div>
                <a className="resource-item" href="#" onClick={(e) => { e.preventDefault(); setShowSermon7(!showSermon7); }} style={{color: 'teal'}}>SPIRITS THAT HINDER PROGRESS</a>
                {showSermon7 && (
                  <div style={{marginLeft: '20px', marginTop: '10px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px', color: 'orange'}}>
                    <p>Sometimes we deal with hindering spirits without knowing that we are actually being hindered. A hindrance spirit prevents or slows down progress and puts man at a disadvantage.</p>
                    <p><strong>1st Thessalonians 2:18</strong> - "Satan hindered us" - Paul had a desire that wasn't carnal to come, but they were frustrated by Satan.</p>
                    <p><strong>Four Types of Hindrances:</strong></p>
                    <p>1. <strong>Things Done Without Faith</strong> - Everything we do out of faith is sin (Romans 14:23)</p>
                    <p>2. <strong>Ministers as Hindrance</strong> - Hindering spirits are on doors, not windows - in the realm of opportunity</p>
                    <p>3. <strong>Hindrance Through Love</strong> - Can come from people close to you who love you</p>
                    <p>4. <strong>A Man's Liberty as Hindrance</strong> - Your freedom can hinder another's advancement in knowledge</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
        <a className="resource-item" href="#" style={{color: 'black'}}>Morning Dew Devotions</a>
        <a className="resource-item" href="#" style={{color: 'black'}}>Divinity Meets Humanity - Travailleurs</a>
        <a className="resource-item" href="#" style={{color: 'black'}}>Enosh Towdah</a>
        <Link className="resource-item" to="/new-converts" style={{color: 'black'}}>New Converts Registration Form</Link>
        <Link className="resource-item" to="/events" style={{color: 'black'}}>Events</Link>
      </div>
    </main>
  );
};

export default ResourcesPage;
