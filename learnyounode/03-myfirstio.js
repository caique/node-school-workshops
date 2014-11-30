var fs = require('fs')

var content = fs.readFileSync(process.argv[2], 'utf-8');
var lines = content.split('\n').length - 1;

console.log(lines);