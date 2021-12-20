const guessNum = guessNumFunc(1, 100)
console.log(guessNum);

function getVal() {
    let val = document.querySelector('input').value
}

function guessNumFunc(min, max) {
    return parseInt(Math.random() * (max - min) + min)
    console.log(guessNum)
}

// let btn = document.getElementById("check")
// btn.addEventListener('click', onClickBtn)
let sayac = 5

function onClickBtn() {
    let val = document.querySelector('input').value
    console.log(val);
    if (val <= 0 || val > 100) {
        alert("Enter the between 1-100 number")
    } else {
        sayac--
        if (sayac > 0) {
            if (val < guessNum) {
                alert("you can go up")
            } else if (val == guessNum) {
                let winHTML = document.getElementById("container").innerHTML = "<h1>YOU WIN!!!!</h1>"
            } else {
                alert("you can go down")
            }
            document.getElementById("attempNum").innerText = sayac
        } else {
            let loseHTML = document.getElementById("container").innerHTML = "<h1>Your attemp is finished </h1>"
        }
    }
}