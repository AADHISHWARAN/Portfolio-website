import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="card-container">
        <div className="card">
          <img src="project-image.jpg" alt="Project 1" />
          <h3>Project 1</h3>
          <p> </p>
        </div>
        <div className="card">
          <img src="project-image.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p> </p>
        </div>
        <div className="card">
          <img src="project-image.jpg" alt="Project 3" />
          <h3>Project 3</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
