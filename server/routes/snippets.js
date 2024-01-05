const express = require('express')
const {snippets} = require("../db/seed.js")

const snippetRouter = express.Router();
snippetRouter.use(express.json());

//GET all snippets
snippetRouter.get("/", (req, res) => {
    try{
        const all =  snippets;
        res.status(200).send(all)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

// GET snippet by ID

// GET snippet by LANGUAGE

// POST snippet


module.exports = snippetRouter;