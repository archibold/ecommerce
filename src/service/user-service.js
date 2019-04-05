import axios from 'axios';
const url = process.env.NODE_ENV === 'production' ? process.env.GATSBY_API_URL : '';

export const getUserProducts = () => {
  return axios.get(url + '/api/user-products')
    .then(response => {
      return response.data;
    });
}

export const addNewProduct = (product) => {
  return axios.put(url + '/api/product', product)
    .then(response => {
      return response.data;
    });
}
