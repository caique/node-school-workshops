var filter = require("./06-makeitmodular_module");

var dir = process.argv[2];
var extension = process.argv[3];

filter(dir, extension, function(err, files){

	if (err) return console.error("There was an error:", err);

	files.forEach(function(file){
		console.log(file);
	});

});