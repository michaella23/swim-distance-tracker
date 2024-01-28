import { lapsData } from "./laps.js"

const dateEl = document.getElementById("date-el")
const poolNameEl = document.getElementById("pool-name")
const lapEl = document.getElementById("lap-num")
const formEl = document.getElementById("form-el")
const totalEl = document.getElementById("total-el")

formEl.addEventListener("submit", calculateDailyMiles)

let date
let laps 
let yards = 66

const yardsPerMile = 1760
let totalYards = laps * yards
// let dailyMiles = (totalYards / yardsPerMile).toFixed(1)


let totalMiles = 0
// totalMiles += dailyMiles

// document.body.innerHTML += `<p>${totalMiles}</p>`

function calculateDailyMiles(e) {
    e.preventDefault()
    date = dateEl.value.split('').slice(5).join('')
    laps = lapEl.value 
    let totalYards = laps * yards
    let dailyMiles = (totalYards / yardsPerMile).toFixed(1)
    // totalEl.textContent += dailyMiles
    lapsData.push(
        {
            date: date,
            laps: laps,
            miles: dailyMiles,
            pool: poolNameEl.value
        }
    )
    console.log(lapsData)
    renderData()
    return dailyMiles
}

const statsEl = document.querySelector(".stats-el")
console.log(statsEl)

function renderData() {
    const swimData = lapsData.map((entry) => {
        const date = entry.date
        const laps = Number(entry.laps).toFixed(1)
        const miles = Number(entry.miles).toFixed(1)
        statsEl.innerHTML += `
            <div class="daily-stat">
                    <p>${date}</p>
                    <p>${laps}</p>
                    <p>${miles}</p>
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


/* 
on form submit
push an object to lapsData
{
    date: dateEl.value,
    laps: lapEl.value,
    miles: calculateDailyMiles(),
    pool: poolNameEl.value
}
then renderData()
ids: date, pool-name, lap-num
*/
