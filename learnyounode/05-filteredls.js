var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function(err, list){
	var validExtension = ".".concat(process.argv[3]);

	list.forEach(function(file){
		if(path.extname(file) === validExtension){
			console.log(file);
		}
	});
});