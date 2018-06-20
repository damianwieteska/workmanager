import axios from 'axios';

const axiosInstance =  axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`
});

axiosInstance.defaults.baseURL = 'http://localhost:3000/api';
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.common['Accept'] = 'application/json';
let tokenDom = document.querySelector("meta[name=csrf-token]");
if (tokenDom) {
  const csrfToken = tokenDom.content;
  axiosInstance.defaults.headers.common['X-CSRF-Token'] = csrfToken;
}

export { axiosInstance };