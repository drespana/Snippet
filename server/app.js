const express = require('express')
const snippetRouter = require('../server/src/routes/snippet');
// const { auth } = require('express-openid-connect');


// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: 'a long, randomly-generated string stored in env',
//   baseURL: 'http://localhost:4000',
//   clientID: 'r6k6Qugzo6DmFAuSjjmwtkiE9WlexKzr',
//   issuerBaseURL: 'https://dev-kqcvt5qlx045drmf.us.auth0.com'
// };
// app.use(auth(config))
//
// app.get("/", (req, res) => {
//     res.send("Snipper Snippets API");
//   });


const app = express()

app.use(express.json())

// app.use('/user', routes.user)
app.use('/snippet', snippetRouter)

module.exports = {
    app
}