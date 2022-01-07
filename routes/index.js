const express = require('express');
const user = require('../Models/user');
const router = express.Router();

// login page render

router.get('/' , (req , res) => {
    res.render("welcome");
})

router.get('/register' , (req , res) => {
    res.render('register');
})

router.get('/login' , (req ,res) => {
    res.render('login');
}) 
module.exports = router;