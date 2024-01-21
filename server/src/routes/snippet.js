// const express = require('express');
const snippetRouter = require("express").Router();
const { Snippet } = require('../models/Snippet')
const {encrypt, decrypt} = require('../utils/encrypt')
// const { requiresAuth } = require('express-openid-connect')

// const router = express.Router();

// get all snippets
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


// create a new snippet
// snippetRouter.post('/', async (req, res) => {
//     const { language, code } = req.body

//     if (!language || !code) {
//         return res
//             .status(400)
//             .json({error: 'language and code are required fields'})
//     }

//     const snippet = {
//         id: ++id,
//         language,
//         code
//     }

//     // encrypt this:
//     await Snippet.create(snippet);
// })

module.exports = router;