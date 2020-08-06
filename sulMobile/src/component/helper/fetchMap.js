import axios from 'axios';

// const baseUrl = 'http://localhost:3001';
const baseUrl = 'http://54.180.94.68:3001';

export async function fetchMarker() {
  console.log('fetchMap start');
  return axios.get(baseUrl + '/maps/marker');
}
