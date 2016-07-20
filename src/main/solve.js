const fs = require('fs')

module.exports = (day, part) => {
    let input = fs.readFileSync(`./src/main/day/${day}/input`, 'utf-8')
        .trimRight()
        .split('\n')

    if (input.length === 1) {
        input = input[0]
    }

    let solver = require(`./day/${day}/part/${part}`)

    return solver(input)
}