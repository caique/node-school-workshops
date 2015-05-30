module.exports = function duckCount () {
	return Array.prototype.slice.call(arguments).filter(function (argument) {
		return Object.prototype.hasOwnProperty.call(argument, 'quack')
	}).length
}