import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Resume', to: '/resume' },
    { name: 'My Work', to: '/my-work' },
    { name: 'Contact', to: '/contact' }
  ];

  return (
    <nav className="bg-black/90 backdrop-blur-md text-white fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16">

        {/* Logo */}
        <div className="text-xl font-bold text-indigo-400">Parv</div>

        {/* Hamburger Menu - Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link to={link.to} className="hover:text-indigo-400 transition">{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 pb-4">
          <ul className="space-y-4 text-sm font-medium">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="block text-white hover:text-indigo-400 transition"
                  onClick={() => setMenuOpen(false)} // Close on click
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
