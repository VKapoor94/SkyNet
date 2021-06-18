import defaultAxios from 'axios';

const axios = defaultAxios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {'Content-Type': 'application/json'},
});

export default axios;
