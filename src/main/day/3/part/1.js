const _ = require('lodash')

module.exports = (characters) => {
    let latitude = 0
    let longitude = 0
    let presents = {}

    _.set(presents, `${latitude}, ${longitude}`, true)

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

        _.set(presents, `${latitude}, ${longitude}`, true)
    })

    console.log(presents)

    return _.size(presents)
}
