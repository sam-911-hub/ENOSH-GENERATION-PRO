import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './css/styles.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import MinistriesPage from './pages/MinistriesPage';
import ResourcesPage from './pages/ResourcesPage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';
import GivingPage from './pages/GivingPage';
import NewConvertsPage from './pages/NewConvertsPage';

const App: React.FC = () => (
  <HashRouter>
    <div className="app-root">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/giving" element={<GivingPage />} />
          <Route path="/new-converts" element={<NewConvertsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </HashRouter>
);

export default App;
