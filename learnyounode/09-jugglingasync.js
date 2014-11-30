var http = require('http')
var bl = require('bl')

var messages = new Array()
var count = 0;

function printResults(){
	messages.forEach(function(message){
		console.log(message)
	})	
}

function httpGet (index) {
	var url = process.argv[2 + index]

	http.get(url, function(response){
		response.pipe(bl(function(err, data){
			if(err) console.error(err);

			messages[index] = data.toString()
			count++

			if(count == 3) printResults()
		}))
	})	
}	

for (var i = 0; i < 3; i++) httpGet(i)




