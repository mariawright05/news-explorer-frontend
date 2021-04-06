import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__copyright">&#169; 2021 Maria Wright, Powered by News API</p>
      <ul className="footer__nav">
        <li className="footer__nav-text">
          <Link to="/" className="footer__nav-link">Home</Link>
        </li>
        <li className="footer__nav-text">
          <Link to="https://practicum.yandex.com/web/" className="footer__nav-link">Practicum by Yandex</Link>
        </li>
        <li>
          <Link to="https://github.com/mariawright05" className="footer__nav-icon">
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/mariawright05/" className="footer__nav-icon">
            <FaLinkedin />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
