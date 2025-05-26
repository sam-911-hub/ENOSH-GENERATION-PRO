
import React from 'react';
import PageContainer from '../components/PageContainer';
import SermonSummary from '../components/SermonSummary';
import { Sermon, WorshipPlaylistItem } from '../types';
import { PageRoutes, PageBackgrounds } from '../constants';

const sermons: Sermon[] = [
  {
    id: 'sermon1',
    title: 'A LIFE WORTHY THE CALLING',
    speaker: 'Apostle Khen',
    reference: 'Ephesians 4:1-10',
    summaryPoints: [
      "Paul writes this letter to the Ephesians pleading them to live a life worth the calling they bear.",
      "This kind of life require one to be: Humility, meekness, Patience, Forbearing one another in love, Maintaining the unity of the spirit by bond of peace.",
      "Paul urges us to live in this way because we are under one body, one spirit, one Lord, one faith, one baptism, one God and father who is above all through all and in all.",
      "We have different grace and they are according to the gifts we have but we operate under one spirit.",
      "When Jesus ascended he gave men gifts.",
      "The principle of ascension is descending to the lowest.",
      "Jesus Christ is an example to us all, when he descended, he ascended far above the heavens and was made king over all."
    ],
    authorTag: "#Apostle Khen"
  },
  {
    id: 'sermon2',
    title: 'Gauges of Transformation',
    speaker: 'Minister Andrew',
    fullText: `Gauge is just a measure of something, how deep, speed of anything that's not stagnant.
Spiritually we're destined for greater things that we'll manifest only at a certain capacity.

HOW WILL YOU KNOW YOU'RE GROWING SPIRITUALLY ??

2Cor.3.18 But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory, even as by the Spirit of the Lord. (KJV)

Glory to glory is a channel of different dimensions in the relationship with God.

🚧 Renewed Character or growing in virtue. 
This a measure of how you out core values such as patience, kindness, respect and compassion. 
Many believers are born again but has no respect at all, they live a life of "an eye for an eye."
Humility is a result of growth with it's fruit as grace not rewards.

🚧 Healthy relationship
How are our relationships goals, bonds and motives ???
Do we reconcile???
A person who was never taught how to fix relationships but to replace relationships has a problem of not capable to solve issues even when it comes to marriage...

🚧 Rooted identity. 
Is our identity in christ doubted...?

Col.2.7 Rooted and built up in him, and stablished in the faith, as ye have been taught, abounding therein with thanksgiving. (ALL)

How we move from brokenness, addiction and places of feeling trapped to experience God and freedom, hope and healing found in God...
Is there anything you're addicted to ??

🚧 Joyful services and considering others first 
How are we motivated in putting others first and volunteers in giving back to the community...

🚧 Clear purpose 
Do you have a place in the world ?? 
Utilizing gifts and abilities, creating life goals, developing passion and creating eagerness to learn...

🎤🎤🎤🎤👇👇👇
There is a realm that men commune with God called the realm of “dependency knowledge.” A realm where all they know about God is what they were TOLD about Him. It is all theoretical and not experiential. 

When the Israelites were besieged by the midianites they were operating at a level of “dependency,” that’s why Gideon said, “Where are all the miracles our Fathers told us about? where is the God they told us brought wonders to Egypt.” They hadn’t yet experienced God at a PERSONAL level. They had a serious dependency syndrome. 

Listen child of God, stories ABOUT God can excite you, revelations from other individuals that encountered Him can inspire you but ONLY a personal experience with the Lord can transform you!`,
    summaryPoints: [], // Full text is used
  },
  {
    id: 'sermon3',
    title: 'THE DANGEROUS & COSTLY MISTAKES THAT THE MAJORITY OF THIS GENERATION ARE MAKING TODAY',
    speaker: 'Enosh Generation Teaching',
    fullText: `Let’s be honest — Our generation is bold, intelligent, creative, and filled with untapped potential. But greatness requires wisdom, discipline, and intentional living. If these mistakes go unchecked, they can sabotage futures before they even begin.

Let’s dive in.

1. LIVING FOR THE INTERNET, NOT FOR IMPACT;
Mistake: Chasing trends instead of transformation.
Wisdom: In a digital age, it’s tempting to measure worth by likes, followers, and viral moments. But the internet has a short memory. What it remembers are those who made a difference, not those who made noise. Purpose outlives popularity. Build a life that leaves footprints, not just impressions.
Key Thought: Legacy matters more than likes.

2. MOCKING THE PROCESS, BUT DESIRING THE RESULT;
Mistake: Entitlement without effort.
Wisdom: You can’t harvest where you haven’t sown. Many want a millionaire lifestyle without embracing a laborer’s discipline. Mocking the hustle while coveting the reward is a self-inflicted curse. Every result you admire was born in hidden, hard places. Embrace the grind — it’s the gate to greatness.
Key Thought: Desire must be matched by discipline.

3. REPLACING HARD WORK WITH AESTHETICS;
Mistake: Valuing appearance over substance.
Wisdom: Looking wealthy is not being wealthy. Flaunting lifestyles you haven’t earned is deception to self and others. Clothes, cars, and curated feeds can’t cover empty bank accounts and shallow legacies. Invest your time in developing skills, building assets, and adding value. Substance sustains — aesthetics fade.
Key Thought: Image fades, value endures.

4. PRIORITIZING FUN OVER FOUNDATION;
Mistake: Sacrificing tomorrow for temporary thrills.
Wisdom: Youth is a gift, but what you do with it is your offering to the future. Fun has its place, but when pleasure takes priority over preparation, destruction is near. Lay a solid foundation now — in character, skills, relationships, and spiritual depth. Fun without foresight is fatal.
Key Thought: Your future is the harvest of today’s habits.

5. THINKING YOU STILL HAVE TIME;
Mistake: Delaying destiny.
Wisdom: Time waits for no one. While you hesitate, someone else your age is already leading, building, and shaping history. Starting early is an advantage, not a burden. Greatness isn’t scheduled for the future — it begins the moment you decide to grow. Don’t wait for the ‘perfect time.’ It doesn’t exist.
Key Thought: The earlier you start, the stronger you finish.

6. TALKING MORE THAN DOING;
Mistake: Replacing execution with inspiration.
Wisdom: Inspiration is everywhere, but action is rare. The gap between your dreams and your reality is called discipline. Stop being a motivational addict and start being a transformational leader. Speak less, do more. Let your results be louder than your quotes.
Key Thought: Execution outperforms excitement.

7. RUNNING FROM CORRECTION;
Mistake: Canceling accountability.
Wisdom: Correction is not rejection; it’s protection. Those who tell you uncomfortable truths are your true allies. Surrounding yourself with only those who applaud you is the fastest road to destruction. Value mentors, accept rebuke, and welcome growth conversations. Pride resists correction — wisdom craves it.
Key Thought: Correction today saves catastrophe tomorrow.

8. CONFUSING ATTENTION FOR AFFECTION;
Mistake: Seeking applause over authentic connection.
Wisdom: The culture rewards clout-chasing, but attention is shallow currency. Don’t dress, speak, or live for applause while starving for meaning. Real affection is built on character, trust, and value — not viral trends. Pursue depth over display. Attention fades fast; authentic relationships last.
Key Thought: Be known for who you are, not just what you show.

9. BELIEVING YOU’RE TOO YOUNG TO FALL;
Mistake: Assuming immunity because of early success.
Wisdom: Success without humility is a ticking time bomb. No one is untouchable. Pride blinds, and it always precedes a fall. Stay teachable, stay grounded. Let your head bow as your platform rises. Arrogance disqualifies faster than ignorance.
Key Thought: Success unmanaged is a silent threat.

10. SLEEPING ON YOUR GIFTS;
Mistake: Letting fear bury potential.
Wisdom: Talent unused is purpose wasted. The world doesn’t need another copy, it needs the original you. Stop hiding behind fear, perfectionism, or excuses. Wake up your gifts. Refuse to be buried with your greatness still locked inside you.
Key Thought: Unused potential is a tragedy.

FINAL CHARGE TO US;
You are the future, but only if you survive the present. Refuse to let laziness, entitlement, pride, or fear sabotage your destiny. The world is watching — but more importantly, your generation is counting on you.
Rise with wisdom. Build with intention. Lead with humility.
Your future isn’t promised, it’s prepared. Start now. Start with God.`,
    summaryPoints: [],
  }
];

const worshipPlaylist: WorshipPlaylistItem[] = [
  { id: 'w1', title: 'Majina Yote Mazuri' },
  { id: 'w2', title: 'Huyu Yesu' },
  { id: 'w3', title: 'Amejibu Maombi' },
  { id: 'w4', title: 'Ushuhuda' },
  { id: 'w5', title: 'Baraka' }, // Corrected spelling
  { id: 'w6', title: 'Wazee 24' },
];

const OnlineResourcesPage: React.FC = () => {
  return (
    <PageContainer 
      title="Online Resources"
      backgroundImageUrl={PageBackgrounds[PageRoutes.ONLINE_RESOURCES]}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-heading text-brand-accent mb-6 text-center">Sermons & Teachings</h2>
        {sermons.map((sermon) => (
          <SermonSummary key={sermon.id} sermon={sermon} />
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-heading text-brand-accent mb-6 text-center">Bible Study Tools</h2>
        <div className="bg-brand-secondary p-6 rounded-lg shadow-xl text-center">
          <p className="text-brand-text-light mb-3">
            Enhance your personal study with these recommended resources:
          </p>
          <ul className="list-disc list-inside text-brand-text-medium space-y-1 inline-block text-left">
            <li><a href="https://www.blueletterbible.org" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent">Blue Letter Bible</a> (Concordance, Commentaries)</li>
            <li><a href="https://www.biblegateway.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent">Bible Gateway</a> (Multiple Translations)</li>
            <li><a href="https://www.youversion.com/the-bible-app/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent">YouVersion Bible App</a> (Devotionals, Reading Plans)</li>
            <li><a href="https://www.thebibleproject.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent">The Bible Project</a> (Animated Videos Explaining Scripture)</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-heading text-brand-accent mb-6 text-center">Worship Playlist</h2>
        <div className="bg-brand-secondary p-6 rounded-lg shadow-xl text-center">
          <p className="text-brand-text-light mb-3">
            Some songs that inspire us in worship:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {worshipPlaylist.map((song) => (
              <div key={song.id} className="p-2 bg-brand-primary rounded shadow">
                <i className="fas fa-music mr-2 text-brand-accent"></i>
                <span className="text-brand-text-light text-sm">{song.title}</span>
              </div>
            ))}
          </div>
          <p className="text-brand-text-medium mt-4 text-sm">
            Find these and more on platforms like YouTube Music, Spotify, or Apple Music.
          </p>
        </div>
      </section>
    </PageContainer>
  );
};

export default OnlineResourcesPage;
