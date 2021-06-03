/* eslint-disable quote-props */
/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
import { DEV_AUTH_URL } from '../../utils/configData.json';

export const loadUser = (token) => {
  return fetch(`${DEV_AUTH_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-auth-token': `${token}`,
    },
  })
    .then((res) => {
      return res.ok
        ? res.json()
        : res.json().then(err => PromiseRejectionEvent.reject(err));
    })
    .then(data => data);
};

export const login = ({ email, password }) => {
  return fetch(`${DEV_AUTH_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => {
      return res.ok
        ? res.json()
        : res.json().then((err) => { throw new Error(err); });
    })
    .then(data => data);
};

export const register = ({ name, email, password }) => {
  return fetch(`${DEV_AUTH_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  })
    .then((res) => {
      return res.ok
        ? res.json()
        : res.json().then((err) => { throw new Error(err); });
    })
    .then(data => data);
};
