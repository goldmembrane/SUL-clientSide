import axios from 'axios';

// const baseUrl = 'http://localhost:3001';
const baseUrl = 'http://54.180.94.68:3001';
const instance = axios.create({
  timeout: 1000,
});
//검색 목록 저장 (클라이언트에서 해줘야함)
export function fetchDismiss(keyword) {
  console.log('Dismiss fetch start');

  return axios.get(baseUrl + '/search/dismiss', {
    params: {
      keyword: keyword,
    },
  });
}
//accept
export function fetchAcc(keyword) {
  console.log('Acc fetch start');

  return axios.get(baseUrl + '/search/accept', {
    params: {
      keyword: keyword,
    },
  });
}
