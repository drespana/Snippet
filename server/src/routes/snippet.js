const router = require('express').Router();
const { Snippet } = require('../models/Snippet')
const {encrpyt, decrypt} = require('../utils/encrypt')
const { requiresAuth } = require('express-openid-connect')

// get all
router.get('/', requiresAuth(), async (req, res, next)  => {
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