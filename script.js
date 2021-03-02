let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let four = document.querySelector("#four")
let five = document.querySelector("#five")
let left = document.querySelector(".left")
let middle = document.querySelector(".middle")
let right = document.querySelector(".right")
let square = document.querySelectorAll(".square")
let block = document.querySelectorAll(".block")
let restart = document.querySelector("#restart")
let moves = document.querySelector("#moves")
let wins = document.querySelector("#wins")
let topScore = document.querySelector("#topScore")
let sblock = null

// if (one === square[one.dataset.location]) {
//     one.addEventListener("click", () => sblock = one)
// }
// if (two === square[two.dataset.location]) {
//     two.addEventListener("click", () => sblock = two)
// }
// if (three === square[three.dataset.location]) {
//     three.addEventListener("click", () => sblock = three)
// }
// if (four === square[four.dataset.location]) {
//     four.addEventListener("click", () => sblock = four)

// }
// if (five === square[five.dataset.location]) {
//     five.addEventListener("click", () => sblock = five)
// }
one.addEventListener("click", () => sblock = one)
two.addEventListener("click", () => sblock = two)
three.addEventListener("click", () => sblock = three)
four.addEventListener("click", () => sblock = four)
five.addEventListener("click", () => sblock = five)

console.log(left.childElementCount)

left.addEventListener("click", function() {
    if (sblock !== null && sblock === square[sblock.dataset.location].firstElementChild) {
        if (left.firstElementChild === null || sblock.dataset.size < left.firstElementChild.dataset.size) {
            left.insertBefore(sblock, left.firstElementChild)
            sblock.dataset.location = 0
            sblock = null
            moves.innerHTML = Number(moves.innerHTML)+1
        }
    }
})
middle.addEventListener("click", function() {
    if (sblock !== null && sblock === square[sblock.dataset.location].firstElementChild) {
        if (middle.firstElementChild === null || sblock.dataset.size < middle.firstElementChild.dataset.size) {
            middle.insertBefore(sblock, middle.firstElementChild)
            sblock.dataset.location = 1
            sblock = null
            moves.innerHTML = Number(moves.innerHTML)+1
        }
    }
})
right.addEventListener("click", function() {
    if (sblock !== null && sblock === square[sblock.dataset.location].firstElementChild) {
        if (right.firstElementChild === null || sblock.dataset.size < right.firstElementChild.dataset.size){
            right.insertBefore(sblock, right.firstElementChild)
            sblock.dataset.location = 2
            sblock = null
            moves.innerHTML = Number(moves.innerHTML)+1
        }
    }
    if (right.childElementCount === 5) {
        if (Number(topScore.innerHTML) === 0 | Number(moves.innerHTML) < Number(topScore.innerHTML)) {
            topScore.innerHTML = moves.innerHTML
        }
        wins.innerHTML = Number(wins.innerHTML)+1
        reset()
    }
})

function reset(){
    sblock = null
    for (let i = 0; i < 5; i++) {
        left.appendChild(block[i])
        block[i].dataset.location = 0
    }
    moves.innerHTML = "0"
}
restart.addEventListener("click", () => reset())