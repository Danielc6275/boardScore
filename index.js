let home = 0
let guest = 0

let homeDisplay = document.getElementById("homeScore")
let guestDisplay = document.getElementById("guestScore")

function add1Home() {
    home += 1
    homeDisplay.textContent = home
    console.log("Home got 1!")
}

function add2Home() {
    home += 2
    homeDisplay.textContent = home
    console.log("Home got 2!")
}

function add3Home() {
    home += 3
    homeDisplay.textContent = home
    console.log("Home got 3!")
}

function add1Guest() {
    guest += 1
    guestDisplay.textContent = guest
    console.log("Guest got 1!")
}

function add2Guest() {
    guest += 2
    guestDisplay.textContent = guest
    console.log("Guest got 2!")
}

function add3Guest() {
    guest += 3
    guestDisplay.textContent = guest
    console.log("Guest got 3!")
}


// Make sure to call the variable first before changing textContent