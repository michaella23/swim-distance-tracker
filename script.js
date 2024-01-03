const lapEl = document.getElementById("lap-num")
const formEl = document.getElementById("form-el")
const totalEl = document.getElementById("total-el")

formEl.addEventListener("submit", calculateDailyMiles)

let laps 
let yards = 66

const yardsPerMile = 1760
let totalYards = laps * yards
let dailyMiles = (totalYards / yardsPerMile).toFixed(1)


let totalMiles = 0
totalMiles += dailyMiles

// document.body.innerHTML += `<p>${totalMiles}</p>`

function calculateDailyMiles(e) {
    e.preventDefault()
    laps = lapEl.value 
    let totalYards = laps * yards
    let dailyMiles = (totalYards / yardsPerMile).toFixed(1)
    totalEl.textContent += dailyMiles
}
