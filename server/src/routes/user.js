const express = require('express');
const userRouter = express.Router();
const basicAuth = require('../middleware/basicAuth');
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authorize = require('../middleware/authorize');

userRouter.post('/', basicAuth, async (req, res, next) => {
    // get user data returned by middleware
    const { email, password } = req.body
    
    // TODO: handle no email & password

    try {
    // hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = {
        email,
        password: hashedPassword
    }
    // create
    await User.create(user);

    // don't send back the hashed password
    res.status(201).json("New account created for "+ user.email);
} catch (error) {
    next(error)
}
})

module.exports = userRouter;