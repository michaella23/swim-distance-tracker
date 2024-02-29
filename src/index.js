import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push, onValue, set } from 'firebase/database'

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
const totalRef = ref(db, "total")
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

let totalMiles = 0

function getTotalYards(pool) {
    switch (pool) {
        case "stacy":
            yards = 66
            break
        case "eddy":
            yards = 66
            break
        case "bart":
            yards = 50
            break
        default:
            yards = 50
    }
}

function calculateDailyMiles(e) {
    e.preventDefault()
    date = dateEl.value
    // .split('').slice(5).join('')
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
    resetForm()
}

const statsEl = document.querySelector(".stats-el")

onValue(reference, function(snapshot) {
    const entries = Object.values(snapshot.val())
    const sorted = entries.sort(function(a, b) {
        let dateA = new Date(a.date)
        let dateB = new Date(b.date)
        return dateB - dateA
    })
    console.log(sorted)
    statsEl.innerHTML = ""
    for (let entry of sorted) {
        const date = entry.date.split('').slice(5).join('')
        const laps = Number(entry.laps).toFixed(1)
        const miles = Number(entry.miles).toFixed(1) 
        totalMiles += Number(miles)
        statsEl.innerHTML += `
        <div class="daily-stat">
                <p>${date}</p>
                <p>${laps}</p>
                <p>${miles}</p>
        </div>`
    }
})

set(totalRef, totalMiles)
    .then(() => totalEl.textContent = totalMiles)

function resetForm() {
    dateEl.value = ""
    poolNameEl.value = ""
    lapEl.value = ""
}