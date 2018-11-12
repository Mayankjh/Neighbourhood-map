import React from 'react';
import './Footer.css';
import ReactIcon from '../../assets/imgs/logo.svg';

const Footer = () => (
  <footer>
    <p className="made-with">
      Made With
      <img src={ReactIcon} alt="React" title="React"/>
      by <a href="https://mayankjh.github.io/" target="_blank" rel="noopener noreferrer">Mayank Jha</a>
    </p>
    <div className="icons">
      Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 </a>
    </div>
  </footer>
);

export default Footer;
