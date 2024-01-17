const {snippets} = require('./sample')
const { Snippet } = require('../models/Snippet')
const { db } = require('./config')

const syncSeed = async ()=> {
    await db.sync({force:true})
    snippets.map(snip => Snippet.create(snip))
}

syncSeed();