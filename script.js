
let countHome = 0
let countGuest = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


function home1point() {
    countHome += 1
    homeScore.innerText = countHome

}

function home2points() {
    countHome += 2
    homeScore.innerText = countHome

}

function home3points() {
    countHome += 3
    homeScore.innerText = countHome

}

function guest1point() {
    countGuest += 1
    guestScore.innerText = countGuest
}

function guest2points() {
    countGuest += 2
    guestScore.innerText = countGuest
}

function guest3points() {
    countGuest += 3
    guestScore.innerText = countGuest
}