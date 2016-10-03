var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//-----------------------------------------------------------------------------
// Serve script and css files (why is this necessary?)
//
app.get('/style.css', function(request, response) {
    response.sendFile(path.join(__dirname, '/style.css'));
});
app.get('/script.js', function(request, response) {
    response.sendFile(path.join(__dirname, '/script.js'));
});

//----------------------------------------------------------------------------
// Main routing.
//
app.post('*', bodyParser.urlencoded({extended:true}), function(request, response) {
    console.log("Received size request: ");
    console.log(request.body);
    response.writeHead(200, { 'Content-Type' : 'application/json' });
    response.end(JSON.stringify(request.body));
});

app.get('*', function(request, response) {
    response.sendFile(path.join(__dirname, '/about.html'));
});

app.listen(process.env.PORT, process.env.IP);
console.log("Listening on port " + process.env.PORT);