const express = require('express');
const mongoose = require('mongoose')
const user = require('../Models/user');
const router = express.Router();

// login handle
router.post('/login' , (req ,res) => {
    const { username , password} = req.body;
})

// register handle
router.post('/register' , async ( req , res) => {
    try{
        const {username,email, password} = req.body;
        const newUser = new user ({
            username  : username,
            email : email,
            password : password
        })
        const User = await newUser.save();
        res.redirect('users/login');
    } catch(err) {
        res.status(500).json(err)
    }
})

// logout

module.exports = router;