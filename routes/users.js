const express = require('express');
const mongoose = require('mongoose')
const user = require('../Models/user');
const router = express.Router();

// login handle
router.get('/login' , (req ,res) => {
    res.render('login');
}) 
router.post('/login' , async (req ,res) => {
    try{

        const { username , password } = req.body;
        const User = await user.findOne( { username : username });
        !User && res.status(400).json('Wrong Credentials !')
        if( User.username === username && User.password === password){
            res.send( " You are loged In ");
        }
        else{
            
            res.send("You have entered a wrong password ");
        }
    } catch (err) {
            res.status(500).json(err);
    }
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
        const User =  newUser.save();
       res.redirect('/login');
    } catch(err) {
        res.status(500).json(err)
    }
})

// logout

module.exports = router;