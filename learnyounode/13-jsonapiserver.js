var http = require('http')
var url = require('url')

function parsetime(time){
	return { 
				hour : time.getHours(),
				minute : time.getMinutes(),
				second : time.getSeconds()
			}
}

function unixtime (time) {
	return { unixtime : time.getTime() }
}

http.createServer(function(request, response){
	if(request.method == 'GET'){
		var requestProperties = url.parse(request.url, true)
		var ISODate = new Date(requestProperties.query.iso)
		var parsedDate

		if(requestProperties.pathname == '/api/parsetime') parsedDate = parsetime(ISODate)
		if(requestProperties.pathname == '/api/unixtime') parsedDate = unixtime(ISODate)

		if(parsedDate){
			response.writeHead(200, {'Content-Type' : 'application/json'})
			response.end(JSON.stringify(parsedDate));
		} else {
			response.writeHead(404)
			response.end()
		}

	}
}).listen(Number(process.argv[2]))
