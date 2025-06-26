import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md shadow-lg transition duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-yellow-400 text-xl font-bold">Parv Bhardwaj</h1>
        <ul className="hidden md:flex gap-8 text-sm text-white font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/my-work">My Work</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
