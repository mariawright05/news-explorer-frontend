/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
import { SEARCH_URL, API_KEY, AUTH_URL } from '../../utils/configData.json';

// Search the news API for articles with searchterm in last 7 days
export const searchNews = async (searchTerm) => {
  const today = new Date();
  const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  // Formats date for API request parameter requirements
  const ISOToday = today.toISOString();
  const ISOLastWeek = lastWeek.toISOString();

  const res = await fetch(`${SEARCH_URL}?q=${searchTerm}&apiKey=${API_KEY}&from=${ISOLastWeek}&to=${ISOToday}&pageSize=${100}&sortBy=publishedAt&language=en`);
  const data = await (res.ok
    ? res.json()
    : res.json().then((err) => { throw new Error(err); }));
  return data;
};

// Add or delete card from user's saved articles
export const updateSave = async (method, id, body, token) => {
  const res = await fetch(`${AUTH_URL}/articles/${id}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': `${token}`,
    },
    body,
  });
  return (res.ok
    ? res.json()
    : res.json().then((err) => { throw new Error(err); }));
};

// Retrieve a user's saved cards
export const getSavedCards = async (token) => {
  const res = await fetch(`${AUTH_URL}/articles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': `${token}`,
    },
  });
  return (res.ok
    ? res.json()
    : res.json().then((err) => { throw new Error(err); }));
};
