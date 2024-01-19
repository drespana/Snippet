require('dotenv').config();
const express = require('express')
const { auth } = require('express-openid-connect');
const {db} = require('./src/db/config')
const PORT = process.env.PORT || 3000;
const app = express()
const routes = require('./src/routes')
// const snippetRouter = require('../server/src/routes/snippet');
///////////// Really don't want this here ////////////////////////////
const {Snippet} = require('./src/models/Snippet')
const {snippets} = require('./src/db/sample')


app.use(express.json())

app.use('/snippet', routes.snippets)
// app.use('./user', routes.user)
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