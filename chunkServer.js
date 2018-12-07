var http = require("http");
var port = 8000
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    request.on("data", function(chunk) {
        response.write(chunk.toString().toUpperCase());
        process.stdout.write(chunk);
        process.stdout.write('\n')
    });
    request.on("end", function() {
        response.end();
    });
}).listen(port);
console.log("ChunkServer is on " + port.toString());