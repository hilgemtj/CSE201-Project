const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var http = require('http');
var cors = require('cors');
const Account = require('./models/account');

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://admin:pass@cse201.1mw2y.mongodb.net/AppHub?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3001))
    .catch((err) => console.log(err));

// middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origin: '*'}));

// stuff
app.post( '/accSubmit' , function(req, res) {
    console.log('req.body'); // this outputs: { data: 'hello' }
});

app.post('/', function(req, res) {
    console.log('req.body'); // this outputs: { data: 'hello' }
    res.send('result2');
});

app.get('/', function(req, res) {
    res.send('result'); // this outputs: { data: 'hello' }
});

// http server
http.createServer(function (req, res) {

    console.log('Request received');

    res.writeHead(200, { 
        'Content-Type': 'text/plain'
    });

    req.on('data', function (chunk) {
        var userData = JSON.parse(chunk);
        console.log('' + userData.username);
        addAccount('' + userData.username, '' + userData.email, '' + userData.password, 'endUser');
    });

    res.end('{"msg": "OK"}'); // removed the 'callback' stuff

}).listen(2999);

// adds account if the username is not already in the database
function addAccount(username, email, password, level)
{
    Account.findOne({username: username})
        .then((result) => {
            if (result == null)
            {
                const acc = new Account({
                    username: username,
                    email: email,
                    password: password,
                    level: level
                });

                acc.save();
            }
            else
            {
                console.log('account already exists');
            }
        })
        .catch((err) => {console.log(err)});
}

// addAccount('user2', 'user@gmail.com', 'pass', 'moderator');