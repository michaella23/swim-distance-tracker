import { lapsData } from "./laps.js"

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
// totalMiles += dailyMiles

// document.body.innerHTML += `<p>${totalMiles}</p>`

function calculateDailyMiles(e) {
    e.preventDefault()
    laps = lapEl.value 
    let totalYards = laps * yards
    let dailyMiles = (totalYards / yardsPerMile).toFixed(1)
    // totalEl.textContent += dailyMiles
    return dailyMiles
}

const statsEl = document.querySelector(".stats-el")
console.log(statsEl)

function renderData() {
    const swimData = lapsData.map((entry) => {
        statsEl.innerHTML += `
            <div class="daily-stat">
                    <p>${entry.date}</p>
                    <p>${entry.laps.toFixed(1)}</p>
                    <p>${entry.miles.toFixed(1)}</p>
            </div>`
        // const dailyEntry = document.createElement("div")
        // dailyEntry.setAttribute("class", "daily-stat")
        // const dateEl = document.createElement("p")
        // dateEl.textContent = entry.date
        // // console.log(date.textContent)
        // const lapsEl = document.createElement("p")
        // lapsEl.textContent = entry.laps
        // const milesEl = document.createElement("p")
        // milesEl.textContent = entry.miles
        // console.log(milesEl)
        // dailyEntry.innerHTML += dateEl
        // console.log(dailyEntry)
        // dailyEntry.appendChild = lapsEl
        // dailyEntry.appendChild = milesEl
        totalMiles += entry.miles
    })
    return swimData
}

renderData()

function renderTotal() {
    // totalMiles = totalMiles + miles
    totalEl.textContent += totalMiles.toFixed(1)
}

renderTotal()
