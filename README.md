# Gatsby Ecommerce Firebase

## What's included

- Firebase
- API for this ecommerce you can find here: https://github.com/archibold/ecommerce-api

## environment variables
use `.env.development` for set development environment variable or `.env.production` for production.

set a firebase and API url

```
GATSBY_FB_API_KEY=
GATSBY_FB_AUTH_DOMAIN=
GATSBY_FB_DATABASE_URL=
GATSBY_FB_PROJECT_ID=
GATSBY_FB_STORAGE_BUCKET=
GATSBY_FB_MESSAGING_SENDER_ID=
GATSBY_FB_FUNCTION_URL=
API_URL=
```
for production, you have to set also
```
GATSBY_API_URL=
GATSBY_NODE_ENV=production
```

### Develop

```
npm run develop
```

### Build

```
npm run build
```

Your built file will be in `/public`


### Deploy

Use Github to share you code and Netlify for deploying

**Enjoy!**
