import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push, set, remove } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCQSiN_BXt3z5RV6mMYsdHmF3WcddpxxZ8",
    authDomain: "swim-tracker-2024-17e0f.firebaseapp.com",
    projectId: "swim-tracker-2024-17e0f",
    storageBucket: "swim-tracker-2024-17e0f.appspot.com",
    messagingSenderId: "236148809651",
    appId: "1:236148809651:web:691000bbb4fbf47facb5c6",
    databaseUrl: "https://swim-tracker-2024-17e0f-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
const reference = ref(db, "laps")

import { lapsData } from "./laps.js"

const dateEl = document.getElementById("date-el")
const poolNameEl = document.getElementById("pool-name")
const lapEl = document.getElementById("lap-num")
const formEl = document.getElementById("form-el")
const totalEl = document.getElementById("total-el")

formEl.addEventListener("submit", calculateDailyMiles)

let date
let laps 
let yards
const yardsPerMile = 1760
let totalYards = laps * yards
// let dailyMiles = (totalYards / yardsPerMile).toFixed(1)

let totalMiles = 0
// totalMiles += dailyMiles

function getTotalYards(pool) {
    switch (pool) {
        case "stacy":
            yards = 66
            break
        case "eddy":
            yards = 66
            break
        default:
            yards = 50
    }
}

function calculateDailyMiles(e) {
    e.preventDefault()
    date = dateEl.value.split('').slice(5).join('')
    laps = Number(lapEl.value)
    getTotalYards(poolNameEl.value)
    let totalYards = laps * yards
    let dailyMiles = (totalYards / yardsPerMile).toFixed(1)        
    let thisEntry = {
            date: date,
            laps: laps,
            miles: dailyMiles,
            pool: poolNameEl.value
        }
    push(reference, thisEntry)
    // renderData()
    return dailyMiles
}

const statsEl = document.querySelector(".stats-el")
// console.log(statsEl)

// onValue takes a reference, where to fetch data from (reference), 
// then it takes a function which takes snapshot as an argument
// this will return an object. Do I want an object?
// If I want an array, can use Object.keys(snapshot.val()) - get the ids, Object.values(snapshot.val()) - get the values, Object.entries(snapshot.val()) - get both
// onValue runs every time there is an update to the database
// if using for innerHTML, might need to clear before rendering updated data

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
push an object to ~~lapsData~~ database
{
    date: dateEl.value,
    laps: lapEl.value,
    miles: calculateDailyMiles(),
    pool: poolNameEl.value
}
then renderData()
ids: date, pool-name, lap-num
*/
