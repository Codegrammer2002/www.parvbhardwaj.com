const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <div className="flex justify-center gap-8 text-sm">
        <a href="https://www.linkedin.com/in/parv-bhardwaj/" target="_blank" className="hover:text-yellow-400">LinkedIn</a>
        <a href="https://github.com/Codegrammer2002" target="_blank" className="hover:text-yellow-400">GitHub</a>
        <a href="/contact" className="hover:text-yellow-400">Contact</a>
      </div>
      <p className="mt-4 text-gray-500 text-xs">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
