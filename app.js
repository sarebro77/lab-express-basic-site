const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
const students = require('./students');
console.log(students);
app.use(express.static('public'));
app.use(cors());
app.get('/api', (req, res) => {
	res.json(students);
});

// app.get('/cat', (request, response, next) => {
//     response.sendFile(__dirname + '/views/cat-page.html');
// });
app.get('/Home', (request, response, next) => {
	response.sendFile(__dirname + '/views/Home.html');
});
app.get('/Contact', (request, response, next) => {
	response.sendFile(__dirname + '/views/Contact.html');
});
app.get('/Works', (request, response, next) => {
	response.sendFile(__dirname + '/views/Works.html');
});

app.get('/About', (request, response, next) => {
	response.sendFile(__dirname + '/views/About.html');
});

app.get('/API', (request, response, next) => {
	response.sendFile(__dirname + '/views/About.html');
});

app.listen(process.env.PORT || 5000, () => console.log('My first app listening on port 5000! '));
