const express = require('express')
const app = express()
const port = 3000

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
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})