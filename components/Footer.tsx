
import React from 'react';
import { SocialLinks, AppName, ContactEmail, WhatsAppNumbers } from '../constants';
import SocialLinkIcon from './SocialLinkIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-brand-text-medium py-12 shadow-inner mt-auto">
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-heading text-brand-accent mb-3">{AppName}</h3>
            <p className="text-sm">Transforming youth, transforming our city.</p>
          </div>
          <div>
            <h3 className="text-xl font-heading text-brand-accent mb-3">Quick Contact</h3>
            <p className="text-sm mb-1">Email: <a href={`mailto:${ContactEmail}`} className="hover:text-brand-accent transition-colors">{ContactEmail}</a></p>
            <p className="text-sm">WhatsApp:</p>
            {WhatsAppNumbers.map(num => (
                 <a key={num} href={`https://wa.me/${num.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="block hover:text-brand-accent transition-colors text-sm">{num}</a>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-heading text-brand-accent mb-3">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              {SocialLinks.map((link) => (
                <SocialLinkIcon key={link.name} name={link.name} url={link.url} iconClass={link.iconClass} />
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-brand-secondary pt-8">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} {AppName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
