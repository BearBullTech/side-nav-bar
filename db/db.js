const mongoose = require('mongoose');
// const URI = 'mongodb://localhost/fecdata';
// var db = mongoose.connection;

//===== DBSchema =======

const companiesSchema = new mongoose.Schema({
	company: String,
	currentDay: Array
});

const Company = mongoose.model('Company', companiesSchema);


// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log("we're connected to the DB!");
// });

module.exports = Company;
//save multiple data files look up 'bulkwrite'

// var userSchema = new mongoose.Schema({
// 	name: String,
// 	age: Number,
// 	admin: Boolean
// });

// var User = mongoose.model('User', userSchema);

// var roy = new User({name: 'Roy', age: 29, admin: true});
// var andrew = new User({name: 'Andrew', age: 30, admin: false});

// roy.save((err, roy) => {
// 	if (err) { 
// 		console.err(err);
// 	} else {
// 		console.log('saved into db!')
// 	}
// })

// andrew.save((err, users) => {
// 	if (err) { 
// 		console.err(err);
// 	} else {
// 		console.log(users.name + ' saved into db!')
// 	}
// })
// User.find((err, users) => {
// 	if (err) {
// 		console.error(err);
// 	} else {
// 		console.log(users, ':was found')
// 	}
// })