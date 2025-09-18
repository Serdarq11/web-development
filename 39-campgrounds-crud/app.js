const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campgrounds');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
  .then(() => {
    console.log("Database connected");
  })
  .catch(err => {
    console.error("Connection error:", err);
  });


const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('home');     // home of home.ejs file
})

app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', {campgrounds});
})

app.get('/campgrounds/:id', async (req,res) => {
  const campground = await Campground.findById(req.params.id);
  res.render('campgrounds/show', { campground });
})

app.get('/makecampground', async (req, res) => {
    const camp = new Campground({title: 'My Backyard', description: 'cheap camping'});
    await camp.save();
    res.send(camp);
})

app.listen(3000, () => {
    console.log('SERVING ON PORT 3000!!');
})