import Skills from "../../components/Skills/Skills.jsx";
import Education from "../../components/Education/Education.jsx";
import Accomplishments from "../../components/Accomplishments/Accomplishments.jsx";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto space-y-20 animate-fadeIn">

        {/* About Me */}
        <section className="px-4">
          <h2 className="text-indigo-400 text-3xl font-bold mb-4 text-center">About Me</h2>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md max-w-4xl mx-auto text-gray-300 leading-relaxed text-justify">
            <p>
              I’m Parv, currently pursuing my undergraduate degree in Computer Science at Case Western Reserve University in Cleveland, OH.
              I began programming nearly a decade ago by building fun games on scratch.mit.edu.
              In high school, I developed my first real application—an inventory management system using Java and SQL.
              Over the past four years, along with three internships, I’ve worked on more than two dozen projects.
              I’m both a leader and a team player, known for my adaptability and creativity.
              Outside of school and work, you’ll find me at the gym, learning languages, or writing poetry.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="px-4">
          <h2 className="text-indigo-400 text-2xl font-semibold mb-4 text-center">Education</h2>
          <div className="max-w-4xl mx-auto">
            <Education />
          </div>
        </section>

        {/* Accomplishments */}
        <section className="px-4">
          <h2 className="text-indigo-400 text-2xl font-semibold mb-4 text-center">Accomplishments</h2>
          <div className="max-w-4xl mx-auto">
            <Accomplishments />
          </div>
        </section>

        {/* Skills */}
        <section className="px-4">
          <h2 className="text-indigo-400 text-2xl font-semibold mb-4 text-center">Skills</h2>
          <div className="max-w-4xl mx-auto">
            <Skills />
          </div>
        </section>

        {/* Hire Me CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg shadow transition"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
