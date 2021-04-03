import React from 'react';
import './Card.css';
import PlaceholderImg from '../../../images/pinnacles.jpeg';

const Card = () => {
  return (
    <div>
      <div className="card">
        <img className="card__image" src={PlaceholderImg} alt="Pinnacles" />
        <div className="card__text-wrapper">
          <p className="card__pubDate">April 1, 2020</p>
          <h3 className="card__title">Hike the Pinnacles</h3>
          <pre className="card__description">The Pinnacles in the Berea College Forest were recently recognized as the best hike in Kentucky according to Outside magazine. The publication’s April 2019  issue listed the best hikes in each state, and the Pinnacles topped the list in Kentucky for their beautiful views, proximity to Daniel Boone National Forest and easy access to local attractions.</pre>
          <p className="card__source">visitberea</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
