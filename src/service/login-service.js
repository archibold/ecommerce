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
      return true;
    }).catch(error => {
      return false;
    });
}

export const logout = () => {
  return axios.get(url + '/admin/logout')
    .then(response => {
      return true;
    }).catch(error => {
      return false;
    });
}

// API create profile
// API get profile
