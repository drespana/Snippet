const { syncSeed } = require("./src/db/seed");
require("dotenv").config('.env');
const express = require("express");
const { db } = require("./src/db/config");
const { auth } = require('express-openid-connect')
const PORT = process.env.PORT || 5000;
const app = express();

const routes = require("./src/routes/index");

const {
  AUTH0_SECRET,
  AUTH0_AUDIENCE,
  AUTH0_CLIENT_ID,
  AUTH0_BASE_URL,
} = process.env;

const config = {
  authRequired: false, 
  auth0Logout: true,
  secret: AUTH0_SECRET,
  baseURL: AUTH0_AUDIENCE,
  clientID: AUTH0_CLIENT_ID,
  issuerBaseURL: AUTH0_BASE_URL,
};

app.use(express.json());
app.use(auth(config));

app.get("/", (req, res) => {
  console.log(req.oidc.user)
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.use("/snippets", routes.snippets);
app.use("/users", routes.users);

async function init() {
  db.sync().then(await syncSeed());

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

init();
