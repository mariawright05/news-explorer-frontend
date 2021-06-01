/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
import { SEARCH_URL, API_KEY, DEV_AUTH_URL } from '../../utils/configData.json';

export const searchNews = (searchTerm) => {
  const today = new Date();
  const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  // Formats date for API request parameter requirements
  const ISOToday = today.toISOString();
  const ISOLastWeek = lastWeek.toISOString();

  return fetch(`${SEARCH_URL}?q=${searchTerm}&apiKey=${API_KEY}&from=${ISOLastWeek}&to=${ISOToday}&pageSize=${100}&sortBy=publishedAt&language=en`)
    .then((res) => {
      return res.ok
        ? res.json()
        : res.json().then((err) => { throw new Error(err); });
    })
    .then(data => data);
};

export const updateSave = (card, token) => {
  console.log('4 - about to fetch, token: ', token);
  return fetch(`${DEV_AUTH_URL}/articles`, {
    method: card.isSaved ? 'POST' : 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': `${token}`,
    },
    body: JSON.stringify({
      keyword: card.keyword,
      title: card.title,
      text: card.description,
      date: card.publishedAt,
      source: card.source.name,
      url: card.url,
      image: card.urlToImage,
      owner: token,
    }),
  })
    .then((res) => {
      console.log('5 - sent to server, res: ', res);
      return res.ok
        ? res.json()
        : res.json().then((err) => { throw new Error(err); });
    });
};
