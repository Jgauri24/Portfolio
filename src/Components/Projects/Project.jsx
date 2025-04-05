import React from 'react';
import './Project.css';

const Projects = () => {
  const projectData = [
    {
      title: "Random Quotes",
      description: "A app that displays randomly generated quotes.",
      link: "https://jgauri24.github.io/RandomQuotes"
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio showcasing skills and projects.",
      link: "https://yourportfolio.com"
    },
    {
      title: "Earth",
      description: "An animated Earth with a realistic day-night cycle and continuous rotation.",
      link: "https://jgauri24.github.io/Earth/"
    }
  ,{
    title: "SimonSays",
    description: '"Simon Says" is a classic memory game where players must recall and replicate a sequence of colors',
    link: "https://jgauri24.github.io/simonsays/"
  }
]
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" style={{textDecoration:'none'}}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
