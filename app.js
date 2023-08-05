let display = document.getElementById("display");
let displayTop = document.querySelector(".display-top");
let displayValue = document.querySelector(".display-value");
let displayBottom = document.querySelector(".display-bottom");
let numButtons = document.querySelectorAll(".number");
let expressButtons = document.querySelectorAll(".expression");
let equalButton = document.querySelector(".equal");

let number1 = document.createElement('div');
let expression = document.createElement('div');
let number2 = document.createElement('div');

let partOne = true;
let partTwo = false;
number1.textContent = "";
expression.textContent = "";
number2.textContent = "";
let num1String;
let num2String;
let num1;
let num2;
let operator;



//getNumberOne add pressed number buttons to result that will show on display
function displayEquation() {
    getNumberOne(); 
    getOperator();
    getNumberTwo();
}
displayEquation();

function getNumberOne() {
    numButtons.forEach(button => button.addEventListener('click', (e) => {
        if(partOne == true) {
        number1.textContent += e.target.innerHTML;
        displayBottom.appendChild(number1);
        num1String = number1.textContent;
        num1 = parseInt(num1String);
        // console.log('Default partOne true, partTwo false');
        // console.log(`getNumberOne partOne ${partOne}`);
        // console.log(`getNumberOne partTwo ${partTwo}`);
        }
    }))
}

function getOperator() {
    expressButtons.forEach(button => button.addEventListener('click', (e => {
        expression.textContent = e.target.innerHTML;
        displayTop.appendChild(number1);        
        displayTop.appendChild(expression);
        operator = expression.textContent;
        partOne = false;
        partTwo = true;
        // console.log(`getOperator partOne ${partOne}`);
        // console.log(`getOperator partTwo ${partTwo}`);      
    })))
}

function getNumberTwo() {
    numButtons.forEach(button => button.addEventListener('click', (e) => {
        if(partTwo == true) {
        number2.textContent += e.target.innerHTML;
        displayBottom.appendChild(number2);
        num2String = number2.textContent;
        num2 = parseInt(num2String);
        // console.log(`getNumberTwo partOne ${partOne}`);
        // console.log(`getNumberTwo partTwo ${partTwo}`);
        }
    }))
}

function clickEqualButton() {
    equalButton.addEventListener('click', () => {
        doOperation();
    });
}
clickEqualButton();

function doOperation() {
    if(operator == '+') {
        console.log(num1+num2);
    } else if(operator == '-') {
        console.log(num1-num2);
    } else if(operator == '*') {
        console.log(num1*num2);
    } else if(operator == '/') {
        console.log(num1/num2);
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// function operate(num1, operator, num2) {
//     if (operator == "+") {
//         return add(num1, num2);
//     } else if (operator == "-") {
//         return subtract(num1, num2);
//     } else if (operator == "*") {
//         return multiply(num1, num2);
//     } else if (operator == "/") {
//         return divide(num1, num2);
//     }
// }