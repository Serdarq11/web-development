const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));   // used for reaching index.js from anywhere we want in bash using /.../etc.

app.get('/' , (req,res) => {
    res.render('home');     // content of home.ejs seen in localhost:3030
})

app.get('/cats', (req,res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats })
})

app.get('/r/:subreddit', (req,res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    console.log(data);

    if(data){
        res.render('subreddit', { ...data });
    } else{
        res.render('notfound', { subreddit });
    }
})

app.get('/rand' , (req,res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num });     // content of render.ejs seen in localhost:3030
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!");
})

