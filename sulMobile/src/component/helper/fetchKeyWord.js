import axios from 'axios';

// const baseUrl = 'http://localhost:3001';
const baseUrl = 'http://54.180.94.68:3001';
const instance = axios.create({
  timeout: 1000,
});
//검색 목록 저장
// export function fetchKeyPost(dismiss, total, keyword) {
//   console.log('signin fetch start');
//   const obj = {
//     dismiss,
//     total,
//     keyword,
//   };
//   return axios.post(baseUrl + '/keyword/post', obj);
// }
//검색 목록 가져옴
export function fetchKeyGet() {
  return axios.get(baseUrl + '/keyword/get');
}
export function fetchKeyDel(keyword) {
  return axios.delete(baseUrl + 'keyword/delete', {
    params: {
      id: keyword,
    },
  });
}
