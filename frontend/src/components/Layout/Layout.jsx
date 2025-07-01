
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Push content below navbar */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
