import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__copyright">&#169; 2021 Maria Wright, Powered by News API</p>
      <ul className="footer__nav">
        <div className="footer__nav-text-wrapper">
          <li className="footer__nav-text">
            <Link to="/" className="footer__nav-link">Home</Link>
          </li>
          <li className="footer__nav-text">
            <a href="https://practicum.yandex.com/web/" target="_blank" rel="noreferrer" className="footer__nav-link">Practicum by Yandex</a>
          </li>
        </div>
        <div className="footer__nav-icon-wrapper">
          <li>
            <a href="https://github.com/mariawright05" rel="noreferrer" target="_blank" className="footer__nav-icon">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mariawright05/" rel="noreferrer" target="_blank" className="footer__nav-icon">
              <FaLinkedin />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Footer;
