require("dotenv").config();
const express = require("express");
const userRouter = express.Router();
const { requiresAuth } = require('express-openid-connect');
// const { User } = require("../models");

userRouter.get('/', requiresAuth(), async (req, res) => {
  const userProfile = '<img src='+req.oidc.user.picture+'>'+'<h3>'+ req.oidc.user.given_name+' '+ req.oidc.user.family_name +'</h3>'
  res.send(userProfile);
})

module.exports = userRouter;
