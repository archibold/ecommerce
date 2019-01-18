import axios from 'axios';

export const getProducts = () => {
  return axios.get('/getProducts')
  .then(response => {
    return response.data
  })
}
export const checkCard = (creditcard) => {
  const ccdata = {
    ...creditcard
  };

  return axios.post('/generateToken', ccdata)
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

  return axios.post('/saleByToken', saleInfo)
  .then(response => {
    return response.data
  })
}
