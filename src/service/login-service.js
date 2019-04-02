import axios from 'axios';
const url = process.env.NODE_ENV === 'production' ? process.env.GATSBY_API_URL : '';

export const isAuth = () => {
  return axios.get(url + '/admin/isAuth')
    .then(response => {
      return true;
    }).catch(error => {
      return false;
    });
}

export const login = (email, password) => {
  const loginInfo = {
    email,
    password,
  };

  return axios.post(url + '/admin/login', loginInfo)
    .then(response => {
      return new Promise(function(resolve, reject) {
        resolve(response);
      });
    }).catch(error => {
      return new Promise(function(resolve, reject) {
        reject(error);
      });
    });
}

export const register = (email, password) => {
  const registerInfo = {
    email,
    password,
  };

  return axios.post(url + '/admin/register', registerInfo)
    .then(response => {
      return new Promise(function(resolve, reject) {
        resolve(response);
      });
    }).catch(error => {
      return new Promise(function(resolve, reject) {
        reject(error);
      });
    });
}

export const logout = () => {
  return axios.get(url + '/admin/logout')
    .then(response => {
      return new Promise(function(resolve, reject) {
        resolve(true);
      });
    }).catch(error => {
      return new Promise(function(resolve, reject) {
        reject(error);
      });
    });
}

// API create profile
// API get profile
