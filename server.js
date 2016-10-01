var path = require('path');
var express = require('express');
var app = express();

app.get('*', function(request, response) {
    response.sendFile(path.join(__dirname, '/about.html'));
});

app.listen(process.env.PORT, process.env.IP);