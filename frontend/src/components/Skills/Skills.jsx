const skillCategories = {
  "Programming Languages": [
    "Java", "JavaScript", "TypeScript", "Python", "Bash", "PowerShell", "CUDA", "R"
  ],
  "Frontend & Libraries": [
    "React", "Next.js", "Vue", "HTML & CSS", "Tailwind CSS", "Node.js", "Express", "Spring Boot", ".NET", "Selenium", "BeautifulSoup"
  ],
  "Databases, Cloud, and Dev Tools": [
    "MongoDB", "SQL", "PostgreSQL", "Git", "VS Code", "RStudio", "Figma", "LaTeX", "GitHub"
  ],
  "Microsoft Tools & Others": [
    "SharePoint", "Power Automate", "OData", "MS 365 Office", "Active Directory", "Adobe", "G Suite"
  ]
};

const Skills = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category}>
          <h3 className="text-yellow-400 font-semibold mb-2">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
