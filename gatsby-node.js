// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */
//
// // You can delete this file if you're not using it
const publicApiKey = process.env.PL_PUBLIC_API_KEY;
const paylane_login = process.env.PL_LOGIN;
const paylane_pass = process.env.PL_PASS;
const config = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
};

const axios = require('axios');
const bodyParser = require('body-parser');
const app = require('firebase/app');
const database = require('firebase/database');

let firebaseCache

const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache
  }

  firebase.initializeApp(config)
  firebaseCache = firebase
  return firebase
}

let firebase;
Promise.all([app, database]).then(values => {
  firebase = getFirebase(values[0]);
})

exports.onCreateDevServer = ({ app }) => {
  app.use(bodyParser.json());

  app.post('/generateToken', function (req, res) {
    const ccdata = req.body;
    ccdata.public_api_key = publicApiKey;

    axios.post('https://direct.paylane.com/rest.js/cards/generateToken', ccdata)
      .then(response => {
        res.send(response.data)
      });

  })

  app.post('/saleByToken', function (req, res) {
    const ccdata = req.body;
    axios.post(encodeURI(`https://${paylane_login}:${paylane_pass}@direct.paylane.com/rest/cards/saleByToken`), ccdata)
      .then(response => {
        res.send(response.data)
      });
  })

  app.get('/getProducts', function(req, res) {
    firebase
      .database()
      .ref('/products')
      .once('value')
      .then(snapshot => {
        res.send(snapshot.val())
      });
  })
}
