
import React from 'react';
import PageContainer from '../components/PageContainer';
import { PageRoutes, PageBackgrounds, SocialLinks, ContactEmail, WhatsAppNumbers } from '../constants';
import SocialLinkIcon from '../components/SocialLinkIcon';

const LinksPage: React.FC = () => {
  return (
    <PageContainer 
      title="Connect With Us"
      backgroundImageUrl={PageBackgrounds[PageRoutes.LINKS]}
    >
      <div className="max-w-2xl mx-auto text-center">
        <section className="mb-10">
          <h2 className="text-3xl font-heading text-brand-accent mb-6">Follow Our Journey</h2>
          <div className="flex justify-center items-center space-x-6 sm:space-x-8">
            {SocialLinks.map((link) => (
               <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                title={link.name}
                className="text-brand-text-light hover:text-brand-accent transition-all duration-300 transform hover:scale-110 flex flex-col items-center"
              >
                <i className={`${link.iconClass} text-4xl sm:text-5xl mb-2`}></i>
                <span className="text-xs sm:text-sm">{link.name}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-heading text-brand-accent mb-4">Get in Touch</h2>
          <div className="bg-brand-secondary p-6 rounded-lg shadow-lg">
            <p className="text-lg text-brand-text-light mb-2">
              <i className="fas fa-envelope mr-2 text-brand-accent"></i>Email Us:
            </p>
            <a 
              href={`mailto:${ContactEmail}`} 
              className="text-xl text-brand-accent hover:text-brand-accent-dark underline break-all"
            >
              {ContactEmail}
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-heading text-brand-accent mb-4">Chat With Us on WhatsApp</h2>
           <div className="bg-brand-secondary p-6 rounded-lg shadow-lg">
            {WhatsAppNumbers.map((number, index) => (
              <div key={index} className="mb-2">
                <i className="fab fa-whatsapp mr-2 text-green-500"></i>
                <a 
                  href={`https://wa.me/${number.replace(/\s+/g, '').replace('+', '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl text-brand-accent hover:text-brand-accent-dark underline"
                >
                  {number}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
};

export default LinksPage;
