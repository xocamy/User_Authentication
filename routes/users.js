const express = require('express');
const mongoose = require('mongoose')
const user = require('../Models/user');
const router = express.Router();
const bcrypt = require('bcrypt')

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
        const saltRounds = 10;
       // Technique 1 (generate a salt and hash on separate function calls):
       const newUser = new user ({
           username  : username,
           email : email,
           password : password
        })
        bcrypt.genSalt(10 , (err , salt) => 
        bcrypt.hash(newUser.password , salt , (err , hash) => {
            if( err ) throw err;
            newUser.password = hash;
            newUser.save().then((value) => {
                console.log(value)
                res.redirect('/login');
            }).catch( value => console.log( value));
        }));
        console.log(newUser.password);
        //  const User =  newUser.save();
    } catch(err) {
        res.status(500).json(err)
    }
})

// logout

module.exports = router;