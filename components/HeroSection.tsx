
import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoutes, AddressLinks } from '../constants';

interface HeroSectionProps {
  headline: string;
  vision: string;
  visionReference: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ headline, vision, visionReference }) => {
  return (
    <div className="text-center py-12 md:py-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-brand-accent mb-6 animate-fade-in-up">
        {headline}
      </h1>
      <p className="text-xl sm:text-2xl text-brand-text-light mb-4 font-body italic animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        "{vision}"
      </p>
      <p className="text-lg text-brand-text-medium mb-10 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
        – {visionReference}
      </p>
      <div className="space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
        <Link
          to={PageRoutes.ABOUT_US}
          className="inline-block bg-brand-accent text-brand-secondary font-bold py-3 px-8 rounded-lg shadow-md hover:bg-brand-accent-dark transition-colors duration-300 text-lg"
        >
          Learn More About Us
        </Link>
        <Link
          to={PageRoutes.UPCOMING_EVENTS}
          className="inline-block bg-transparent border-2 border-brand-accent text-brand-accent font-bold py-3 px-8 rounded-lg shadow-md hover:bg-brand-accent hover:text-brand-secondary transition-colors duration-300 text-lg"
        >
          See Upcoming Events
        </Link>
      </div>
       <div className="mt-10 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <h3 className="text-2xl font-heading text-brand-accent mb-3">Find Us</h3>
          <p className="text-brand-text-medium mb-2">Maximum Miracle Centre Church, Near Pentecostal Church, Councillor Opundo Rd, Nairobi</p>
          {AddressLinks.map(link => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-brand-accent hover:text-brand-accent-dark underline transition-colors duration-300 mb-1"
            >
              {link.name} <i className="fas fa-external-link-alt text-xs ml-1"></i>
            </a>
          ))}
        </div>
    </div>
  );
};

export default HeroSection;
