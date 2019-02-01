import axios from 'axios';
const url = process.env.GATSBY_NODE_ENV === 'production' ? process.env.GATSBY_API_URL : '';

export const checkCard = (creditcard) => {
  const ccdata = {
    ...creditcard
  };

  return axios.post(url +'/api/generateToken', ccdata)
  .then(response => {
    return response.data
  })
}

export const onBuyProduct = (customer, product, token) => {
  const saleInfo = {
    customer: {
      ip: '0.0.0.0',
      ...customer
    },
    sale: {
      currency: 'PLN',
      amount: product.price,
      description: product.title
    },
    card: {
      token: token
    }
  }

  return axios.post(url + '/api/saleByToken', saleInfo)
  .then(response => {
    return response.data
  })
}

export const getProducts = () => {
  return axios.get(url + '/api/products')
  .then(response => {
    return response.data;
  })
}

// - [x] GET /api/products
// - [ ] PUT /api/product
// - [ ] POST /login
// - [ ] POST /logout
