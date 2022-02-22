const value = document.getElementById("value");
const button = document.getElementById("button");
const p1Text = document.querySelector(".p1");
let p2Text = document.querySelector(".p2");
const sum = document.querySelector(".sum");
let showText = document.getElementById("show-text");

function randomNum(max) {
    return Math.floor(Math.random() * max) + 1;
}

button.addEventListener("click", function() {
    let random = randomNum(6);
    p1Text.innerText = "random number: " + random;
    let inputValue = "";
    if (Number(value.value) > 6 || Number(value.value) < 1) {
        showText.innerText = "";
        alert("enter chisht number, 1-6")
    } else {
        inputValue = Number(value.value);
    }
    
    if (inputValue === random) {
        count = 2;
    } else if (Math.abs(inputValue - random) === 1) {
        count = 1;
    } else {
        count = 0;
    }

    p2Text.innerText = "count number: " + count;
})