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

// API Login
// API Logout
// API create profile
// API get profile
