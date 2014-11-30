var http = require('http')
var map = require('through2-map')

http.createServer(function(request, response){
	if(request.method != 'POST') return response.end('Only POST requests are allowed!');

	request.pipe(map(function(chunk){
		return chunk.toString().toUpperCase()
	})).pipe(response)
}).listen(Number(process.argv[2]))