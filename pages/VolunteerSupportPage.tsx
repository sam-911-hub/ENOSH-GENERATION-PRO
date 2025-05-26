
import React from 'react';
import PageContainer from '../components/PageContainer';
import { PageRoutes, PageBackgrounds, ContactEmail } from '../constants';

const VolunteerSupportPage: React.FC = () => {
  const partnerName = "A.M Stars Foundation";
  const partnerDescription = "A charity organization for the needy, poor, orphans and widows.";

  return (
    <PageContainer 
      title="Volunteer & Support Us"
      backgroundImageUrl={PageBackgrounds[PageRoutes.VOLUNTEER_SUPPORT]}
    >
      <div className="max-w-3xl mx-auto text-left">
        <section className="mb-10">
          <h2 className="text-3xl font-heading text-brand-accent mb-4">Partnership With Us</h2>
          <p className="text-brand-text-light leading-relaxed mb-4">
            We are currently partnering with <strong className="text-brand-accent">{partnerName}</strong>, {partnerDescription}.
          </p>
          <p className="text-brand-text-light leading-relaxed">
            If you would like to join our cause and explore partnership opportunities, we would love to hear from you. Please send us an email with details of the kind of partnership you are looking for. Together, we can make a greater impact.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-heading text-brand-accent mb-4">Volunteer Opportunities</h2>
          <p className="text-brand-text-light leading-relaxed mb-4">
            Passionate about making a difference in the lives of young people? We welcome volunteers who can contribute their time, skills, and heart to our programs.
          </p>
          <p className="text-brand-text-light leading-relaxed">
            To inquire about volunteering, please email us at:
          </p>
          <a 
            href={`mailto:${ContactEmail}?subject=Volunteer Inquiry`} 
            className="text-xl font-semibold text-brand-accent hover:text-brand-accent-dark underline transition-colors break-all"
          >
            {ContactEmail}
          </a>
        </section>

        <section>
          <h2 className="text-3xl font-heading text-brand-accent mb-4">Our Valued Partners</h2>
           <div className="bg-brand-secondary p-6 rounded-lg shadow-lg">
            <p className="text-xl font-semibold text-brand-accent">{partnerName}</p>
            <p className="text-brand-text-medium mt-1">{partnerDescription}</p>
            {/* You can add logos or links to partners here if available */}
          </div>
        </section>
      </div>
    </PageContainer>
  );
};

export default VolunteerSupportPage;
