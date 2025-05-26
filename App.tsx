
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
import { PageRoutes } from './constants';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-brand-secondary text-brand-text-light font-body">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path={PageRoutes.HOME} element={<HomePage />} />
            <Route path={PageRoutes.UPCOMING_EVENTS} element={<UpcomingEventsPage />} />
            <Route path={PageRoutes.ABOUT_US} element={<AboutUsPage />} />
            <Route path={PageRoutes.PHOTO_GALLERY} element={<PhotoGalleryPage />} />
            <Route path={PageRoutes.LINKS} element={<LinksPage />} />
            <Route path={PageRoutes.VOLUNTEER_SUPPORT} element={<VolunteerSupportPage />} />
            <Route path={PageRoutes.ONLINE_RESOURCES} element={<OnlineResourcesPage />} />
            <Route path={PageRoutes.FAQ} element={<FAQPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
