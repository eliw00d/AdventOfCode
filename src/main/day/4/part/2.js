const _ = require('lodash')
const md5 = require('md5')

module.exports = (secretKey) => {
    let i = 1
    let hash = md5(`${secretKey}${i}`)

    while (!_.startsWith(hash, '000000')) {
        i++
        hash = md5(`${secretKey}${i}`)
    }

    return i
}