module.exports = function checkUsersValid(goodUsers) {
    return function(submittedUsers) {
        return !submittedUsers.some(function(submittedUser) {
            return !goodUsers.some(function(goodUser) {
                return goodUser.id === submittedUser.id
            })
        })

        // I preferred to use !some() instead of every()
        // return submittedUsers.every(function (submittedUser){
        // 	return goodUsers.some(function (goodUser){
        // 		return goodUser.id === submittedUser.id
        // 	})
        // })
    };
}