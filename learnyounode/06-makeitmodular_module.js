var fs = require('fs');
var path = require('path');

module.exports = function (dir, extension, callback) {
	fs.readdir(dir, function(err, list){
		if(err) return callback(err);

		var validFiles = list.filter(function(file){
			return path.extname(file) === ".".concat(extension);
		});	

		callback(null, validFiles);
	});
}