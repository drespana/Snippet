const express = require('express')
const {snippets} = require("../db/sample.js")

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
snippetRouter.get("/:id", (req, res, next) => {
    try {
        const search = req.params.id-1
        const found = snippets[search]
        res.status(200).send(found)
    } catch (err) {
        next(err)
    }
})

// GET snippet by LANGUAGE

// POST snippet
snippetRouter.post("/", (req, res, next) => {
    try{
        let mkSnip = req.body;
        snippets.push(mkSnip);
        const created = snippets.length;
        res.status(200).send(snippets[created])
    } catch (err) {
        next(err)
    }
})



module.exports = snippetRouter;