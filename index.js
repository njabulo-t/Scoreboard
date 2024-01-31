let homeScore = 0
let homeEl = document.getElementById("home-el")

function increment1() {
homeScore = homeScore + 1
  homeEl.textContent = homeScore
 }
  function increment2() {
 homeScore = homeScore + 2
  homeEl.textContent = homeScore
  }
  function increment3() {
  homeScore = homeScore + 3
  homeEl.textContent = homeScore  
  }
  
 let guestScore = 0
 let guestEl = document.getElementById("guest-el")
 
function increment4() {
    guestScore = guestScore + 1
    guestEl.textContent = guestScore
}

function increment5() {
    guestScore = guestScore + 2
    guestEl.textContent = guestScore
}

function increment6() {
    guestScore = guestScore + 3
    guestEl.textContent = guestScore
}

function restartBtn() {
    homeScore = 0
    guestScore = 0
    homeEl.textContent = "0"
    guestEl.textContent ="0"
   
}



