import Skills from "../../components/Skills/Skills.jsx";
import Education from "../../components/Education/Education.jsx";
import Accomplishments from "../../components/Accomplishments/Accomplishments.jsx"
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24 px-6 space-y-24">

      {/* General Info + Education */}
    
  <section className="bg-gray-900 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
  <h2 className="text-yellow-400 text-2xl font-bold mb-4">About Me</h2>
  <p className="text-gray-300 leading-relaxed">
 I’m Parv, currently pursuing my undergraduate degree in Computer Science at Case Western Reserve University in Cleveland, OH. I began programming nearly a decade ago by building fun games on scratch.mit.edu. In high school, I developed my first real application—an inventory management system using Java and SQL in NetBeans.
Over the past four years at university, along with three internships, I’ve worked on more than two dozen projects. I’m both a leader and a team player, known for my strong adaptability to change. Outside of school and work, you can find me at the gym, learning a new language, or even writing poetry.   
</p>
</section>
       <section>
        <Education />

      </section>
        <section>
        <h2 className="text-yellow-400 text-2xl font-bold mb-4">Accomplishments</h2>
        <Accomplishments />
      </section>

      

      {/* Skills */}
      <section>
        <h2 className="text-yellow-400 text-2xl font-bold mb-4">Skills</h2>
        <Skills />
      </section>

        <div className="text-center mt-10">

        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition"
        >
          Hire Me
        </Link>
      </div>  

    </div>
  );
};

export default About;