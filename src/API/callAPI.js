/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

// call API
export async function callAPI(endpoint, method = 'GET', body) {
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

// Login
export async function postLogin(data, isSave) {
  // console.log(`${API_URL}/login`);
  const method = 'POST';
  let token;
  // console.log(data);
  axios.post(`${API_URL}/login?email=${data.email}&password=${data.password}`).then((res) => {
    console.log(res);
    if (res.data.success) {
      token = res.data.token;
      console.log('token');
      sessionStorage.setItem('__token __', token);
      if (isSave === true) localStorage.setItem('__token__', token);
      // return true;
    } else {
      console.log('Đăng nhập thất bại');
    }
    // return false;
  })
    .catch((err) => {
      console.log(err);
    });
}

export async function callLogin(body, isSave) {
  let token;
  const method = 'POST';
  return axios({
    method,
    url: `${API_URL}/login`,
    headers: {
      Authorization: 'application/json'
    },
    data: body,
  }).then((res) => {
    console.log(res);
    if (res.data.success) {
      token = res.data.data.token;
      console.log(token);
      sessionStorage.setItem('__token __', token);
      if (isSave === true) localStorage.setItem('__token__', token);
      return true;
    }
    return false;
  }).catch((err) => {
    console.log(err);
  });
}
