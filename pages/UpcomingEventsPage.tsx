
import React from 'react';
import PageContainer from '../components/PageContainer';
import EventCard from '../components/EventCard';
import { EventItem } from '../types';
import { PageRoutes, PageBackgrounds, ContactEmail } from '../constants';

const events: EventItem[] = [
  {
    category: 'Weekly Gatherings',
    title: 'Monday Fellowship',
    details: ['Every Monday: 5:00 PM - 7:30 PM', 'Location: Maximum Church Dandora'],
    registrationInfo: `Contact us at ${ContactEmail} for more details.`
  },
  {
    category: 'Weekly Gatherings',
    title: 'Thursday Night Vigil (Kesha)',
    details: ['Every Thursday: 10:00 PM - 6:00 AM (Friday Morning)', 'Location: Maximum Church Dandora'],
    registrationInfo: `Contact us at ${ContactEmail} for more details.`
  },
  {
    category: 'Special Events',
    title: '',
    details: [
      'Retreats: August holidays 2025',
      'Camps: December holidays 2025',
      'Concerts: To be announced',
      'Service Projects: Ongoing, check for updates'
    ],
    registrationInfo: `For special events, email ${ContactEmail} for registration and inquiries.`
  },
];

const UpcomingEventsPage: React.FC = () => {
  return (
    <PageContainer 
      title="Upcoming Events"
      backgroundImageUrl={PageBackgrounds[PageRoutes.UPCOMING_EVENTS]}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg text-brand-text-medium">
          For any inquiries or to register for an event, please email us at:
        </p>
        <a 
          href={`mailto:${ContactEmail}`} 
          className="text-xl font-bold text-brand-accent hover:text-brand-accent-dark underline transition-colors"
        >
          {ContactEmail}
        </a>
      </div>
    </PageContainer>
  );
};

export default UpcomingEventsPage;
