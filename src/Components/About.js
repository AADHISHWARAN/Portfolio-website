import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about">
    <div className="aboutMe">
      <h1>About Me!</h1>
      <div className="container">
        <div className="aboutMe__content">
          <p>
            Hi, I'm Aadhish! I'm a web developer with a passion for building beautiful and functional websites. I have experience with HTML, CSS, JavaScript, React, and more. In my free time, I enjoy hiking, painting, and playing with my pets.
          </p>
        </div>
        <img src="https://w7.pngwing.com/pngs/648/865/png-transparent-charm-bracelet-pandora-logo-drawing-all-about-me-thumbnail.png" alt="Profile Picture" />
      </div>
    </div>
    </section>
  );
}

export default About;

