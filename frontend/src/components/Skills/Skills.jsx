const skills = [
  "HTML", "CSS", "JavaScript", "React", "TailwindCSS",
  "Node.js", "Express", "MongoDB", "Git", "REST APIs"
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
