import React from 'react';
import './Author.css';
import Image from '../../images/maria-wright.jpg';

const Author = () => {
  return (
    <div className="author">
      <div className="author__image-container">
        <img
          className="author__image"
          src={Image}
          alt="Maria Wright"
        />
      </div>
      <div className="author__text-container">
        <h2 className="author__title">About the author</h2>
        <p className="author__body">I have been creating websites for clients for many years, but found myself loving the technical parts of web development more than the design.</p>
        <p className="author__body">After completing Practicum&apos;s Web Developer program, I am excited about bringing my new skills to clients.</p>
      </div>
    </div>
  );
};

export default Author;
