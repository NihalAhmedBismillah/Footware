var http = require('http');
var module1 = require('./Module1');
var async = require('async');
var server = http.createServer(function (req, res) {
  
    console.log(req.url);
    //console.log(res);
    if (req.url === '/index') {

        module1.PrintA('Nihal ', 'Ahmed', function (result) {
            console.log(result);
            res.write('Welcome to Nihal Technologyes index');
            res.end();

        });
        
    }
    else if (req.url === '/home') {
        console.log(' I am in home page');
        res.write('Welcome to Nihal Technologyes home');
        res.end();
    }
    else {

        res.end();
    }

});


server.listen('3000', '127.0.0.1', function (err, res) {

    console.log('server start at port no : 3000');

});