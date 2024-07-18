let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let increaseEl = document.getElementById("increase-el")
let count = 0
let count2 = 0

function increment() {
    count += 1
    countEl.textContent = count
}
function increment2() {
    count2 += 1
    increaseEl.textContent = count2
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    increaseEl.textContent = 0
    count = 0
    count2 = 0
}
