import Skills from "../../components/Skills/Skills.jsx";
import Projects from "../../components/Projects/Projects.jsx";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24 px-6 space-y-24">

      {/* General Info + Education */}
      <section>
        <h2 className="text-yellow-400 text-2xl font-bold mb-4">General Info & Education</h2>
        <p className="text-gray-300">I'm a passionate web developer with a background in XYZ. I graduated from ABC University...</p>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-yellow-400 text-2xl font-bold mb-4">Skills</h2>
        <Skills />
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-yellow-400 text-2xl font-bold mb-4">Projects</h2>
        <Projects />
      </section>

    </div>
  );
};

export default About;