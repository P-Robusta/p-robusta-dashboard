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
  console.log(data);
  axios.post(`${API_URL}/login`, data).then((res) => {
    if (res.success) {
      console.log('Đăng nhập thành công');
      token = res.token;
      sessionStorage.setItem('__token__', token);
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

  // return axios({
  //   method,
  //   url: `${API_URL}/login`,
  //   data: body,
  // }).then((res) => {
  //   if (res.success) {
  //     console.log('Đăng nhập thành công');
  //     token = res.token;
  //     sessionStorage.setItem('__token__', token);
  //     if (isSave === true) localStorage.setItem('__token__', token);
  //     // return true;
  //   } else {
  //     console.log('Đăng nhập thất bại');
  //   }
  //   // return false;
  // })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}
