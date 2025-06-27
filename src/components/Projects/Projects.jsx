const projects = [
  {
    title: "Portfolio Website",
    description: "You're viewing this one right now!",
    link: "#"
  },
  {
    title: "PollPal",
    description: "A recommendation app that suggests activities in the user’s local area. You can select the category of activity you're looking for, and we'll present personalized recommendations based on your preferences.",
    link: "https://csds395-2025spring-pollpal-1.onrender.com/"
  },
  {
    title: " SARA (Smart Allocator of Residence and Ambition)",
    description: " A city search, a city-based job search, as well as a city-based housing search appplication",
    link: "https://github.com/mehlu22/CSDS-393-Final-Project"
  }
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <a
          href={project.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-yellow-400 transition"
        >
          <h3 className="text-xl font-bold text-yellow-400 mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm">{project.description}</p>
        </a>
      ))}
    </div>
  );
};

export default Projects;
