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
let sblock = one

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

left.addEventListener("click", function() {
    console.log(square[sblock.dataset.location].firstElementChild)
    console.log(sblock)
    if (sblock === square[sblock.dataset.location].firstElementChild) {
        if (left.firstElementChild === null || sblock.dataset.size < left.firstElementChild.dataset.size) {
            left.insertBefore(sblock, left.firstElementChild)
            sblock.dataset.location = 0
        }
    }
})
middle.addEventListener("click", function() {
    if (sblock === square[sblock.dataset.location].firstElementChild) {
        if (middle.firstElementChild === null || sblock.dataset.size < middle.firstElementChild.dataset.size) {
            middle.insertBefore(sblock, middle.firstElementChild)
            sblock.dataset.location = 1
        }
    }
})
right.addEventListener("click", function() {
    if (sblock === square[sblock.dataset.location].firstElementChild) {
        if (right.firstElementChild === null || sblock.dataset.size < right.firstElementChild.dataset.size){
            right.insertBefore(sblock, right.firstElementChild)
            sblock.dataset.location = 2
        }
    }
})

function reset(){
    sblock = one
    for (let i = 0; i < 5; i++) {
        left.appendChild(block[i])
        block[i].dataset.location = 0
    }
}

restart.addEventListener("click", () => reset())