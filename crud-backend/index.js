//importing modules
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();

const route = require('./route/routes');

//connect to Mongodb
mongoose.connect('mongodb://localhost:27017/shoppinglist');

//check database connection
mongoose.connection.on('connected', ()=>{
console.log('Mongodb connected at port : 27017');
});

//check for database connection error
mongoose.connection.on('error', (err)=> {
    console.log(err);
});

//adding middlewares(bodyparse, cors)
app.use(bodyParser.json());
app.use(cors());

//assign all request to route
app.use('/api', route);

//assign port for server
const PORT = 3000;

//make server running
app.listen(PORT, function() {
    console.log('server has been started at ' +PORT);
})
