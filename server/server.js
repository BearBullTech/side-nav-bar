const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const sideBar = require('./router/sideBar');
const db = require('../db/db.js');
const logger = require('morgan');
const app = express();
const PORT = 3004;
app.use(parser.json());
app.use(logger("dev"));


app.use(express.static(path.join(__dirname, '../public')))
//app.use('/:company', express.static(path.join(__dirname, '../public')))

app.get('/:company', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

mongoose.connect('mongodb://localhost/fecdata', {useNewUrlParser: true}, (err) => {
	console.log(err||"mongoDB connected!")
})


app.get('/stocks/sideBar', function(req, res) {
  // res.sendFile(path.join(__dirname, '../public/index.html'))
  db.find({}, function(err, results) {
  	if (err) {
  		return console.log(err)
  	} else {
  	// res.send(companies);
  	// console.log(JSON.stringify(results))
    // console.log('HELLO FROM SERVER!')
  	res.json(results)
  }
  })
})

app.get('/stocks/sideBar/:company', (req, res) => {
  const company = req.params.company;
  db.find({ company }, null, (err, result) => {
    if (err) {
      return console.log('callback error');
    }
    console.log(req.params)
    return res.json(result);
  })
})

//Router for Server
app.use('/stocks/sideBar', sideBar)

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