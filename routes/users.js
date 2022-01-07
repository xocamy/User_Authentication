const express = require('express');
const user = require('../Models/user');
const router = express.Router();

// login handle
router.post('/login' , (req ,res) => {
    res.send('Hello');
})

// register handle
router.post('/register' , ( req , res) => {
    res.send('Hello');
})

// logout

module.exports = router;