const _ = require('lodash')

module.exports = (characters) => {
    let position = 1
    let floor = 0
    _.forEach(characters, (character, i) => {
        if (character === '(') {
            floor++
        } else if (character === ')') {
            floor--
        }

        if (floor === -1) {
            position = i + 1

            return false
        }
    })
    return position
}
