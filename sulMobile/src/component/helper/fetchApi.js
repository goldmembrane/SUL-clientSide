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

export function fetchJudicial(keyword) {
  console.log('fetchJudicial start');
  //키워드로 검색
  const obj = {
    keyword,
  };
  return axios.post(baseUrl + '/search/post', obj);
}
// export function fetchJudicialGet(keyword) {
//   //키워드로 검색
//   return axios.get(baseUrl + '/search/get', {
//     params: {
//       keyword: keyword,
//     },
//   });
// }

export function lawgo(keywords) {
  //키워드로 검색
  const number = Number(keywords);
  return axios.get(
    // 'http://www.law.go.kr/LSW/precInfoP.do?precSeq=77690&mode=0',
    `http://www.law.go.kr/LSW/precInfoP.do?precSeq=${number}&mode=0`,
    // 'http://sw.hanyang.ac.kr/board/notice.php?ptype=&page=1&code=notice',
    // {
    //   params: {
    //     keyword: keywords,
    //   },
    // },
  );
}
