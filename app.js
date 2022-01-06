const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const user = require('./Models/user')


dotenv.config();

// connect to database
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL)
  .then(console.log("Connected to database"));
}



app.use('/', express.static('public'))

/*
 app.get('/', (req, res) => {
  res.send('Hello Hansh Raj');
})
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname,'css'));
app.use('/html',(req,res,next)=>{
res.sendFile(path.join(__dirname,'HTML','text.html');
});
app.listen(3000);







app.get('/login', function(req, res) {
    res.sendFile('login.html', {root: __dirname })
});
app.get('/login', function(req, res) {
    res.sendFile('login.css', {root: __dirname })
}); 
 */


const raj  = new user( { username : "Raj",
email : "hajshdjs@gmail.com", 
password : "1234567"})
console.log( raj.username);
console.log( raj.email);
console.log( raj.password);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})