import axios from 'axios';

// const baseUrl = 'http://localhost:3001';
const baseUrl = 'http://54.180.94.68:3001';

export async function fetchMarker() {
  return axios.get(baseUrl + '/maps/marker');
}
