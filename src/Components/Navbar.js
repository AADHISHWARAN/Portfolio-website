import React from "react";
import './Navbar.css';

const Navbar=()=>
{
    return (
<div class="hero">
<nav>
  <img src="https://images.pexels.com/photos/3791130/pexels-photo-3791130.jpeg?auto=compress&cs=tinysrgb&w=600" class="logo" />
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skill">Skills</a></li>
    <li><a href="#contact1">Contact</a></li>
  </ul>

</nav>
<div class="content">
  <span class="title">Freelance Web Developer</span>
  <h1>Hello, I’m<span>Aadhi</span></h1>
  <p>
    I’m working on a professional, visually sophisticated and
    technologically proficient, responsive and multi-functional React
    Components.
  </p>

</div>
</div>
    );
}
export default Navbar;