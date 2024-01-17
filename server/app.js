require('dotenv').config();
const express = require('express')
const PORT = process.env.PORT || 3000;
const app = express()


// const routes = require('./src/routes')
const router = require('../server/src/routes/snippet');

app.use(express.json())

// app.use('/snippet', routes.snippets)
// app.use('./user', routes.user)
app.use('/snippet', router)

async function init() {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
      })  
}

init();