import profile from '../../assets/profile.jpg';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-6 pt-32 md:pt-24"
      >
        {/* Text Block */}
        <div className="text-center animate-fadeIn">
          <h3 className="text-indigo-400 text-sm md:text-base font-medium mb-2 tracking-wide">
            WELCOME TO MY SPACE
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Hi, I'm <span className="text-indigo-500">Parv Bhardwaj</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            A fullstack web developer passionate about creating engaging digital experiences with modern technologies like React, TailwindCSS, and Node.js.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <Link to="/my-work">
              <button className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg shadow transition">
                VIEW MY WORK
              </button>
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="mt-12 animate-fadeIn">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full w-48 h-48 object-cover border-4 border-indigo-500 shadow-lg"
          />
        </div>

        {/* Intro Text Block */}
        <div className="mt-10 text-center max-w-xl text-gray-400 text-base leading-relaxed animate-fadeIn delay-200">
          <p>
            I love building responsive, accessible, and clean UIs. Whether it’s fullstack dashboards, animated portfolios, or scalable APIs — I focus on crafting elegant solutions that just work.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
