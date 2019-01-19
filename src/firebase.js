const config = {
  apiKey: process.env.GATSBY_FB_API_KEY,
  authDomain: process.env.GATSBY_FB_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FB_DATABASE_URL,
  projectId: process.env.GATSBY_FB_PROJECT_ID,
  storageBucket: process.env.GATSBY_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FB_MESSAGING_SENDER_ID
}

let firebaseCache

const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache
  }

  firebase.initializeApp(config)
  firebaseCache = firebase
  return firebase
}

export default getFirebase
