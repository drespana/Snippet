require('dotenv').config();
const {app} = require('./app')
const {db} = require('./src/db/config')
const PORT = process.env.PORT || 3000;

const {Snippet} = require('./src/models/Snippet')
const {snippets} = require('./src/db/sample')

async function init() {
    db.sync()
    snippets.map((snip)=>Snippet.create(snip))
    const all = await Snippet.findAll()
    console.log(all)
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
      }) 
}

init();