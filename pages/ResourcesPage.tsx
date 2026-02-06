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
                    <p><strong>INTRO</strong></p>
                    <p>Many Christians have given in to the deception of the world and meditating according to the world. Check 1st Timothy 4:1 – "The Spirit clearly says that in latter times some will abandon the faith and follow deceiving spirits and things taught by demons"</p>
                    <p>Christians aren't supposed to do yoga. Mostly because, meditation of the world focuses on emptying the mind. On the other hand, biblical meditation says a mind must be filled first.</p>
                    <p>You should understand that in your realm, you are strong. Check Genesis 6:3 – "…My Spirit will not contend with humans forever, for they are mortal…" God cannot force a man to say yes…That's why He gave everyone 'Free will'</p>
                    
                    <p><strong>1. The thought process</strong></p>
                    <p>"…As a man thinketh, so he is…" Proverbs 23:7</p>
                    <p>• Your thought process is not where you go/ or physically are, but it is where your mind is.</p>
                    <p>• Whatever you desire or seek to walk into, you have to first become it in your mind.</p>
                    <p>• God has not designed the way of man to speak into the future, for things to come. "…things which be not as though they were." Romans 4:17</p>
                    <p>• Any form of meditation is judged. Psalms 19:14</p>
                    <p>• Meditation should be of understanding. Psalms 49:3</p>
                    <p>• It is possible to meditate outside God's will.</p>
                    <p>• The things to meditate are listed by Paul to Timothy in Philippians 4:8 "…on whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable – if anything is excellent or praiseworthy – think about such things."</p>
                    <p>• Any man who knows to meditate from the secret of the scripture shall profit. Isaiah 48:17 "….I am the Lord thy God which teacheth thee to profit."</p>
                    <p>• Timothy was taught the right way to meditate, because there are things you shouldn't meditate upon eg. Your problems – sickness, poverty, joblessness, loss. You should meditate on the solution.</p>
                    <p>• Become in thought and speak yourself into the manifestation of the solution to the problem.</p>
                    <p>• God has not designed us to meditate on a way to answer the devil. Luke 21:14-15 "…Settle it therefore in your hearts, not to meditate before what ye shall answer…" Our meditations should be fixed in the way of the truth.</p>
                    
                    <p><strong>2. Three realms of meditation</strong></p>
                    
                    <p><strong>• Realm of Precepts (Meditating on God's law)</strong></p>
                    <p>Psalms 119:99 – "….I have more understanding than all my teachers: for thy testimonials are my meditation…."</p>
                    <p>:100 – "…I understand more than the ancients, because I keep thy precepts…" It is important the mindset you carry right now., disciplining your spirit as you hear.</p>
                    <p>There are people who can't sit under sound teaching. And you should also note that your spiritual age is different from your physical age. You can be young physically but spiritually, by grace, you are more advanced. And that all comes by meditating on His precepts.</p>
                    
                    <p><strong>• Realm of His Testimonies (experiences)</strong></p>
                    <p>There is a realm where we are given grace to meditate experience we receive from God. Check Acts 10:10-18</p>
                    
                    <p><strong>• Realm of God's Works</strong></p>
                    <p>Psalms 143:5 – "…I remember the days of old; I meditate on all thy works; I muse on the work of thy hands…"</p>
                    <p>When you exercise your spirit to a place of total surrender, you don't create that reality but your spirit is carried to that reality.</p>
                    <p>There is so much power when your spirit eyes can see the works of God. "…I do as I see my Father do…" John 5:19</p>
                    <p>Anytime David's soul was in trouble, he would remember God's works…Psalms 42:5-6</p>
                  </div>
                )}
              </div>
              
              <div>
                <a className="resource-item" href="#" onClick={(e) => { e.preventDefault(); setShowSermon7(!showSermon7); }} style={{color: 'teal'}}>SPIRITS THAT HINDER PROGRESS</a>
                {showSermon7 && (
                  <div style={{marginLeft: '20px', marginTop: '10px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px', color: 'orange'}}>
                    <p><strong>SPIRITS THAT HINDER PROGRESS</strong></p>
                    <p>Sometimes we deal with hindering spirits without knowing that we are actually being hindered.</p>
                    <p>Some people have gone as far as building doctrines around such hindrances because they do not know what the bible says/or are not mature enough to discern.</p>
                    <p>They mostly use the phrase "If it was of God, it would work."</p>
                    <p>It is detrimental that we know that some of the things of God can be frustrated unless you know how to fight the hindrances. Stay with me…</p>
                    <p>We all are aware of the verse from Romans 8;28 "And we know that all things work together for good…"</p>
                    <p>Further, it goes by saying "…to them that love God, to them who are called according to his purpose"</p>
                    <p>With that knowledge, we have to ask ourselves, if we are out of God's purpose, how then will something work for good? What is God's will and revelation concerning that thing?</p>
                    <p>Let's dive in…</p>
                    
                    <p><strong>1st Thessalonians 2: 13 -18</strong></p>
                    <p>13; we learn the attitude of the Thessalonians "…because, when ye received the word of God which ye heard of us, ye received it not as the word of men, but as it is in truth, the word of God, which effectually worketh also in you that believe."</p>
                    <p>15; suffered hindrances from wicked people "…who both killed the Lord Jesus, and their own prophets, and have persecuted us; and they please not God, and are contrary to all men."</p>
                    <p>16; the hindrance in spreading the word "…forbidding us to speak to the gentiles that they might be saved…"</p>
                    <p>18; "….Satan hindered us…" Paul had a desire that wasn't carnal to come, but they were frustrated by Satan.</p>
                    
                    <p><strong>So what is a hindrance spirit?</strong></p>
                    <p>• It is a kind that prevents or slows down the progress or accomplishment of something.</p>
                    <p>• It puts man at a disadvantage</p>
                    <p>• It is so hidden that one can easily fail in life and not know there is a power frustrating their progress.</p>
                    
                    <p>Fortunately for us, God has put a spiritual cloak in our spirit to know when we are out of time. In that way, every one who has the Spirit, can feel anytime when we are being delayed.</p>
                    <p>In that similar sense, we should strive to leave the carnal man. 1st Corithians 2;14 "…for the natural man receiveth not the things of the Spirit of God; for they are foolishness unto him; neither can he know them, because they are spiritually discerened."</p>
                    <p>We ought to be careful not to assume things that God is doing but you cannot justify through the word. The word of God will always align with his intention in our lives.</p>
                    <p>1st John 5;7 "…For there are three that bear record in heaven, the Father, the Word, and the Holy Ghost; and the three are one."</p>
                    <p>People in this generation are slowed in many ways, and they do not know why.</p>
                    <p>We have to understand that if it is the will of God, then there will be grace & understanding for it, and there is peace for it. Isaiah 55;12 "…For ye shall go out with joy, and be led forth with peace…"</p>
                    <p>Lets dive in and learn how hinderance spirits works in our lives…</p>
                    
                    <p><strong>1. THINGS DONE WITHOUT FAITH (HEBREWS 12;1)</strong></p>
                    <p>• Let us challenge your average visual of sin. Aside from the definition you have grown up knowing of sin. Did you know that EVERYTHING we do out of faith is sin? Even eating when in doubt is sin? Check Romans 14;23 "…But whoever has doubts is condemned even if they eat, because their eating is not from faith; and everything that does not come from faith is sin."</p>
                    <p>• Every pattern of sin, addiction and sinful struggle, is a direct result of your level of faith.</p>
                    <p>• There are people who say that "I'm not going to do this sin" but they do it on a daily basis without even knowing it.</p>
                    <p>• Take for instance, when Jesus said in Matthew 5;28 "…But I tell you that anyone who looks at a woman lustfully has already commited adultery with her in his heart."</p>
                    <p>• From that we know that it is not only in doing that a sin takes place, but in thoughts too. A man who is free is in a position to frustrate the very thoughts.</p>
                    
                    <p><strong>2. MINISTERS AS AN HINDRANCE</strong></p>
                    <p>• Hindering spirits are readily waiting to frustrate anybody set on the course of Gospel. 1st Corinthians 16;9 "…Because a great door for effective work has opened to me, and there are many who oppose me."</p>
                    <p>• Hindering spirits are usually on doors, not windows.</p>
                    <p>• They are not in the realm of access, rather, they are in the realm of opportunity to give out what you have accessed with God.</p>
                    <p>• You could have have so much from God and be qualified but be hindered.</p>
                    <p>• 2nd Timothy 2;15 "… Do your best to present yourself to God as one approved, a worker who does not need to be ashamed and correctly handles the word of truth."</p>
                    <p>• We should embrace the spirit of diligence, and exert yourself to certain patterns of life.</p>
                    <p>• In the same sense, the diligence to serve a man is also to study. Let us strive to test our faithfulness in diligent servitude. Luke 16;12 "… And if you have not been trustworthy with someone else's property, who will give you property of your own?" You can only be served as you have served.</p>
                    <p>• How is victory guaranteed? 2nd Cornthians 2'14 "… But thanks be to God , who always leads us as captives in Christ's triumphal procession and uses us to spread the aroma of the knowledge of him everywhere."</p>
                    <p>• We also have to know that the power that keeps us, comes and works through the place of knowledge. Check 1st Peter 1;5 "…Who through faith are shielded by God's power until the coming of the salvation that is ready to be revealed in the last time." And faith comes by hearing, "sermons and studying of scripture"</p>
                    <p>• In conclusion, if you also don't know enough, it can hinder you. Proverbs 11;9 "…the just are delivered by knowledge."</p>
                    <p>• As ministers of the gospel, serving in different capacities in the body of Christ, we should be careful with hindrances that come in the many forms, because as a minister, you are a door, a gateway. Check Matthew 23:13 "…Woe to you, teachers of the law and Pharisees, you hypocrites! You shut the door of the kingdom of heaven in people's faces. You yourselves do not enter, nor will you let those who enter who are trying to."</p>
                    
                    <p><strong>3. HINDRANCE THROUGH LOVE</strong></p>
                    <p>• Hindrance can also come from a person whom you love or loves you. People who are close to you.</p>
                    <p>• It can come from a friend, a girlfriend, a boyfriend, a relative, family, wife, husband. In some instances, they outright hinder you from achieving God's will and purpose in your life. Slow and derail your advancement in the Word.</p>
                    <p>• Check Mark 8; 31-33 "…but Jesus turned and looked at his disciples, he rebuked Peter. 'Get behind me, Satan' he said. 'you do not have in mind the concerns of God, but merely human concerns."</p>
                    <p>• Peter loved Jesus passionately, though sometimes impulsive devotion. At that moment, Jesus knew that Peter loved him. He also knew that Peter's action would derail His purpose on earth, and that was Satan working through him, using his carnal human concerns.</p>
                    <p>• Emotions sometimes derail us from higher purpose as they are merely human. It is best we discern and be vigilant, such that through our love, or someone's else, we do not produce hindrance to anyone.</p>
                    
                    <p><strong>4. A MAN'S PLACE OF LIBERTY AS AN HINDRANCE</strong></p>
                    <p>• People have different levels of faith in the walk of spiritual life. In a group, someone could have a better grasp of the knowledge in the spirit than another, potentially someone who just got recently saved. Take for instance a minister and a congregant.</p>
                    <p>• A man's place of liberty (freedom) can hinder another man's advancement in knowledge. Check 1st Corithians 8; 10 -12 "… For if someone with a weak conscience sees you, with all your knowledge, eating in an idol's temple, won't that person be emboldened to eat what is sacrificed to idols? So this weak brother or sister, for whom Christ died, is destroyed by your knowledge. When you sin against them in this way and wund their weak conscience, you sin against Christ."</p>
                    <p>• If you know that you are advanced in knowledge, and someone is looking up to you. Although indulging in somethings wont harm you, it will harm the person looking up to you. And that is in itself sin agnaist them and against Christ.</p>
                    <p>• So, in summary, Romans 14;21-22 "…It is better not to eat meat or drink wine or to do anything else that will cause your brother or sister to fall. So whatever you belive about these things keep between yourself and God. Blessed is the one who does not condemn himself by what he approves."</p>
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
