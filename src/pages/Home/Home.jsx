import profile from '../../assets/profile.jpg';
import AboutPreview from '../../components/AboutPreview/AboutPreview';
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
        <div className="text-center">
          <h3 className="text-yellow-400 text-sm md:text-base font-medium mb-1">HELLO!</h3>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            I'm <span className="text-yellow-500">Parv</span>{" "}
            <span className="text-yellow-400">Bhardwaj</span>
          </h1>
          <p className="text-gray-400 text-lg mt-4">Fullstack Web Developer</p>
          <a href="#about">
           <Link to ="my-work">  <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md" link ='/my-work'>
              VIEW MY WORK 
            </button> </Link>
          </a>
        </div>

        <div className="mt-12">
          <img
            src={profile}
            alt="Profile"
            className="rounded-lg w-60 h-60 object-cover border-4 border-yellow-500 shadow-lg"
          />
        </div>
      </section>

      <AboutPreview />
    </>
  );
};

export default Home;
