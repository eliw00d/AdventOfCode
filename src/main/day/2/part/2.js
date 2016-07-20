const _ = require('lodash')

module.exports = (lines) => {
    let totalLength = 0
    _.forEach(lines, (line) => {
        let dimensions = _.split(line, 'x')

        let length = _.toNumber(dimensions[0])
        let width = _.toNumber(dimensions[1])
        let height = _.toNumber(dimensions[2])

        let perimeters = [
            length + width + length + width,
            width + height + width + height,
            height + length + height + length
        ]

        let volume = length * width * height
        let smallestPerimeter = _.min(perimeters)

        totalLength += volume + smallestPerimeter
    })
    return totalLength
}
