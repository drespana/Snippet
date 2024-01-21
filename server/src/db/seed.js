const {snippets} = require('./sample')
const { Snippet } = require('../models/Snippet')
const { db } = require('./config')

 const syncSeed = async ()=> {
    await db.sync({force:true})
    snippets.map(snippet => Snippet.create(snippet))
    console.log("db populated.")
}

//  syncSeed();

module.exports = {
    syncSeed
}