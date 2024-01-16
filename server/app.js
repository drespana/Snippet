require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')
const path = require('path')
const { db } = require("./db/config")
const port = process.env.PORT || 3000

// const routes = require('./routes') 
const snippetRouter = require('./routes/snippets')

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

// app.use('/snippets', routes.snippet)
app.use('/snippets', snippetRouter)
app.use(express.static(path.join(__dirname, 'static')))

async function init() {
    db.sync()
    app.listen(port, () => void console.log("Server listening at http://localhost:"+port))
} 

init()