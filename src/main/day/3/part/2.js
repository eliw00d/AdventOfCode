const _ = require('lodash')

module.exports = (characters) => {
    let santa = {
        latitude: 0,
        longitude: 0,
        presentsDelivered: {}
    }

    let roboSanta = {
        latitude: 0,
        longitude: 0,
        presentsDelivered: {}
    }

    _.set(santa.presentsDelivered, `${santa.latitude}, ${santa.longitude}`, true)
    _.set(roboSanta.presentsDelivered, `${roboSanta.latitude}, ${roboSanta.longitude}`, true)

    _.forEach(characters, (character, i) => {
        let deliverer = santa
        if (i % 2 === 1) {
            deliverer = roboSanta
        }

        if (character === '^') {
            deliverer.latitude++
        } else if (character === 'v') {
            deliverer.latitude--
        } else if (character === '>') {
            deliverer.longitude++
        } else if (character === '<') {
            deliverer.longitude--
        }

        _.set(deliverer.presentsDelivered, `${deliverer.latitude}, ${deliverer.longitude}`, true)
    })

    let presentsDelivered = _.merge(santa.presentsDelivered, roboSanta.presentsDelivered)

    return _.size(presentsDelivered)
}
