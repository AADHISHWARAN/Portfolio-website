import React from "react";
import skillsData from "../Components/Skills";
import './portfolio.css';

const Portfolio = () => {
  return (
    <section id="skill">
    <div className="portfolio">
      <div className="skills">
        <h1>Skills</h1>
        <div className="skill-list">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-item">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-percentage">
                <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Portfolio;
