import axios from 'axios';

// const baseUrl = 'http://localhost:3001';
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
export function putUserInfo(username) {
  //유저정보 수정
  const userInfo = {
    username,
  };
  return axios.put(baseUrl + '/users/info', userInfo);
}

export function postSignOut() {
  return axios.post(baseUrl + '/users/signOut', {});
}

export function fetchJudicial(keywords) {
  console.log('start');
  //키워드로 검색
  const obj = {
    keywords,
  };
  return axios.post(baseUrl + '/search/post', obj);
}
export function fetchJudicialGet(keywords) {
  //키워드로 검색
  return axios.get(baseUrl + '/search/get', {
    params: {
      keyword: keywords,
    },
  });
}

export function lawgo(keywords) {
  //키워드로 검색
  return axios.get(
    'http://www.law.go.kr/LSW/precInfoP.do?precSeq=77690&mode=0',
    {
      // params: {
      //   keyword: keywords,
      // },
    },
  );
}
