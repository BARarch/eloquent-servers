var http = require("http"), fs = require("fs");

var methods = Object.create(null);

http.createServer(function(request, response) {
    function respond(code, body, type) {
        if (!type) type = 'text/plain';
        response.writeHead(code, {"Content-Type": type});
        if (body && body.pipe)
            body.pipe(response);
        else
            response.end(body)
    }

    if (request.method in methods)
        methods[request.method](urlToPath(request.url), respond, request);
    else
        //console.log(request);
        respond(405, "Method " + request.method + " not allowed");
}).listen(8000);
console.log("File Server is in 8000")