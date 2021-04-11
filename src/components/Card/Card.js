import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  const {
    url,
    image,
    pubDate,
    title,
    description,
    source,
  } = card;

  return (
    <li className="card">
      <img className="card__image" src={image} alt={title} />
      <a href={url} className="card__text-wrapper">
        <p className="card__pubDate">{pubDate}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <p className="card__source">{source}</p>
      </a>
    </li>
  );
};

export default Card;
