import Slider from "react-slick";
import { useState } from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "You're viewing this one right now!",
    link: "#",
    tech: ["React", "TailwindCSS", "EmailJS"]
  },
  {
    title: "PollPal",
    description: "A local activity recommendation app with location and category filters.",
    link: "https://csds395-2025spring-pollpal-1.onrender.com/",
    tech: ["React", "MongoDB", "Django", "TailwindCSS"]
  },
  {
    title: "SARA",
    description: "City and housing/job search platform with visual filters.",
    link: "https://github.com/mehlu22/CSDS-393-Final-Project",
    tech: ["React", "Django.", "Typescript", "MongoDB"]
  }
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    autoplay: true,
    autoplayspeed:4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="py-12 px-4 bg-black text-white">

      <div className="max-w-3xl mx-auto">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-800 rounded-lg p-6 shadow-md relative group hover:bg-indigo-900 transition">
                <h3 className="text-xl font-bold text-indigo-300 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{project.description}</p>

                {/* Hover details */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-sm font-semibold text-indigo-400">Technologies:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 mb-2">
                    {project.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded text-sm"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
