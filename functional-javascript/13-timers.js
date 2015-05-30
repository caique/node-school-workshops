var startTime = Date.now()

module.exports = function repeat(operation, num) {
    if (num <= 0) return
    operation()

	if((Date.now() - startTime) < 500){
		repeat(operation, --num)
	} else {
		setTimeout(function(){
			repeat(operation, --num)
		})
	}
}