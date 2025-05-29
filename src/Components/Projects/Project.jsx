import React from 'react';
import './Project.css';

const Projects = () => {
  const projectData = [
    {
      title: "Github-user-finder",
      description: "A simple web app to search and view GitHub user profiles using the GitHub REST API.",
      link: "https://jgauri24.github.io/github-user-finder/"
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio showcasing skills and projects.",
      link: "https://portfolio-jgauri24s-projects.vercel.app/"
    },
    {
      title: "Earth",
      description: "An animated Earth with a realistic day-night cycle and continuous rotation.",
      link: "https://jgauri24.github.io/Earth/"
    }
  ,{
    title: "SimonSays",
    description: 'Simon Says" is a classic memory game where players must recall and replicate a sequence of colors',
    link: "https://jgauri24.github.io/simonsays/"
  },{
    title: "WordGuess",
    description: 'A guessing game built with JavaScript, featuring hints, score tracking, and interactive letter buttons.',
    link: "https://jgauri24.github.io/word_guess/"
  },{
    title: "ExpenseTracker",
    description: 'Track income, expenses, balance, with history.',
    link: "https://jgauri24.github.io/expense_tracker/"
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
