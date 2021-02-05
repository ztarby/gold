'use strict';

/* basura mia */

const func = require('./func.js');

/* fin basura mnia */
var path = require('path');
var express = require('express');

var app = express();

var staticpath = path.join(__dirname, '/');
app.use(express.static(staticpath));

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});

/* code original **************
 
var http = require('http');
var port = process.env.PORT || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Deja de distareter\n');

    
    
}).listen(port);

 code original *********************   */
