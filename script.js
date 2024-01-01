const lapEl = document.getElementById("lap-num")

let laps = 20
let yards = 66

const totalYards = laps * yards
const yardsPerMile = 1760
const dailyMiles = totalYards / yardsPerMile


let totalMiles = 0
totalMiles += dailyMiles

document.body.innerHTML += `<p>${totalMiles}</p>`
