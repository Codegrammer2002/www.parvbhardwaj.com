import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Recommendations from "../../components/Recommendations/Recommendations";
import { Link} from "react-router-dom";
const MyWork = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 space-y-24">
      <section>
        <h2 className="text-yellow-400 text-3xl font-bold mb-4">Skills</h2>
        <Skills />
      </section>

      <section>
     
        <WorkExperience />
      </section>
       <section>
        <h2 className="text-yellow-400 text-2xl font-bold mb-4">Projects </h2>
        <Projects />
      </section>

      
      <section>
        <Recommendations />
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

export default MyWork;
