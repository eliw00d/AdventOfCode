const _ = require('lodash')

module.exports = (lines) => {
    let totalSurfaceArea = 0
    _.forEach(lines, (line) => {
        let dimensions = _.split(line, 'x')

        let length = _.toNumber(dimensions[0])
        let width = _.toNumber(dimensions[1])
        let height = _.toNumber(dimensions[2])

        let areas = [
            length * width,
            width * height,
            height * length
        ]

        let surfaceArea = _.sum(areas) * 2
        let smallestArea = _.min(areas)

        totalSurfaceArea += surfaceArea + smallestArea
    })
    return totalSurfaceArea
}
