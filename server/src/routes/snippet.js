const express = require('express')
const { Snippet } = require('../models/Snippet')
// const { requiresAuth } = require('express-openid-connect')

const router = express.Router();

// get all
router.get('/', async (req, res, next)  => {
    try {
        const allSnippets = await Snippet.findAll();
        res.json(allSnippets);
    } catch (err) {
        next(err)
    }
})

// get by ID

// get by language

module.exports = router;