import axios from 'axios';

// const baseUrl = 'http://localhost:3001';
const baseUrl = 'http://54.180.94.68:3001';
const instance = axios.create({
  timeout: 1000,
});
//검색 목록 저장 (클라이언트에서 해줘야함)
export async function fetchDismiss(keyword) {
  console.log('Dismiss fetch start', keyword);
  const a = await axios.get(baseUrl + '/search/dismiss', {
    params: {
      keyword: keyword,
    },
  });
  return a;
}
//accept
export async function fetchAcc(keyword) {
  console.log('Acc fetch start');
  const a = await axios.get(baseUrl + '/search/accept', {
    params: {
      keyword: keyword,
    },
  });
  return a;
}
