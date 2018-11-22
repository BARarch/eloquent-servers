var http = require("http");

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Hello!</h1><p>You asked for <code>" +
		request.url + "</code></p>");
	response.end();

}).listen(8000);