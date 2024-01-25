const express = require('express');
const snippetRouter = express.Router();
const { Snippet } = require('../models/Snippet');
const { encrypt, decrypt } = require('../utils/encrypt');
const { requiresAuth } = require('express-openid-connect')


//const encryptedSnippets = require('../db/test');

// get all snippets
snippetRouter.get('/', requiresAuth(), async (req, res, next)  => {
    try {
        const allSnippets = await Snippet.findAll();
        const decryptedSnippets = allSnippets.map(snippet => ({
            ...snippet,
            code: decrypt(snippet.code)
        }))
        res.json(decryptedSnippets);
    } catch (err) {
        next(err)
    }
})

// get by ID


// get by language


// create a new snippet
snippetRouter.post('/', requiresAuth(), async (req, res) => {
    const { language, code } = req.body

    if (!language || !code) {
        return res
            .status(400)
            .json({error: 'language and code are required fields'})
    }

    const snippet = {
        id: ++id,
        language,
        code
    }

    await Snippet.create({snippet, code: encrypt(code)});
})

module.exports = snippetRouter;