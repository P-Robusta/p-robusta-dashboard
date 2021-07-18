/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

// const API_URL =
// axios.defaults.baseURL = 'https://passerellesnumeriques-robusta.herokuapp.com/api';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
// call API
export async function callAPI(endpoint, method = 'GET') {
  const token = sessionStorage.getItem('__token__');
  return axios({
    method,
    url: `${endpoint}`,
    headers: { Authorization: `Bearer ${token}` },
  }).catch((err) => {
    console.log(err);
  });
}

// Login
export async function callLogin(body, isSave) {
  let token;
  const method = 'POST';
  return axios({
    method,
    url: 'login',
    headers: {
      Authorization: 'application/json'
    },
    data: body,
  }).then((res) => {
    if (res.data.success) {
      token = res.data.data.token;
      sessionStorage.setItem('__token__', token);
      if (isSave === true) localStorage.setItem('__token__', token);
      return true;
    }
    return false;
  }).catch((err) => false);
}
// Banner
export async function getBanner(endpoint = 'banners', method = 'GET') {
  const token = sessionStorage.getItem('__token__');
  return axios({
    method,
    url: `${endpoint}`,
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
  }).then((res) => res.data.data).catch((err) => false);
}
export async function postBanner(body) {
  const token = sessionStorage.getItem('__token__');
  const method = 'POST';
  return axios({
    method,
    url: 'banners',
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
    data: body,
  }).then((res) => {
    console.log(res.data);
    return res.data.data;
  }).catch((err) => {
    console.log(err);
    return 'Retrieving data failed!';
  });
}

// Notifications
export async function getNotification(endpoint = 'notifications', method = 'GET') {
  const token = sessionStorage.getItem('__token__');
  return axios({
    method,
    url: `${endpoint}`,
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
  }).then((res) => res.data.data).catch((err) => false);
}
