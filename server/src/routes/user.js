require("dotenv").config();
const express = require("express");
const userRouter = express.Router();
const { requiresAuth } = require('express-openid-connect');
// const { User } = require("../models");

userRouter.get('/', requiresAuth(), async (req, res) => {
  res.json(req.oidc.user);
})

module.exports = userRouter;
