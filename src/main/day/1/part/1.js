const _ = require('lodash')

module.exports = (characters) => {
    let floor = 0
    _.forEach(characters, (character) => {
        if (character === '(') {
            floor++
        } else {
            floor--
        }
    })
    return floor
}
