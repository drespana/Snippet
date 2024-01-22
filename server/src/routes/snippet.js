const express = require('express');
const snippetRouter = express.Router();
const { Snippet } = require('../models/Snippet');
const authorize = require('../middleware/authorize');
const { encrypt, decrypt} = require('../utils/encrypt');

const encryptedSnippets = require('../db/test');

// get all snippets
snippetRouter.get('/', async (req, res, next)  => {
    try {
        const allSnippets = await Snippet.findAll();
        res.json(allSnippets);
    } catch (err) {
        next(err)
    }
})

/////////////////////////////////////////////////////
////////////// testing encrypt file ////////////////
///////////////////////////////////////////////////

// let id = encryptedSnippets.length;
// snippetRouter.get('/test', (req, res, next) => {
//     try{
//         const decryptedSnippets = decrypt(encryptedSnippets)
//         res.json(decryptedSnippets)
//     } catch (error) {
//         next(error)
//     }
// })
// snippetRouter.post('/test', (req, res, next) => {
//     const { language, code } = req.body
//     try {
//         const snippet = {
//             id: id++,
//             language,
//             code
//         }
//         encryptedSnippets.push({...encryptedSnippets, code: encrypt(code)});
//         res.status(201).json(snippet);
//     } catch (error) {
//         next(error)
//     }
// })


///////////////////////////////////////////////////////
///////////////// with encrypt file //////////////////
//////////////////////////////////////////////////////

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

//     await Snippet.create({snippet, code: encrypt(code)});
// })

module.exports = snippetRouter;