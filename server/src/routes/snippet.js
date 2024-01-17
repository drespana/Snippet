const express = require('express')
const { Snippet } = require('../models/Snippet')
// const { requiresAuth } = require('express-openid-connect')

const snippetRouter = express.Router();

// get all
snippetRouter.get('/', async (req, res, next)  => {
    try {
        const allSnippets = await Snippet.findAll();
        res.json(allSnippets);
    } catch (err) {
        next(err)
    }
})

// get by ID

// get by language

module.exports = snippetRouter;