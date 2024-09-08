const guess = document.querySelector("#guess");
const submit = document.querySelector("#submit");
const Congrates = document.querySelector("#congrates");
// Congrates.classList.remove("disabled");
Congrates.classList.add("disabled");
let count = 3;
const remain = document.querySelector("#Remain")
remain.innerHTML = `${count}`;
let prev = [];
const mainFun = submit.addEventListener("click", function (e) {

    if (count > 0) {

        const number = parseInt(document.querySelector("#number").value);

        if (number == 28) {
            const Congrates = document.querySelector("#congrates");

            
            Congrates.classList.add("enabled")
            Congrates.classList.remove("disabled")
            const result = document.querySelector("#result");
            result.innerHTML = "Chupa Lu Tujhko Apni Bahhon Mei Is Tarah Ki Hava Bhi Gujarne Ki Ijajat Mangee, madhosh Ho Jaun Tere Payar Mei Is Tareh Ki Hosh Bhi Anne Ki Ijajat Mangee !";
            count = 1;
        }
        else if (number <= 27 && number > 0) {
            const previous = document.querySelector("#Previous");
            previous.innerHTML = prev + "  " + `${number}`;
            prev = prev + "  " + `${number}`;
        }
        else {
            const result2 = document.querySelector("#Previous");
            result2.innerHTML = "Enter,valid no."
        }
        count--;
    }
    else {
        const result = document.querySelector("#result");
        result.innerHTML = "Baby, Game Over"
    }
    const Remain = document.querySelector("#Remain")
    Remain.innerHTML = `${count}`;
})
function reload() {
    window.location.reload();
}
const btn = document.querySelector("#btn")
btn.addEventListener("click", function () {
    reload();
})

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 16)];

    }
    return color;
}
let intervalId;
const startChangingColor = function () {
    const result = document.querySelector("#result");
    result.innerHTML = "Baby, Are You Ready To Play Game?"
    intervalId = setInterval(changeBgColor, 1000);
}
function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
}
const stopChangingColor = function () {

    window.location.reload();
    clearInterval(intervalId);
}

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
