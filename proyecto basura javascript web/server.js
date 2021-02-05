'use strict';
var http = require('http');
/* basura mia */

const func = require('./func.js');




var aa = 5;
var bb = 3;

console.log(func);

/* fin basura mnia */
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Deja de distareter\n');

    
    
}).listen(port);


