const solve = require('./solve')

let day = process.argv[2]
let part = process.argv[3]

let solution = solve(day, part)

console.log(solution)
