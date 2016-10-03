var path = require('path');
var express = require('express');
var app = express();

app.get('*', function(request, response) {
    response.sendFile(path.join(__dirname, '/about.html'));
});

app.post('*', function(request, response) {
    console.log("Received POST request");
    console.log(request.body);
    response.end(request.body);
});

app.listen(process.env.PORT, process.env.IP);
console.log("Listening on port " + process.env.PORT);