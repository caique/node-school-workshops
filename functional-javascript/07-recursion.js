// I prefer the classic solution for recursion without 
// using any helper function like the official solution

module.exports = function reduce(array, fn, initial) {
    if (!array.length) return initial
    var nextElement = array.shift()
    return reduce(array, fn, fn(initial, nextElement, 0, array))
}