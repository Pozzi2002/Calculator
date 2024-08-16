const buttons = document.querySelectorAll("h2")
const output = document.querySelector(".output");
const clear = document.querySelector(".clear");
const switchNumber = document.querySelector(".switchNumber");
const operators = document.querySelectorAll(".operators");
const numbers = document.querySelectorAll(".numbers"); 
const dot = document.querySelector(".dot");
const body = document.querySelector("body");
let firstInput = ""
let secondInput = ""
let operator = "";
//Cheap implementation keyword
body.addEventListener("keydown", (e) => {
  if (operator == "" && firstInput.length < 14 && secondInput.length < 14 &&
    (e.key == "0" || e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5"
    || e.key == "6" || e.key == "7" || e.key == "8" || e.key == "9")
  ) {
    firstInput += e.key
    output.innerText = firstInput
  } else if(secondInput.length < 14  && firstInput.length < 14 &&
    (e.key == "0" || e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5"
    || e.key == "6" || e.key == "7" || e.key == "8" || e.key == "9")){
    secondInput += e.key
    output.innerText = secondInput
  } else if (secondInput.length > 14 || firstInput.length > 14 &&
    (e.key == "0" || e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5"
    || e.key == "6" || e.key == "7" || e.key == "8" || e.key == "9")){
    output.innerText = "Max length 14"
    firstInput = ""
    secondInput = ""
    operator = ""
  }
})
//Switch buttons color
buttons.forEach(switchColor)
function switchColor(button) {
button.addEventListener("mousedown", () => {
    button.style.backgroundColor = "#b35397"
})
button.addEventListener("mouseup", () => {
    button.style.backgroundColor = "#681b52"
})
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "#681b52"
})
button.addEventListener("click", () => {
    let content = button.textContent;
    output.textContent = content;
})
}
//Clear calculator
clear.addEventListener("click", (e) => {
  firstInput = "";
  secondInput = "";
  operator = "";
})
//Convert numbers from positive to negative and vice versa
switchNumber.addEventListener("click", (e) => {
    if(operator != "") {
      secondInput = `-${secondInput}`
      output.innerText = secondInput
    } else if (operator == ""){
      firstInput = `-${firstInput}`
      output.innerText = firstInput
    } 
})
//Implementation dot
dot.addEventListener("click", (e) => {
  if(operator != "" && !secondInput.includes(".")) {
    secondInput += "."
    output.innerText = secondInput
  } else if (operator == "" && !firstInput.includes(".")) {
    firstInput += "."
    output.innerText = firstInput
  } else {
    output.innerText = "Err"
  }
  })
//Store the numbers, operators and calculate it
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (operator == "" && firstInput.length < 14 && secondInput.length < 14) {
      firstInput += e.target.innerText
      output.innerText = firstInput
    } else if(secondInput.length < 14  && firstInput.length < 14 && operator != ""){
      secondInput += e.target.innerText
      output.innerText = secondInput
    } else {
      output.innerText = "Max length 14"
      firstInput = ""
      secondInput = ""
      operator = ""
    }
  })
})
operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    if(e.target.innerText !== "=") {
      operator = e.target.innerText
    } else {
      switch(operator) {
        case "+":
          output.innerText = (Number(firstInput) + Number(secondInput))
          if(output.innerText.length < 14) {
          firstInput = output.innerText
          secondInput = ""
          operator = ""
        } else {
          output.innerText = "Max length 14"
        }
          break;
        case "-":
          output.innerText = (Number(firstInput) - Number(secondInput))
          if(output.innerText.length < 14) {
          firstInput = output.innerText
          secondInput = ""
          operator = ""
        } else {
          output.innerText = "Max length 14"
        }
          break;
          case "*":
            output.innerText = (Number(firstInput) * Number(secondInput))
            if(output.innerText.length < 14) {
            firstInput = output.innerText
            secondInput = ""
            operator = ""
            } else {
              output.innerText = "Max length 14"
            }
            break;
          case "/":
            if(secondInput == 0) {
              output.innerText = "Иди нахуй!"
            } else {
            output.innerText = parseFloat((Number(firstInput) / Number(secondInput)).toFixed(5))
            if(output.innerText.length < 14) {
            firstInput = (output.innerText)
            secondInput = ""
            operator = ""
          } else {
            output.innerText = "Max length 14"
          }
            }
            break;
            case "%":
            output.innerText = (Number(firstInput) % Number(secondInput))
            firstInput = output.innerText
            secondInput = ""
            operator = ""
            break;
      }
    }
  })
})
