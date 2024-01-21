const express = require('express');
const router = express.Router();
const authorize = require('../middleware/authorize');
// const router = require("express").Router();
// const { encrypt, decrypt } = require("../utils/encrypt");

// array to store snippets
const snippets = require("./seedData.json");

//generate unique id for each snippet
// let id = snippets.length;

router.get('/', authorize, (req, res, next) => {
  try {
    const allSnippets = snippets.map((snippet) => ({
      ...snippet
    }))
    res.json(allSnippets)
  } catch (error) {
    next(error)
  }
})

//////////////////////////////////////////////////////
///// ROUTES THAT REQUIRE ENCRYPT & DECRYPT //////////

// // get all snippets
// router.get("/", (req, res, next) => {
//   try {
//     const decryptedSnippets = snippets.map((snippet) => ({
//       ...snippet,
//       code: decrypt(snippet.code),
//     }));
//     res.json(decryptedSnippets);
//     // res.json(snippets);
//   } catch (err) {
//     next(err);
//   }
// });

// // get by ID

// // get by language
// router.get("/", (req, res, next) => {
//     try {
//       const { language } = req.query
//       const decodedSnippets = snippets.map((snippet) => ({
//         ...snippet,
//         code: decrypt(snippet.code),
//       }));
//       if (language) {
//         const filteredSnippets = decodedSnippets.filter(
//           (snippet) => snippet.language.toLowerCase() === language.LowerCase()
//         )
//         return res.json(filteredSnippets);
//       }
//       res.json(decodedSnippets);
//     } catch (err) {
//       next(err);
//     }
//   });

// // create a new snippet
// router.post("/", (req, res, next) => {
//   try {
//     const { language, code } = req.body;
//     if (!language || !code) {
//       return res
//         .status(400)
//         .json({ error: "language and code are required fields" });
//     }

//     const snippet = {
//       id: ++id,
//       language,
//       code,
//     };

//     snippets.push({ ...snippet, code: encrypt(code) });
//     res.status(201).json(snippet);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
