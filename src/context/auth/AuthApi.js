/* eslint-disable quote-props */
/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
import { AUTH_URL } from '../../utils/configData.json';

export const loadUser = async (token) => {
  const res = await fetch(`${AUTH_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-auth-token': `${token}`,
    },
  });
  const data = await (res.ok
    ? res.json()
    : res.json().then(err => PromiseRejectionEvent.reject(err)));
  return data;
};

export const login = async ({ email, password }) => {
  const res = await fetch(`${AUTH_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await (res.ok
    ? res.json()
    : res.json().then((err) => { throw new Error(err); }));
  return data;
};

export const register = async ({ name, email, password }) => {
  const res = await fetch(`${AUTH_URL}/signup`, {
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
  });
  const data = await (res.ok
    ? res.json()
    : res.json().then((err) => { throw new Error(err); }));
  return data;
};
