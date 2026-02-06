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
                    <p>For a Christian, the question of "life in and out of the altar" refers to the call to live a life of sincere consecration to God that is consistent both inside the church and in the outside world. It contrasts the performance of religious duties with a genuine, transformed, and daily relationship with God. This concept is often explained by the apostle Paul's call to be a "living sacrifice" in Romans 12:1.</p>
                    
                    <p><strong>The theological meaning of the altar</strong></p>
                    <p><strong>Old Testament:</strong> The physical altar was a place of ritual sacrifice, an offering, and a point of meeting between God and man. The fire on the altar was to be kept burning continuously (Leviticus 6:13), symbolizing constant worship.</p>
                    <p><strong>New Testament:</strong> The ultimate altar is the cross of Calvary, where Jesus made the once-and-for-all, perfect sacrifice for humanity. As a result, Christians no longer need a physical altar for sacrifice.</p>
                    <p><strong>Today:</strong> Your body is considered the temple of the Holy Spirit and your heart is a personal, spiritual altar. The offerings are no longer animals but your very life, presented as a living sacrifice.</p>
                    
                    <p><strong>Life on the altar</strong></p>
                    <p>Life on the altar represents a state of complete surrender, devotion, and sacrifice. It signifies a life where everything—your desires, ambitions, possessions, and relationships—is consecrated to God.</p>
                    <p><strong>Consecration:</strong> A life on the altar is the result of a profound personal encounter with God, leading to the spontaneous consecration of your entire being to Him.</p>
                    <p><strong>Prayer and worship:</strong> It is a life rooted in constant fellowship with God. It involves a daily, personal "altar" of prayer and worship, where you talk to God rather than just about Him.</p>
                    <p><strong>Provision:</strong> By yielding everything to God, you trust Him to provide what you need for life, rather than holding back out of fear of loss.</p>
                    
                    <p><strong>Life off the altar</strong></p>
                    <p>A life off the altar refers to a Christian who becomes complacent and neglects their walk with God.</p>
                    <p><strong>Worldly focus:</strong> This happens when a person becomes more preoccupied with the things of the world than with their relationship with God. The spiritual fire goes out, and their priorities shift away from Christ.</p>
                    <p><strong>Double life:</strong> A person living off the altar often leads a double life, being one person in church and another in the world. Their inner conviction no longer matches their outward actions.</p>
                    <p><strong>Consequences:</strong> This can lead to a state of spiritual powerlessness and worldliness. The Bible warns that leaving the place of consecration brings danger to your family, your flesh, and your future.</p>
                    
                    <p><strong>Challenges and the call to consistency</strong></p>
                    <p>The key question is how to live a consistent Christian life that is "on the altar" both inside and outside the church. This is often described as living the "life of the altar and the tent," inspired by Abraham.</p>
                    <p><strong>Altar and tent:</strong> The altar is for God, while the tent is for your earthly needs as a sojourner. What God gives back to you from the altar—your resources, relationships, and even your health—is to be used for His purpose while you are in the world.</p>
                    <p><strong>Surrendering struggles:</strong> When you face difficulties, you can bring your "broken things" and struggles to the altar. Instead of being burdened, you lay them before the Lord to receive renewal, hope, and promise.</p>
                    <p><strong>The struggle with worldliness:</strong> It is a constant battle to remain consecrated. The tendency is to "crawl off the altar" and reclaim areas of your life that you have surrendered to God, especially when faced with worldly temptations.</p>
                    <p><strong>Transformation:</strong> The practical answer is not just to perform religious actions but to allow God's Spirit to continually transform your mind and heart through His Word. This creates a life of worship that is not limited to a church building but is expressed in every aspect of your daily life.</p>
                  </div>
                )}
              </div>
              
              <div>
                <a className="resource-item" href="#" onClick={(e) => { e.preventDefault(); setShowSermon4(!showSermon4); }} style={{color: 'purple'}}>DESTINY AWAITS NO ONE</a>
                {showSermon4 && (
                  <div style={{marginLeft: '20px', marginTop: '10px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px', color: 'green'}}>
                    <p><strong>Genesis 12:1</strong> - God never told Abram what he was to do in Canaan but he was given a promise. In a place of self-discovery, only promises are given.</p>
                    <p>Going to church, fellowships and events doesn't guarantee a blessing.</p>
                    
                    <p><strong>Verse 7&8</strong> - Self-discovery starts by changing the altar (your heart). Check Hebrew 8:10-11</p>
                    
                    <p><strong>Genesis 10:</strong> God never told Abraham there was a famine. Learn to move if season has ended. God expected Abraham to use his mind and find a way out. Seasons of God should not pass a man without its manifestation.</p>
                    
                    <p><strong>Esther 4:13-16</strong></p>
                    <p>Esther was a Jewish queen in the Persian court. Her uncle Mordecai urged her to save her people from a plot to exterminate them. Remaining silent doesn't save people.</p>
                    <p>Listen to Esther's response: "Go, gather together all the Jews who are in Susa, and fast for me. Do not eat or drink for three days, night and day. I and my attendants will fast as you do. When this is done, I will go to the king, even though it is against the law. And if I perish, I perish."</p>
                    
                    <p><strong>Why do we have delays in our prayers?</strong></p>
                    <p>When 2nd Corinthians 1:20 says "For no matter how many promises God has made, they are 'yes' in Christ. And so through Him the 'Amen' is spoken to us to the glory of God."</p>
                    <p>Thing is, some people will die asking and never realize there is a seeking level <em>Zeteo</em> in Greek. We should get locked in a revelation to a point of knowing why a prayer wasn't answered.</p>
                    <p>For instance, the children of Israel had only achieved a certain level <em>Aiteo</em> in Greek which is the asking level. The secret is not in asking.</p>
                    <p>At a point in our lives, we have to forget ourselves and see our future generations being saved and delivered. Because God reveals things to us that He may redeem through us.</p>
                    
                    <p><strong>2nd Kings 7:3-4</strong></p>
                    <p>A story of the four men with leprosy. They made a decision to face fear and terror rather than sit back and let fear devour them.</p>
                    <p>"If they spare us, we live: if they kill us, then we die."</p>
                    
                    <p><strong>Psalms 91:5</strong> - "You will not fear the terror by night, nor the arrow that flies by day."</p>
                    <p><strong>Key Truth:</strong> There will be a probability to die but even so, I'll still try. <strong>DESTINY AWAITS NO ONE.</strong></p>
                  </div>
                )}
              </div>
              
              <div>
                <a className="resource-item" href="#" onClick={(e) => { e.preventDefault(); setShowSermon5(!showSermon5); }} style={{color: 'orange'}}>THE GOD VISION</a>
                {showSermon5 && (
                  <div style={{marginLeft: '20px', marginTop: '10px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px', color: 'red'}}>
                    <p><strong>Introduction:</strong> There is a place in God where our visions starts to catch up with his vision because His becomes faster. We should ask ourselves this question – "Are you in the human dream or God dream?", "What is God's dream about you?"</p>
                    
                    <p>Sometimes, we invest too much time in prayer asking for very small things that sometimes God doesn't know how to fit into it. Sometimes, He is quiet, not because He doesn't love you, but because He is still trying to figure out how he will fit in your small dream.</p>
                    
                    <p><strong>Ephesians 3:20</strong></p>
                    <p>1. "…according to the power that works in us." – The thing He has put in us, provokes His dream concerning us.</p>
                    <p>2. "…dare to ask." – the things you fear to ask of Him because they scare you.</p>
                    
                    <p><strong>1st Samuel 16:13-14</strong></p>
                    <p>1. The day the Spirit of God settled on David, God had exchanged authority in the Spirit but Saul maintained the Office.</p>
                    <p>2. God can judge a matter now, and its manifestation could take years. "Ecclesiastes 8:11 …because the sentence against evil work is not done speedily."</p>
                    <p>3. Also, Hannaniah was judged but he died six months later.</p>
                    <p>4. In the Story of David, most people fail to see what stayed in his heart: "….I always sought that the presence of God may return to Israel." He understood the power of dwelling in the presence of the Lord.</p>
                    
                    <p><strong>1st Samuel 16:16-23</strong></p>
                    <p>They knew if a certain spirit hits a king, its only a man with a worshipping hand that can deliver him. David gained favor in the eyes of Saul. And whenever Saul was invaded with the evil spirit, David would play the harp and Saul would be refreshed.</p>
                    
                    <p><strong>1st Samuel 17:25 (Vision of man to man)</strong></p>
                    <p>We see the vision of man towards another man. The verse outlines Saul's vision for David. He promises him great riches, his daughter for marriage, and his house's exemption in Israel.</p>
                    
                    <p><strong>1st Samuel 17:26-58 (Vision of a man with the heart of God)</strong></p>
                    <p>• He didn't look for riches as a reward.</p>
                    <p>• He wasn't looking for a wife.</p>
                    <p>• He wasn't looking for freedom of his father's house.</p>
                    <p>• His vision was on the deliverance of Israel, the bigger picture.</p>
                    <p>• When David asked "…who is this uncircumcised…" David tapped into a covenant, connecting with the divine purpose of God.</p>
                    <p>• Even when David was at Saul's, Saul only knew him because he played harps. Saul only thought David was a boy who played harps, no more, no less.</p>
                    <p>• But when it came to the point of proving David, Saul clothed him with his own armor but David removed them.</p>
                    <p>• Later on when David says "…you come to me with a sword, a spear, and a javelin. But I come to you in the name of the Lord of Hosts, the God of the armies of Israel whom you have defied." He maintains the covenant of God.</p>
                    <p>• From then onwards, David was another man. Verse 55</p>
                    
                    <p><strong>Conclusion:</strong> God can do something in our lives that even your parents will ask "Are you our child?" It is called the anointing. "When anointing shall come upon you, you shall become another man".</p>
                    <p><strong>Key Truth:</strong> The bigger vision will always answer the lesser.</p>
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
