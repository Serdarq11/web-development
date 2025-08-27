const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
uuidv4();

app.use(express.urlencoded({ extended : true }))    // for parsing req.body
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        id: uuidv4(),
        username : 'Todd',
        comment : 'lol that is so funny!'
    },
    {
        id: uuidv4(),
        username : 'Skyler',
        comment : 'I like to go birdwatching with my dog!'
    },
    {
        id: uuidv4(),
        username : 'Sk8erBoi',
        comment : 'Plz delete your account Todd!'
    },
    {
        id: uuidv4(),
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

app.post('/comments', (req,res) => {            // adding data
    //console.log(req.body);  //shown in bash
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuidv4() });   // added username and comment to the list of comments
    // res.send('IT WORKED');  // shown in localhost:3000/comments
    res.redirect('/comments');  // if we don't do that, there will be resubmit the form alert in the page.
})

app.get('/comments/:id', (req,res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})

app.patch('/comments/:id', (req,res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments')
    // res.send('UPDATING SOMETHING');
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