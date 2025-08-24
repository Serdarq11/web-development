const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));   // used for reaching index.js from anywhere we want in bash using /.../etc.

app.get('/' , (req,res) => {
    res.render('home');     // content of home.ejs seen in localhost:3030
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!");
})

