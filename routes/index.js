const express = require('express');
const user = require('../Models/user');
const router = express.Router();

// login page render

router.get('/' , (req , res) => {
    res.render("welcome");
})

router.get('/reg' , (req , res) => {
    res.render('register');
})
module.exports = router;