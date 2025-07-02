const experiences = [
  {
    role: "Software and Technical Project Information Manager",
    company: "Nexus Engineering Group",
    duration: "May 2024 – August 2024",
    location: "Cleveland - OH",
    description: "Built PowerAutomate scripts to automate equipment requests, invoices, and RFI forms, increasing efficiency by 75% using JSON and OData, serving 250+ employees across the board in 4 different locations. Built custom SharePoint sites using JSON and Power Automate, tailored for over two dozen ongoing projects. Worked on developing Algorithms and AI agents using Python to extract signatures from the company’s deliverables PDFs"
  },
  {
    role: "Information Systems Assistant",
    company: "UTech at Case Western Reserve University(CWRU)",
    duration: "Jun 2022 – Present",
    location: "Cleveland - OH",
    description: "Personally provided software and hardware support for Windows and MacOS to 200+ clients in 50+ departments.Led projects to set up workstations for the Housing Department; configured and tested card encoders serving 1500+ students.Configured computing equipment in a networked environment. Other responsibilities were telephone & remote support for users. Conducted interviews and recruited other students for the Systems Assistant role at UTech. "
  },
   {
    role: "Software Development Engineer Intern",
    company: "Techensifier",
    duration: "May 2023 – July 2023",
    location: "Delhi - India",
    description: "Built custom Java Desktop Applications and several Java libraries, including JUnits for tests. Successfully led a project to develop an admin dashboard using the MERN Stack(MongoDB, Express.js, React.js, Node.js)."
  },
   {
    role: "TA for Full-Stack Web Development",
    company: "Case Western Reserve University",
    duration: "September 2022 – December 2022",
    location: "Cleveland - OH",
    description: "Delivered comprehensive instruction in foundational full-stack web development focusing on MongoDB, Express, React, Node, and Vue.js technologies, while imparting robust debugging and troubleshooting methodologies essential for building scalable and maintainable end-to-end applications. Directly worked under Prof Daniel Izadnegadhar, held review sessions, and graded exams for 100+ students taking the course."
  }

];

const WorkExperience = () => (
  <section>
    <h2 className="text-indigo-400 text-2xl font-bold mb-6 text-center">Work Experience</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {experiences.map((exp, idx) => (
        <div key={idx} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-indigo-500 transition">
          <h3 className="text-white text-lg font-semibold mb-1">{exp.role}</h3>
          <p className="text-sm text-gray-400">
            {exp.company} – {exp.location}
          </p>
          <p className="text-sm text-gray-400 italic mb-2">{exp.duration}</p>

          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mt-2">
            {exp.description
              .split('.')
              .filter((line) => line.trim().length > 0)
              .map((point, i) => (
                <li key={i}>{point.trim()}.</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default WorkExperience;

