var slice = Array.prototype.slice

module.exports = function logger (namespace) {
	return function (){
		var messages = slice.call(arguments)
		console.log.apply(this, [namespace].concat(messages))
	}
}