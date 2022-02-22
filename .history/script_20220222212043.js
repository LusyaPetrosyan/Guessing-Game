const value = document.getElementById("value");
const button = document.getElementById("button");
const p1Text = document.querySelector(".p1");
let p2Text = document.querySelector(".p2");
const sum = document.querySelector(".sum");
let showText = document.getElementById("show-text");
let count = 0;

button.addEventListener("click", function() {
    let random = Math.floor(Math.random() * 6) + 1;
    p1Text.innerText = "random number: " + random;
    let inputValue = "";
    if (Number(value.value) > 6 || Number(value.value) < 1) {
        showText.innerText = "";
        alert("please enter , 1-6")
    } else {
        inputValue = Number(value.value);
    }
    let a = new Promise((resolve, reject)=>{
        if (inputValue === random) {
            count = 2;
            resolve(count);
        } else if (Math.abs(inputValue - random) === 1) {
            count = 1;
            resolve(count);
        } else {
            count = 0;
            reject(count);
        }
    })
    a.then((arg)=>{
        p2Text.innerText = "count number: " + arg;
    }).catch((val)=>{
        p2Text.innerText = "count number: " + val;
    })
})