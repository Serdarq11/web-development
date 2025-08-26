const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended : true }))    // for parsing req.body
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        username : 'Todd',
        comment : 'lol that is so funny!'
    },
    {
        username : 'Skyler',
        comment : 'I like to go birdwatching with my dog!'
    },
    {
        username : 'Sk8erBoi',
        comment : 'Plz delete your account Todd!'
    },
    {
        username : 'onlysayswoof',
        comment : 'woof woof woof!'
    },
]

app.get('/comments', (req,res) => {
    res.render('comments/index', { comments });     // read comments
})

app.get('/comments/new', (req,res) => {
    res.render('comments/new')
})

app.post('/comments', (req,res) => {
    console.log(req.body);  //shown in bash
    res.send('IT WORKED');  // shown in localhost:3000/comments
})

app.get('/tacos', (req,res) => {
    res.send('GET /tacos response')
})

app.post('/tacos', (req,res) => {
    // console.log(req.body);      // by default, it is undefined  { meat: 'dad', qty: '3' } after app.use(express.urlencoded({ extended : true }))
    const { meat, qty } = req.body; // we type the value of meat and qty to the postman body section (key value pairs)
    res.send(`OK, here are your ${qty} ${meat} tacos.`)
})

app.listen(3000, () => {
    console.log('ON PORT 3000!');
})