const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const sideBar = require('./router/sideBar');
const Company = require('../db/db.js');
const logger = require('morgan');

const app = express();
const PORT = 3004;

app.use(parser.json());
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, '../public')))

mongoose.connect('mongodb://localhost/fecdata', {useNewUrlParser: true}, (err) => {
	console.log(err||"mongoDB connected!")
})


app.get('/users/sideBar', function(req, res) {
  // res.sendFile(path.join(__dirname, '../public/index.html'))
  Company.find({}, function(err, results) {
  	if (err) {
  		return console.log(err)
  	} else {
  	// res.send(companies);
  	
  	res.json(results)
  }
  })
})
//Router for Server
app.use('/users/sideBar', sideBar)


app.listen(PORT, () => {
  console.log("Listening to port: ", PORT)
})


/*
app.get('/api/blogs', function(req, res) {
  Blogs.find({}, function(err, blogs) {
  	res.send(blogs);
  })
});
*/