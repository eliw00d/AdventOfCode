const _ = require('lodash')

module.exports = (characters) => {
    let latitude = 0
    let longitude = 0
    let presentsDelivered = {}

    _.set(presentsDelivered, `${latitude}, ${longitude}`, true)

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

        _.set(presentsDelivered, `${latitude}, ${longitude}`, true)
    })

    return _.size(presentsDelivered)
}
