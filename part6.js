const R = require('ramda');

const teams = [
    { name: 'Dima', score: 5 },
    { name: 'Dima-1', score: 6 },
    { name: 'Dima-2', score: 7 },
    { name: 'Dima-3', score: 8 },
]


const getTopName = function(teams) {
    const sorted = R.sort((a, b) => b.score - a.score, teams)
    const topTeam = R.head(sorted)
    return topTeam
}

const result = getTopName(teams)

console.log(result)