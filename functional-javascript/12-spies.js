module.exports = function Spy (target, method) {
	var result = {
		count : 0
	}

	var realFunction = target[method]

	target[method] = function(){
		result.count++
		return realFunction.apply(target, arguments)
	}

	return result
}