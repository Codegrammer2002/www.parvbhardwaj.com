const skills = [
  "Java", "JavaScript", "Python", "React.js", "Next.js", "Spring Boot",
  "Node.js", "Express.js", "MongoDB", "SQLite", "Git", ".NET",
  "JSON", "OData", "SharePoint", "PowerAutomate", "HTML", "CSS",
  "Tailwind CSS", "CUDA", "Bash", "PowerShell", "SQL", "TypeScript",
  "Flask", "Google Maps API", "Places API", "Directions API", 
  "Google Speech Recognition API", "BeautifulSoup", "Selenium", 
  "NetBeans", "Java Mail API"
];

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default Skills;
