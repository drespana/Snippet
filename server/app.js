require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
// const logger = require('morgan')
// const path = require('path')
const port = process.env.PORT || 3000

const snippetRouter = require('./routes/snippets')

app.use(express.json())
app.use(cors())
// app.use(logger('dev'))

app.use('/snippets', snippetRouter)
// app.use(express.static(path.join(_dirname, 'static')))


app.listen(port, () => void console.log("Server listening at http:localhost:"+port))