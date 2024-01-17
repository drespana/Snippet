require('dotenv').config();
const express = require('express')
const { auth } = require('express-openid-connect');
const {db} = require('./src/db/config')
const PORT = process.env.PORT || 3000;
const app = express()
// const snippetRouter = require('../server/src/routes/snippet');

///////////// Really don't want this here ////////////////////////////
const {Snippet} = require('./src/models/Snippet')
const {snippets} = require('./src/db/sample')

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:4000',
  clientID: 'r6k6Qugzo6DmFAuSjjmwtkiE9WlexKzr',
  issuerBaseURL: 'https://dev-kqcvt5qlx045drmf.us.auth0.com'
};
app.use(auth(config))

app.get("/", (req, res) => {
    res.send("Snipper Snippets API");
  });


app.use(express.json())

// app.use('/snippet', routes.snippet)
// app.use('/snippet', snippetRouter)


async function init() {
    db.sync()
    // snippets.map((snip)=>Snippet.create(snip))
    // const all = await Snippet.findAll()
    // console.log(all)
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
      }) 
    
}

init();