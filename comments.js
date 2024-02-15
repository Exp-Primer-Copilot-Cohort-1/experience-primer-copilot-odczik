// Create web server
// Create a web server that listens to incoming requests and sends back a response.
// The server should respond to requests to /comments with a JSON object, containing a property comments, which is an array of strings. You should use the fs module to read the comments.json file and respond with the contents of that file.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    if (req.url === '/comments') {
        fs.readFile('comments.json', function(err, data) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
            } else {
                var comments = JSON.parse(data.toString());
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({comments: comments}));
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

server.listen(3000);

var fs = require('fs');

var server = http.createServer(function(req, res) {
    if (req.url === '/comments') {
        fs.readFile('comments.json', function(err, data) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
            } else {
                var comments = JSON.parse(data.toString());
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({comments: comments}));
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

server.listen(3000);

// Path: comments.js
// Create web server
// Create a web server that listens to incoming requests and sends back a response.
// The server should respond to requests to /comments with a JSON object, containing a property comments, which is an array of strings. You should use the fs module to read the comments.json file and respond with the contents of that file