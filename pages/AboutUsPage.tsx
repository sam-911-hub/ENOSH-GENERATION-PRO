
import React from 'react';
import PageContainer from '../components/PageContainer';
import { PageRoutes, PageBackgrounds } from '../constants';

const SectionTitle: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <h2 className="text-3xl font-heading text-brand-accent mt-8 mb-4">{children}</h2>
);

const Paragraph: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <p className="text-brand-text-light mb-4 leading-relaxed">{children}</p>
);

const ListItem: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <li className="mb-2 text-brand-text-light leading-relaxed">{children}</li>
);

const AboutUsPage: React.FC = () => {
  return (
    <PageContainer 
      title="About Enosh Generation"
      backgroundImageUrl={PageBackgrounds[PageRoutes.ABOUT_US]}
    >
      <div className="text-left">
        <SectionTitle>Mission Statement</SectionTitle>
        <Paragraph>
          Our mission is to be an inclusive community of hope where no young person goes hungry; Spiritually, Emotionally, Physically or Relationally.
        </Paragraph>

        <SectionTitle>Purpose</SectionTitle>
        <Paragraph>
          Our purpose is to positively transform this generation of youth by providing a wide range of teaching, training, relational, behavioral and spiritual services to maximize the potential of young lives we come into contact with.
        </Paragraph>

        <SectionTitle>Vision</SectionTitle>
        <Paragraph>
          We envision that as youths in Enosh Generation experience God, His love, His truth and His Life changing power, they will be transformed and will be a redemptive presence in our city and beyond. Our vision is to see transformed youth transforming this city so that our impact will not end with the youth that we serve, but rather it will continue to benefit the community as these youth become positive contributing members of society.
        </Paragraph>

        <SectionTitle>Core Values</SectionTitle>
        <ul className="list-decimal list-inside space-y-3 pl-4">
          <ListItem>
            We are saved by faith in God’s only son, Jesus Christ. We believe that Jesus’ blood shed on the cross provides the sole basis for forgiveness of sin. Therefore, God freely offers salvation to those who place their Faith in the death and resurrection of Jesus Christ.
          </ListItem>
          <ListItem>
            The salvation of humanity is completely a work of God’s free grace; it is no way the result of human works or goodness. Each person can receive salvation by placing their Faith in Jesus Christ the son of God.
          </ListItem>
          <ListItem>
            We believe that the entire Bible is inspired, inerrant word of God and that people were moved by the Spirit of God to write the very words of scripture.
            <br />
            <strong>Enosh Generation will work to:</strong>
            <ul className="list-[roman] list-inside space-y-1 pl-6 mt-2">
              <ListItem>Share the gospel of Jesus Christ as the foundation of true renewal and hope in life by uniting youths and also empowering them to serve as they are called.</ListItem>
              <ListItem>Love all people unconditionally as Christ did without regard to race, history or current conditions.</ListItem>
              <ListItem>Offer safe and loving platforms for youth, volunteers and staff that produce spiritual growth.</ListItem>
              <ListItem>Operate a ministry that honors God and is above reproach in its fiscal responsibility, integrity and commitment to the community.</ListItem>
            </ul>
          </ListItem>
        </ul>

        <SectionTitle>Foundational Program Values</SectionTitle>
        <Paragraph>Our program is built on the following Biblical values:</Paragraph>
        <ul className="list-decimal list-inside space-y-3 pl-4">
          <ListItem>
            <strong>FAITH</strong> – We love God and love others.
          </ListItem>
          <ListItem>
            <strong>EDUCATION</strong> – We seek knowledge and we respect and value our education. [PROV 18:15] “Heart of a prudent getteth knowledge; and the ear of the wise seeketh wisdom.”
          </ListItem>
          <ListItem>
            <strong>EMPLOYMENT</strong> – We respect authority, [Romans 13:1] “Let every soul be subject unto higher powers. For there is no but of God…” and trustworthy and dependable workers, [Col: 3:23] “…whatsoever ye do, do it heartily, as to the Lord and not unto men…” (KJV)
          </ListItem>
          <ListItem>
            <strong>LEADERSHIP</strong> – We are willing to go first, take responsibility [1st Tim 4:12] “Let no man despise thy youth…be an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity. Encourage one another; [Phil 2:3] “…let each esteem other better than themselves.” And demonstrate servant leadership by serving others.
          </ListItem>
        </ul>

        <SectionTitle>Five Gauges of Transformed Youth Transforming Our Generation</SectionTitle>
        <ul className="list-decimal list-inside space-y-3 pl-4">
          <ListItem>
            <strong>Renewed character or Growing in virtue.</strong> Measures how youths are growing in their ability to live out core values such as respect, compassion, kindness and patience.
          </ListItem>
          <ListItem>
            <strong>Healthy Relationships – Seeking Reconciliation and Vibrant Community.</strong> Measures the progress of youth in regards to finding a place to belong, reconciling broken relationships and discovering vibrant community.
          </ListItem>
          <ListItem>
            <strong>Rooted Identity or Engaging Life with Jesus.</strong> Measures how youth move from brokenness, addiction or a place of feeling trapped, to experiencing God and the freedom, hope and healing found in a relationship with Him (God.)
          </ListItem>
          <ListItem>
            <strong>Joyful Services and Putting Others First.</strong> Measures the extents to which youth are motivated to put others first, volunteer and give back to their communities.
          </ListItem>
          <ListItem>
            <strong>Clear Purpose – Discovering and utilizing Gifts and Abilities.</strong> Measures how well each youth is doing in regard to finding a place in the world, utilizing their gifts and abilities, creating life goals, developing passion and demonstrating an eagerness to learn.
          </ListItem>
        </ul>
      </div>
    </PageContainer>
  );
};

export default AboutUsPage;
