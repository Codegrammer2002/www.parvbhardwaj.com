import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";

const MyWork = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 space-y-24">
      <section>
        <h2 className="text-yellow-400 text-3xl font-bold mb-4">Skills</h2>
        <Skills />
      </section>

      <section>
        <h2 className="text-yellow-400 text-3xl font-bold mb-4">Projects</h2>
        <Projects />
      </section>
    </div>
  );
};

export default MyWork;
