import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../Home/Home';
import './NavBar.css';

function Navbar() {

  return (
    <>
    <nav>
    <h4 className="fa fa-bars"></h4>
    <h1>Sandy <br />Martins</h1>
      <ul>
        <li><a><Link to="/Home">Home</Link></a></li>
        <li><a><Link to="/About">About</Link></a></li>
        <li><a><Link to="/Skills">Skills</Link></a></li>
        <li><a><Link to="/Projects">Projects</Link></a></li>
        <li><a><Link to="/Contact">Contact</Link></a></li>
        <li><a><Link to="/CV" className="active">CV</Link></a></li>
      </ul>
      <a href="https://www.linkedin.com/in/sandymartinss/" alt='Linkedin'><img src="https://i.imgur.com/8XlYnHb.png" alt="Linkedin" /></a>
      <a href="https://github.com/sandymartins" alt='GitHub'><img src="https://i.imgur.com/r0R7fHO.png" alt="GitHub" /></a>
      <a href="https://www.instagram.com/direct/inbox/" alt='Instagram'><img src="https://i.imgur.com/QmjC82h.png" alt="Instagram" /></a>
  </nav>
    </>
  );
};

export default Navbar;