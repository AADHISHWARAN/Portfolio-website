import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/AADHISHWARAN"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/aadhish-waran-2210a31a0"><FaLinkedin /></a>
        <a href="mailto:myemailaddress"><FaEnvelope /></a>
      </div>
      <div className="copyright">
        &copy; 2023 My Portfolio
      </div>
    </footer>
  );
}

export default Footer;

