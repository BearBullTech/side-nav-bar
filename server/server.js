const express = require('express');
const path = require('path');
const parser = require('body-parser');
const sideBar = require('./router/sideBar')

const app = express();
const PORT = 3000;

app.use(parser.json());

app.use(express.static(path.join(__dirname, '../public')))


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})
//Router for Server
app.use('/sideBar', sideBar)


app.listen(PORT, () => {
  console.log("Listening to port: ", PORT)
})
