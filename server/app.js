const { syncSeed }= require('./src/db/seed');
require('dotenv').config();
const express = require('express');
// const { auth } = require('express-openid-connect');
const {db} = require('./src/db/config');
const PORT = process.env.PORT || 4000;
const app = express();

const routes = require('./src/routes/index');

// const snippetRouter = require('../server/src/routes/snippet');

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Server is sprinting")
  res.send("Snipper Snippets API");
});

app.use('/snippets', routes.snippets);
app.use('/users', routes.users);

async function init() {
    db.sync()
     .then(await syncSeed())

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
      })  
     
}

init();