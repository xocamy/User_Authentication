const express = require('express')
const router = express.Router();
const app = express()
const port = 3000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const user = require('./Models/user')
const expressEjsLayout = require('express-ejs-layouts')
const path = require('path')

dotenv.config();

// connect to database
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL)
  .then(console.log("Connected to database"));
}

app.use(express.static(path.join(__dirname, 'public')))

//set view engine as EJS
app.set('view engine' , 'ejs');
app.use(expressEjsLayout);

/*

app.get('/', (req, res) => {
  res.send('Hello Hansh Raj');
})


app.post('/register.html' , async (req , res) => {
  try{
     // const salt = await bcrypt.genSalt(10);
     // const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = new user({
          username: req.body.username,
          email : req.body.email,
          password : req.body.password,
      });
      console.log( newUser.username);
      const User = await newUser.save();
      res.status(200).json(User);
  } catch(err){
      res.status(500).json(err);
  }
});
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
app.use('/', require('./routes/index'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})