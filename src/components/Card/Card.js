/* eslint-disable no-nested-ternary */
import React, { useContext, useState } from 'react';
import PageContext from '../../context/page/PageContext';
import NewsContext from '../../context/news/newsContext';
import AuthContext from '../../context/auth/authContext';
import './Card.css';

const Card = ({ card }) => {
  const {
    url,
    urlToImage,
    publishedAt,
    title,
    description,
    source,
    isSaved,
    keyword,
  } = card;

  const page = useContext(PageContext);
  const newsContext = useContext(NewsContext);
  const authContext = useContext(AuthContext);

  const { deleteCard, setIsSaved } = newsContext;
  const { isAuth } = authContext;

  const [iconHoverShown, setIconHoverShown] = useState(false);

  const handleDeleteClick = () => {
    setIsSaved(card);
    deleteCard(card);
  };

  const convertDateFormat = (p) => {
    const pubdate = new Date(p).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    return pubdate;
  };

  const cardButtonType = `${
    page === 'saved-news'
      ? 'card__icon_trash'
      : isSaved
        ? 'card__icon_save_true'
        : 'card__icon_save'
  }`;

  let iconHoverMessage;

  if (page === 'saved-news') {
    iconHoverMessage = 'Remove from saved';
  } else if (!isAuth) {
    iconHoverMessage = 'Sign in to save articles';
  }

  const handleSaveClick = () => {
    if (isAuth) {
      setIsSaved(card);
    }
  };

  const handleSaveHover = () => {
    if (!(iconHoverMessage === undefined)) {
      setIconHoverShown(true);
    }
  };

  return (
    <li className="card">
      <img className="card__image" src={urlToImage} alt={title} />
      <button
        type="button"
        className={cardButtonType}
        onClick={page === 'saved-news' ? handleDeleteClick : handleSaveClick}
        onMouseEnter={handleSaveHover}
        onMouseLeave={() => { setIconHoverShown(false); }}
        aria-label="card action"
      />
      {iconHoverShown && (
        <div className="card__hover-wrapper">
          <p className="card__hover-text">{ iconHoverMessage }</p>
        </div>
      )}
      {page === 'saved-news' && (
        <div className="card__keyword-wrapper">
          <p className="card__keyword-text">{keyword}</p>
        </div>
      )}
      <a href={url} target="_blank" rel="noopener noreferrer" className="card__text-wrapper">
        <p className="card__pubDate">{convertDateFormat(publishedAt)}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <p className="card__source">{source.name}</p>
      </a>
    </li>
  );
};

export default Card;
