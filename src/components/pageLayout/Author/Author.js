import React from 'react';
import './Author.css';
import Image from '../../../images/maria-wright.jpg';

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
        <p className="author__body">This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.</p>
        <p className="author__body">You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p>
      </div>
    </div>
  );
};

export default Author;
