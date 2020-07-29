import axios from 'axios';

const baseUrl = 'http://localhost:3001';

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
export function putUserInfo(username) {
  const userInfo = {
    username,
  };
  return axios.put(baseUrl + '/users/info', userInfo);
}

export function postSignOut() {
  return axios.post(baseUrl + '/users/signOut', {});
}
