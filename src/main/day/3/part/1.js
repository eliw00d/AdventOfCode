const _ = require('lodash')

module.exports = (characters) => {
    let latitude = 0
    let longitude = 0
    let presents = {}

    _.set(presents, `[${latitude}][${longitude}].delivered`, true)

    _.forEach(characters, (character) => {
        if (character === '^') {
            latitude++
        } else if (character === 'v') {
            latitude--
        } else if (character === '>') {
            longitude++
        } else if (character === '<') {
            longitude--
        }

        _.set(presents, `[${latitude}][${longitude}].delivered`, true)
    })

    return _.size(presents)
}
