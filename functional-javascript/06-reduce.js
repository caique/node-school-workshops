module.exports = function countWords (words) {
	return words.reduce(function (countMap, word){
		countMap[word] = ++countMap[word] || 1
		return countMap
	}, {})
}