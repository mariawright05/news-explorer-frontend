import React, { useContext } from 'react';
import PageContext from '../../context/page/PageContext';
import NewsContext from '../../context/news/newsContext';
import './Card.css';

const Card = ({ card }) => {
  const {
    url,
    image,
    pubDate,
    title,
    description,
    source,
    isSaved,
    // keyword,
  } = card;

  const page = useContext(PageContext);
  const newsContext = useContext(NewsContext);

  const { deleteCard, setIsSaved } = newsContext;

  const handleDeleteClick = () => {
    setIsSaved(card);
    deleteCard(card.id);
  };

  // if (page === 'saved-news') {
  //   cardButtonType = 'card__icon_trash';
  // } else if (isSaved) {
  //   cardButtonType = 'card__icon_save_true';
  // } else {
  //   cardButtonType = 'card__icon_save';
  // }

  const cardButtonType = `${
    // eslint-disable-next-line no-nested-ternary
    page === 'saved-news'
      ? 'card__icon_trash'
      : isSaved
        ? 'card__icon_save_true'
        : 'card__icon_save'
  }`;

  const handleSaveClick = () => {
    setIsSaved(card);
  };

  return (
    <li className="card">
      <img className="card__image" src={image} alt={title} />
      <button
        type="button"
        className={cardButtonType}
        onClick={page === 'saved-news' ? handleDeleteClick : handleSaveClick}
        aria-label="card action"
      />
      <a href={url} target="_blank" rel="noopener noreferrer" className="card__text-wrapper">
        <p className="card__pubDate">{pubDate}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <p className="card__source">{source}</p>
      </a>
    </li>
  );
};

export default Card;
