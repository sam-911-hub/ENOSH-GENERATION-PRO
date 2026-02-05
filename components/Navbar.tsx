import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const handleSkipLink = (e: any) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  };

  return (
    <>
      <a href="#" onClick={handleSkipLink} className="skip-link">Skip to content</a>
      <header className="site-header" role="banner">
        <div className="container header-inner">
          <NavLink className="brand" to="/">Enosh Generation</NavLink>
          <nav className="main-nav" aria-label="Primary navigation">
            <NavLink to="/" className={({ isActive }: any) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/ministries" className={({ isActive }: any) => isActive ? 'active' : ''}>Ministries</NavLink>
            <NavLink to="/resources" className={({ isActive }: any) => isActive ? 'active' : ''}>Resources</NavLink>
            <NavLink to="/events" className={({ isActive }: any) => isActive ? 'active' : ''}>Events</NavLink>
            <NavLink to="/about" className={({ isActive }: any) => isActive ? 'active' : ''}>About</NavLink>
            <NavLink to="/testimonials" className={({ isActive }: any) => isActive ? 'active' : ''}>Testimonials</NavLink>
            <NavLink to="/giving" className={({ isActive }: any) => isActive ? 'active' : ''}>Giving</NavLink>
            <NavLink to="/contact" className={({ isActive }: any) => isActive ? 'active' : ''}>Contact</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
