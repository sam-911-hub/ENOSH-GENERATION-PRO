
import React from 'react';
import PageContainer from '../components/PageContainer';
import FAQItem from '../components/FAQItem';
import { FAQItemData } from '../types';
import { PageRoutes, PageBackgrounds, ContactEmail, SocialLinks, WhatsAppNumbers } from '../constants';

const faqData: FAQItemData[] = [
  {
    id: 'faq1',
    question: 'How can I join Enosh Generation?',
    answer: `To join us, you can contact us through WhatsApp or email. You can also reach out through our social media sites.
Email: ${ContactEmail}
WhatsApp: ${WhatsAppNumbers.join(' / ')}
Social Media: Find us @enosh.generation (links available on our 'Links' page). We look forward to connecting with you!`,
  },
  {
    id: 'faq2',
    question: 'What are the weekly gathering times?',
    answer: `We have two main weekly gatherings:
- Mondays: 5:00 PM - 7:30 PM at Maximum Church Dandora.
- Thursdays: 10:00 PM - 6:00 AM (Kesha/Night Vigil) at Maximum Church Dandora.
Details can be found on our 'Upcoming Events' page.`,
  },
  {
    id: 'faq3',
    question: 'Are there any age restrictions to join?',
    answer: `Enosh Generation primarily focuses on youth, but we aim to be an inclusive community. If you resonate with our vision and mission, feel free to reach out, and we can discuss how you can get involved.`,
  },
  {
    id: 'faq4',
    question: 'How can I support Enosh Generation?',
    answer: `You can support us by volunteering your time and skills, through prayer, or by partnering with us. Please visit our 'Volunteer & Support' page for more details or email us at ${ContactEmail}.`,
  },
  {
    id: 'faq5',
    question: 'What kind of special events do you host?',
    answer: `We host various special events throughout the year, including retreats (typically during August holidays), camps (December holidays), concerts, and community service projects. Keep an eye on our 'Upcoming Events' page for announcements.`,
  },
];

const FAQPage: React.FC = () => {
  return (
    <PageContainer 
      title="Frequently Asked Questions"
      backgroundImageUrl={PageBackgrounds[PageRoutes.FAQ]}
    >
      <div className="max-w-3xl mx-auto">
        {faqData.map((item) => (
          <FAQItem key={item.id} item={item} />
        ))}
         <div className="mt-10 text-center text-brand-text-medium">
            <p>Still have questions? Don't hesitate to <a href={`mailto:${ContactEmail}`} className="text-brand-accent hover:underline">contact us</a>!</p>
        </div>
      </div>
    </PageContainer>
  );
};

export default FAQPage;
