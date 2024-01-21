require("dotenv").config();
const express = require("express");
const userRouter = express.Router();
const basicAuth = require("../middleware/basicAuth");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authorize = require("../middleware/authorize");

// replace req.body with req.user after adding basicAuth
userRouter.post("/", async (req, res, next) => {
  // get user data returned by middleware
  const { email, password } = req.body;

  // TODO: handle no email & password

  try {
    // hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = {
      email,
      password: hashedPassword,
    };
    // create
    await User.create(user);

    // don't send back the hashed password
    res.status(201).json("New account created for " + user.email);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/login", async (req, res) => {
  ///////  req.user should replace req.body when basicAuth is added //////////
  // get user from database
  const user = await User.findOne({ where: { email: req.body.email } });

  if (!user) {
    return res.status(404).send({ error: "User not found." });
  } else {
    // compare passwords
    const result = await bcrypt.compare(req.body.password, user.password);

    if (!result) {
      return res.status(401).json({ error: "Incorrect password or email" });
    } else {
      // make a payload
      const payload = { id: user.id, email: user.email };

      // sign and encode the payload to create the token
      const accessToken = jwt.sign(payload, process.env[""]);

      // send back the token for storage on the client
      res.json({ accessToken });
    }
  }
});

// GET user by Authorization Header

module.exports = userRouter;
