/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import NewsContext from '../../context/news/newsContext';
import AuthContext from '../../context/auth/authContext';
import './UserInfo.css';

const UserInfo = () => {
  const newsContext = useContext(NewsContext);
  const { savedCards } = newsContext;

  const authContext = useContext(AuthContext);
  const { username } = authContext;

  // Extracts keywords from objects in saved cards array
  const extractArr = savedCards.map((a) => { return a.keyword; });

  // Takes out undefined values from array
  const filteredArr = extractArr.filter((keyword) => {
    return keyword !== undefined;
  });

  // Sorts keywords by decending frequency, including duplicates
  const sortByFrequency = (arr) => {
    const frequencyMap = arr.reduce((obj, item) => {
      obj[item] = (obj[item] || 0) + 1;
      return obj;
    }, {});

    return Object.entries(frequencyMap)
      .sort((a, b) => { return b[1] - a[1]; })
      .flatMap((arr) => { return Array(arr[1]).fill(arr[0]); });
  };

  const sortedArr = sortByFrequency(filteredArr);
  // Takes duplicate keywords out of array
  const reducedKeywords = [...new Set(sortedArr)];
  // Makes string of list of up to 3 keywords
  const fullList = reducedKeywords.join(', ');
  // Makes string of 1st and 2nd most frequent keywords
  // and states total keywords left
  const shortList = `${reducedKeywords
    .slice(0, 2)
    .join(', ')}, and ${reducedKeywords.length - 2} more`;
  // Makes final list to display
  const makeList = (items) => {
    if (items.length < 4) {
      return fullList;
    }
    return shortList;
  };

  const numArticles = () => {
    return filteredArr.length === 1
      ? `${username}, you have 1 saved article`
      : `${username}, you have ${filteredArr.length} saved articles`;
  };

  return (
    <div className="userInfo">
      <div className="userInfo__container">
        <h1 className="userInfo__title">Saved articles</h1>
        <p className="userInfo__stats">{numArticles()}</p>
        <p className="userInfo__keywords">
          By keywords:
          <span className="userInfo__keywords_strong">
            &nbsp;
            {makeList(reducedKeywords)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
