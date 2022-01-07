const express = require('express');
const user = require('../Models/user');
const router = express.Router();

// login page render

router.get('/' , (req , res) => {
    res.render("welcome");
})
module.exports = router;