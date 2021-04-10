import React from 'react';
import { Link } from 'react-router-dom';
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
  console.log(image);

  return (
    <li className="card">
      <img className="card__image" src={image} alt={title} />
      <Link to={url} className="card__text-wrapper">
        <p className="card__pubDate">{pubDate}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <p className="card__source">{source}</p>
      </Link>
    </li>
  );
};

export default Card;
