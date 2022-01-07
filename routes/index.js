const express = require('express');
const user = require('../Models/user');
const router = express.Router();

//login page rendering
router.post('/register.html' , (req , res) => {
    const newUser = new user({
        username: req.body.username,
        email : req.body.email,
        password : req.body.password,
    });
    console.log( newUser.username);
})

module.exports = router;