import axios from 'axios';

const baseUrl = 'http://54.180.94.68:3001';

export function fetchSignIn(email, password) {
  console.log('signin fetch start');
  const userInfo = {
    email,
    password,
  };
  return axios.post(baseUrl + '/users/signIn', userInfo);
}

export function fetchSignUp(email, id, password) {
  const userInfo = {
    email,
    username: id,
    password,
  };
  return axios.post(baseUrl + '/users/signUp', userInfo);
}

export function fetchUserInfoGet() {
  return axios.get(baseUrl + '/users/info');
}

export function signOut() {
  return axios.post(baseUrl + '/users/signOut', {});
}
