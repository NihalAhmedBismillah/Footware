var http = require('http');
var express = require('express');
var server = http.createServer();
server.on('request', function (req, res) {
    var mybuffer = new Buffer('Nihal Ahmed');
    console.log(mybuffer);

    res.end('hell world');
   
});


server.listen(5050, function () {

    console.log('server started on port no :5050');
    var checknum = function (value) {
        if (typeof value !== 'number')
            return false
        else
            return value = this.minimum && value <= this.maximum;
    }


    var range = { minimum: 10, maximum: 20 }
    var boundcheckRange = checknum.
    var result = boundcheckRange(10);
    console.log(result)


})