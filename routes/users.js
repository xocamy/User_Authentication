const express = require('express');
const mongoose = require('mongoose')
const user = require('../Models/user');
const router = express.Router();

// login handle
router.post('/login' , (req ,res) => {
    res.send('Hello');
})

// register handle
router.post('/register' ,  ( req , res) => {
    const{ username , email , password} = req.body;
    res.send(`username : ${username} , email : ${email} , password : ${password}`)
})

// logout

module.exports = router;