const express = require('express');
const app = express();      // it is a method
// console.dir(app);        // we see all methods such as listen, route, param....

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!");  // every time we reload the localhost:3000 page, it is written in Bash
//     //console.dir(req);   // lots of objects
//     //res.send("Hello, we got your request!! This is your response!!!");  // the response can be seen in the page -> localhost:8080
//     // res.send({ color: 'red' });   // sending JS object          -> {"color":"red"}   -> can be seen in the page localhost:8080
//     res.send('<h1>This is my WebPagepage!</h1>'); // sending html tag       -> This is my Webpage! -> can be seen in the page localhost:8080
// })

// app.get('*', (req, res) => {
//     res.send(`I don't know that path!!!`);   // it give me an error check this later!!!
// });

app.get('/', (req,res) => {
    res.send('This is the HomePage');   // 'This is the HomePage' on the page -> localhost:8080
})

app.get('/cats', (req,res) => {
    // console.log("CAT REQUEST!!!");
    res.send('MEOW');   // 'MEOW' on the page -> localhost:8080/cats
})

app.post('/cats', (req,res) => {
    // console.log("CAT REQUEST!!!");
    res.send('POST REQUEST TO /cats !!! THIS IS DIFFERENT THAT GET REQUEST!!');   // see it in the Postman
})

app.get('/dogs', (req,res) => {
    res.send('WOOF');   // 'WOOF' on the page -> localhost:8080/dogs
})



// /cats => 'meow'
// /dogs => 'woof'
// '/'   => go back to the main page



app.listen(8080, () => {        // 3000 is another port
    console.log("LISTENING ON PORT 8080!"); // LISTENING ON PORT 3000!, // but the execution does not stop
})
