const buttons = document.querySelectorAll("h2")
const output = document.querySelector(".output");
const operators = document.querySelectorAll(".operators");
const numbers = document.querySelectorAll(".numbers");
let firstInput = ""
let secondInput = ""
let operator = "";

//Switch buttons color
buttons.forEach(switchColor)
function switchColor(button) {
button.addEventListener("mousedown", () => {
    button.style.backgroundColor = "#b35397"
})
button.addEventListener("mouseup", () => {
    button.style.backgroundColor = "#681b52"
})
button.addEventListener("click", () => {
    let content = button.textContent;
    output.textContent = content;
})
}
//Store the numbers and operator


function add(a,b) {
  return a + b
}

function subtract(a, b) {
  return a-b
}

function multiple(a,b) {
  return a * b
}

function divide(a, b) {
  return a / b
}