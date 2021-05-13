import React from 'react';
import './UserInfo.css';

const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="userInfo__container">
        <h1 className="userInfo__title">Saved articles</h1>
        <p className="userInfo__stats">Elise, you have 5 saved articles</p>
        <p className="userInfo__keywords">
          By keywords:
          <span className="userInfo__keywords_strong">
            &nbsp;Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
