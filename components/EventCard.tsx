
import React from 'react';
import { EventItem } from '../types';
import { ContactEmail } from '../constants';

interface EventCardProps {
  event: EventItem;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-brand-secondary p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      <h3 className="text-2xl font-heading text-brand-accent mb-3">{event.category}</h3>
      {event.title && <p className="text-lg font-semibold text-brand-text-light mb-2">{event.title}</p>}
      <ul className="list-disc list-inside text-brand-text-medium space-y-1 mb-4">
        {event.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      {event.registrationInfo && (
        <div>
          <p className="text-brand-text-light font-semibold">Registration:</p>
          <a href={`mailto:${ContactEmail}?subject=Registration for ${event.category} - ${event.title || ''}`} className="text-brand-accent hover:text-brand-accent-dark underline">
            {event.registrationInfo}
          </a>
        </div>
      )}
    </div>
  );
};

export default EventCard;
