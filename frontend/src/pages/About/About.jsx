import Skills from "../../components/Skills/Skills.jsx";
import Projects from "../../components/Projects/Projects.jsx";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24 px-6 space-y-24">

      {/* General Info + Education */}
      <section>
        <h2 className="text-yellow-400 text-2xl font-bold mb-4">About</h2>
        <p className="text-gray-300">I am Parv--currently doing my undergrad in Computer Science at Case Western Reserve University in Cleveland, OH. I started programming almost a decade ago by builiding fun games scratch.mit.edu. I made my first real application in highschool which was an inventory management application using Java and SQL on Netbeans. <br />  
        <br /> Over the course of the last 4 years in university and 3 internships, I have worked on more than two dozen projects. I am a leader and a team player with great adaptability to change. Outside school and work, you can find me in the gym or learning a new language or maybe even writing poems.
        </p>
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