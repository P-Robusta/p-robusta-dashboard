/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import axios from 'axios';
import API_URL from 'localhost:8000/api';
// get token
async function callAPI(endpoint, method = 'GET', body) {
  let token;
  return axios({
    method,
    url: `${API_URL}/${endpoint}`,
    headers: { Authorization: `Bearer ${token}` },
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}

export default callAPI;
