var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var apiPoint = require('./apiPoint');
var app = express();
//var api =  apiPoint.init(app);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('view option', { laylut: false });
app.use(express.static('E:/nodeSamples/Public'));
app.use(bodyParser.urlencoded({ extended: false }));
var api =  apiPoint.init(app);

app.get('/api/login', function (req, res) {
 
    var msg = { name: 'Nihal Ahmed', address: 'Pune India' };
    res.json(msg)
    //res.render('index.jade');
});



app.get('/signup', function (req, res) {
   
   // res.render('signup.jade');
});


app.get('/', function (req, res) {
    res.render('index.html');
});


app.get('/abc', function (req, res) {
    res.render('abc.html');
});
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

