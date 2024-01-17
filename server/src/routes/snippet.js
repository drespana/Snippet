const express = require("express");
const router = express.Router();
const { encrypt, decrypt } = require("../utils/encrypt");

// array to store snippets
const snippets = require("./seedData.json");
const { decodedTextSpanIntersectsWith } = require("typescript");

//generate unique id for each snippet
let id = snippet.length;

// get all snippets
router.get("/", (req, res, next) => {
  try {
    const { language } = req.query
    const decodedSnippets = snippets.map((snippet) => ({
      ...snippet,
      code: decrypt(snippet.code),
    }));
    if (language) {
      const filteredSnippets = decodedSnippets.filter(
        (snippet) => snippet.language.toLowerCase() === language.LowerCase()
      )
      return res.json(filteredSnippets);
    }
    res.json(decodedSnippets);
  } catch (err) {
    next(err);
  }
});

// get by ID

// get by language

// create a new snippet
router.post("/", (req, res, next) => {
  try {
    const { language, code } = req.body;
    if (!language || !code) {
      return res
        .status(400)
        .json({ error: "language and code are required fields" });
    }

    const snippet = {
      id: ++id,
      language,
      code,
    };

    snippets.push({ ...snippet, code: encrypt(code) });
    res.status(201).json(snippet);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
