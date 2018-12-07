var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    request.on("data", function(chunk) {
        response.write(chunk.toString().toUpperCase());
        process.stdout.write(chunk);
    });
    request.on("end", function() {
        response.end();
    });
}).listen(8000);
console.log("ChunkServer is on")