require("dotenv").config();
// const jwt = require('jsonwebtoken');
const router = require('express').Router();
const basicAuth = require('../middleware/authorize');
const bcrypt = require('bcrypt');
// const authorize = require('../middleware/authorize')

// array to store users
const users = []

// CREATE new User for users Array
router.post('/', basicAuth, async (req, res) => {

    // get the user data, thanks to auth middleware
    const { email, password } = req.users
    const id = users.length + 1;

    // hash the password
    const SALT_ROUNDS = 10;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

    // user to be added
    const user = {
        id, 
        email,
        password: hashedPassword
    }

    // save the user
    users.push(user)

    //don't send back hashed password
    res.status(201).json({id, email})
})

// sign in user


module.exports = router;