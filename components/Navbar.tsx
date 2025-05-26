
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinkItem } from '../types';
import { PageRoutes, AppName } from '../constants';

const navLinks: NavLinkItem[] = [
  { label: 'Home', path: PageRoutes.HOME },
  { label: 'Upcoming Events', path: PageRoutes.UPCOMING_EVENTS },
  { label: 'About Us', path: PageRoutes.ABOUT_US },
  { label: 'Photo Gallery', path: PageRoutes.PHOTO_GALLERY },
  { label: 'Links', path: PageRoutes.LINKS },
  { label: 'Volunteer & Support', path: PageRoutes.VOLUNTEER_SUPPORT },
  { label: 'Online Resources', path: PageRoutes.ONLINE_RESOURCES },
  { label: 'FAQ', path: PageRoutes.FAQ },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeClassName = "text-brand-accent border-b-2 border-brand-accent";
  const inactiveClassName = "text-brand-text-light hover:text-brand-accent transition-colors duration-300";

  return (
    <nav className="bg-brand-secondary bg-opacity-80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <NavLink to={PageRoutes.HOME} className="text-3xl font-bold font-heading text-brand-accent">
            {AppName}
          </NavLink>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `${isActive ? activeClassName : inactiveClassName} font-medium text-sm uppercase tracking-wider py-2`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-brand-text-light hover:text-brand-accent focus:outline-none focus:text-brand-accent"
              aria-label="toggle menu"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-3 animate-fade-in`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `block py-2 px-4 text-sm ${isActive ? 'text-brand-accent bg-brand-primary rounded' : 'text-brand-text-light hover:bg-brand-primary hover:text-brand-accent rounded transition-colors duration-300'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
