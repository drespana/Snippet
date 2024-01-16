const express = require('express')
const routes = require('./src/routes');

const app = express()

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:4000',
  clientID: 'r6k6Qugzo6DmFAuSjjmwtkiE9WlexKzr',
  issuerBaseURL: 'https://dev-kqcvt5qlx045drmf.us.auth0.com'
};


app.use(express.json())

app.use(auth(config))

app.use('/user', routes.user)
app.use('/snippet', routes.snippet)

module.exports = {
    app
}