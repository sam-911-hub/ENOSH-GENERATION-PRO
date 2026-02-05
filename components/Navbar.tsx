import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <NavLink className="brand" to="/">Enosh Generation</NavLink>
        <nav className="main-nav" aria-label="Primary navigation">
          <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/ministries" className={({isActive}) => isActive ? 'active' : ''}>Ministries</NavLink>
          <NavLink to="/resources" className={({isActive}) => isActive ? 'active' : ''}>Resources</NavLink>
          <NavLink to="/events" className={({isActive}) => isActive ? 'active' : ''}>Events</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/testimonials" className={({isActive}) => isActive ? 'active' : ''}>Testimonials</NavLink>
          <NavLink to="/giving" className={({isActive}) => isActive ? 'active' : ''}>Giving</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
        </nav>
      </div>
    </header>
  </>
);

export default Navbar;
