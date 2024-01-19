require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

// const routes = require("./src/routes");
// const router = require('../server/src/routes/snippet');

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Server is sprinting")
  res.send("Snipper Snippets API");
});

// app.use('/snippet', routes.snippet)
// app.use('./user', routes.user)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
