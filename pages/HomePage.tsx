
import React from 'react';
import PageContainer from '../components/PageContainer';
import HeroSection from '../components/HeroSection';
import { PageRoutes, PageBackgrounds } from '../constants';

const HomePage: React.FC = () => {
  return (
    <PageContainer 
      title="Welcome to Enosh Generation"
      backgroundImageUrl={PageBackgrounds[PageRoutes.HOME]}
      className="flex items-center justify-center"
    >
      <HeroSection 
        headline="Coming in the Lord’s name"
        vision="And we began to call on the name of the LORD"
        visionReference="Genesis 4:26"
      />
    </PageContainer>
  );
};

export default HomePage;
