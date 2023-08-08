const currentDisplayNumber = document.querySelector(".current-number");
const previousDisplayNumber = document.querySelector(".previous-number");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal");
const clearButton = document.querySelector(".clear");

let currentNum = "";
let previousNum = "";
let operator = "";

numberButtons.forEach(button => button.addEventListener("click", (e) => {
    handleNumber(e.target.innerHTML);
}))

function handleNumber(number) {
    if(currentNum.length <= 11) {
        currentNum += number;
        currentDisplayNumber.textContent = currentNum;
    }
    if(previousNum !== "" && currentNum !== "" && operator === "") {
        previousNum = "";
        currentDisplayNumber.textContent = currentNum;
    }
}

operatorButtons.forEach(button => button.addEventListener("click", (e) => {
    handleOperator(e.target.innerHTML);
}))

function handleOperator(op) {
    if(previousNum == "") {
        previousNum = currentNum;
        operatorCheck(op)
    } 
    else if(currentNum == "") {
       operatorCheck(op);
    } 
    else {
        compute();
        operator = op;
        currentDisplayNumber.textContent = "";
        previousDisplayNumber.textContent = previousNum + " " + operator;
    }
}

function operatorCheck(text) {
    operator = text;
    previousDisplayNumber.textContent = previousNum + " " + operator;
    currentDisplayNumber.textContent = "";
    currentNum = "";
}

equalsButton.addEventListener("click", () => {
    if(currentNum != "" && previousNum != "") {
        compute();
    }
})

function compute() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if(operator == "+") {
        previousNum += currentNum;
    } else if(operator == "-") {
        previousNum -= currentNum;
    } else if(operator == "*") {
        previousNum *= currentNum;
    } else if(operator == "/") {
        if(currentNum <= 0) {
            previousNum = "Error";
            displayResults();
            return;
        }
        else {
            previousNum /= currentNum;
        }
    }
    previousNum = roundNumber(previousNum);
    previousNum = previousNum.toString();
    displayResults();
}

function roundNumber(num) {
    return Math.round(num * 100000) / 100000;
}
  
function displayResults() {
    if (previousNum.length <= 11) {
      currentDisplayNumber.textContent = previousNum;
    } else {
      currentDisplayNumber.textContent = previousNum.slice(0, 11) + "...";
    }
    previousDisplayNumber.textContent = "";
    operator = "";
    currentNum = "";
}

clearButton.addEventListener("click", clearCalculator);

function clearCalculator() {
    currentNum = "";
    previousNum = "";
    operator = "";
    currentDisplayNumber.textContent = "";
    previousDisplayNumber.textContent = "";
}

decimalButton.addEventListener("click", () => {
    addDecimal();
})

function addDecimal() {
    if(!currentNum.includes(".")) {
        currentNum += ".";
        currentDisplayNumber.textContent = currentNum;
    }
}

function handleDelete() {
    if(currentNum !== "") {
        currentNum = currentNum.slice(0, -1);
        currentDisplayNumber.textContent = currentNum;
        if(currentNum == "") {
            currentDisplayNumber.textContent = "";
        }
    }
    if(currentNum == "" && previousNum !== "" && operator == "") {
        previousNum = previousNum.slice(0, -1);
        currentDisplayNumber.textContent = previousNum;
    }
}

window.addEventListener("keydown", handleKeyPress);

function handleKeyPress(e) {
    e.preventDefault();
    if(e.key >= 0 && e.key <= 9) {
        handleNumber(e.key);
    } else if(e.key == "Enter" || (e.key == "=" && currentNum != "" && previousNum != "")) {
        compute();
    } else if(e.key == "+" || e.key == "-" || e.key == "/") {
        handleOperator(e.key);
    } else if(e.key == "*") {
        handleOperator("*");
    } else if(e.key == ".") {
        addDecimal();
    } else if(e.key == "Backspace") {
        handleDelete();
    } else if(e.key == "Clear") {
        clearCalculator();
    }
}