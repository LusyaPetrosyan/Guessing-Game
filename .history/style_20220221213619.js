const value = document.getElementById("value").value;
const button = document.getElementById("button")
const showText = document.getElementById("show-text");

button.addEventListener("click", function() {
    function randomNum(max) {
        return Math.floor(Math.random() * max);
    }
    showText.innerText = "random number: " + randomNum(6);
})