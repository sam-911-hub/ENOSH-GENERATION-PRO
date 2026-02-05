import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import UpcomingEventsPage from './pages/UpcomingEventsPage';
import AboutUsPage from './pages/AboutUsPage';
import PhotoGalleryPage from './pages/PhotoGalleryPage';
import LinksPage from './pages/LinksPage';
import VolunteerSupportPage from './pages/VolunteerSupportPage';
import OnlineResourcesPage from './pages/OnlineResourcesPage';
import FAQPage from './pages/FAQPage';

const App = () => (
  <HashRouter>
    <div className="app-root">
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1} className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upcoming-events" element={<UpcomingEventsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/photo-gallery" element={<PhotoGalleryPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/volunteer-support" element={<VolunteerSupportPage />} />
          <Route path="/online-resources" element={<OnlineResourcesPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </HashRouter>
);

export default App;
