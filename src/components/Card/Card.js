import React, { useContext } from 'react';
import PageContext from '../../context/page/PageContext';
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

  const page = useContext(PageContext);

  const deleteSavedCard = () => {
    console.log('delete');
  };

  const handleSave = () => {
    console.log('save/unsave');
  };

  const cardButtonType = `${page === 'saved-news' ? 'trashButton' : 'saveButton'}`;
  const handleButtonClick = page === 'saved-news' ? deleteSavedCard() : handleSave();

  console.log(cardButtonType, handleButtonClick);

  return (
    <li className="card">
      <img className="card__image" src={image} alt={title} />
      <button
        type="button"
        className={cardButtonType}
        onClick={handleButtonClick}
        aria-label="card action"
      />
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
