import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
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
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className="site-header" role="banner">
        <div className="container header-inner">
          <Link className="brand" to={PageRoutes.HOME}>
            {AppName}
          </Link>
          <nav className="main-nav" aria-label="Primary navigation">
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
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
